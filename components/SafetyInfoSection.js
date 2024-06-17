import React from "react";

const SafetyInfoSection = ({ id = "safety-info" }) => {
  return (
    <section id={id} className="w-full py-28 px-10 bg-gray-50">
      <section className="text-center max-w-5xl mx-auto">
        <h2 className="font-bold lg:text-5xl text-4xl text-center mb-4">
          Help Yourself, Your Friends and Your Family
        </h2>
        <p>

        Its serves as a centralized platform for citizens to report, address, and resolve various public concerns and grievances effectively. Through user-friendly interfaces and efficient workflow mechanisms, the portal facilitates transparent communication between citizens and relevant authorities, ensuring timely action and resolution of issues ranging from infrastructure problems to public safety concerns. By promoting civic engagement and accountability, the portal empowers communities to actively participate in the improvement and maintenance of public services, ultimately fostering a more responsive and inclusive governance system.
        </p>
      </section>
    </section>
  );
};

export default SafetyInfoSection;
