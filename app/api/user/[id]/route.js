import User from "@/model/user";
import { AUTH_TOKEN } from "@/utils/constant";
import { connectToDB } from "@/utils/database";
import { extractFields } from "@/utils/helper";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { utapi } from "../../uploadthing/core";

export const PATCH = async (req, { params }) => {
  const payload = await req.json();
  const cookieStore = cookies();
  const authToken = cookieStore.get(AUTH_TOKEN)?.value;

  if (!authToken) {
    return new Response(JSON.stringify({ error: "Unauthrorized user" }), {
      status: 401,
    });
  }

  try {
    const { isAdmin, _id } = verify(authToken, "secret");

    if (!isAdmin && _id !== params.id) {
      return new Response(
        JSON.stringify({
          error: "Access limited to data owner or admin users only",
        }),
        {
          status: 403,
        }
      );
    }

    try {
      await connectToDB();

      const updateData = extractFields(
        payload,
        "_id position firstName middleName lastName userAddress image isAdmin"
      );

      const user = await User.findByIdAndUpdate(params.id, updateData, {
        new: true,
      }).select("-__v -password");

      if (!user)
        return new Response(JSON.stringify({ error: "User Not Found" }), {
          status: 404,
        });

      return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
      if (error.name === "MongoServerError" && error.code === 11000) {
        // Handle unique constraint violation (duplicate key error)
        const field = Object.keys(error.keyPattern)[0];
        const message = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } already taken!`;
        console.error({ error: message });
        return new Response(JSON.stringify({ error: message }), {
          status: 400,
        });
      } else if (error.name === "ValidationError") {
        // Handle validation errors (e.g., "required" errors)
        const validationErrors = Object.values(error.errors).map(
          (error) => error.message
        );
        console.error({ error: validationErrors });
        return new Response(JSON.stringify({ error: validationErrors }), {
          status: 400,
        });
      } else {
        // Handle other errors
        console.error("Error saving user:", error);
        return new Response(JSON.stringify({ error: "Faild to fetch user" }), {
          status: 500,
        });
      }
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 401,
    });
  }
};

export const DELETE = async (req, { params }) => {
  // const secret = process.env.JWT_KEY || "";
  const cookieStore = cookies();
  const authToken = cookieStore.get(AUTH_TOKEN)?.value;

  if (!authToken) {
    return new Response(JSON.stringify({ error: "Unauthrorized user" }), {
      status: 401,
    });
  }

  try {
    const { isAdmin, _id } = verify(authToken, "secret");

    if (!isAdmin && _id !== params.id) {
      return new Response(
        JSON.stringify({
          error: "Access limited to data owner or admin users only",
        }),
        {
          status: 403,
        }
      );
    }

    try {
      await connectToDB();

      const user = await User.findById(params.id).select("-password -__v");

      if (!user)
        return new Response(JSON.stringify({ error: "User Not Found" }), {
          status: 404,
        });

      if (user.isAdmin)
        return new Response(
          JSON.stringify({
            error: "Permission denied: Cannot delete admin user",
          }),
          {
            status: 403,
          }
        );

      // If user has a image, delete it from UTAPI server
      if (user.image) {
        await utapi.deleteFiles(user.image.key);
      }

      const deletedUser = await User.deleteOne({ _id: params.id });

      if (deletedUser?.deletedCount <= 0)
        return new Response(
          JSON.stringify({
            error: "Sorry, something went wrong! Failed to delete user",
          }),
          {
            status: 500,
          }
        );

      return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
      if (error.name === "MongoServerError" && error.code === 11000) {
        // Handle unique constraint violation (duplicate key error)
        const field = Object.keys(error.keyPattern)[0];
        const message = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } already taken!`;
        console.error({ error: message });
        return new Response(JSON.stringify({ error: message }), {
          status: 400,
        });
      } else if (error.name === "ValidationError") {
        // Handle validation errors (e.g., "required" errors)
        const validationErrors = Object.values(error.errors).map(
          (error) => error.message
        );
        console.error({ error: validationErrors });
        return new Response(JSON.stringify({ error: validationErrors }), {
          status: 400,
        });
      } else {
        // Handle other errors
        console.error("Error deleting user:", error);
        return new Response(
          JSON.stringify({ error: "Failed to delete user" }),
          {
            status: 500,
          }
        );
      }
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 401,
    });
  }
};
