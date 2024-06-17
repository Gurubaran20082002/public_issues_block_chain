import Image from "next/image";
import banner from "@/assets/img/banner.jpg";
import { Button } from "@/components/client";
import sharedContent from "@/config/sharedContent.json";

const Hero = ({ id = "Hero" }) => {
  const { policeStation } = sharedContent
  return (
    <section id={id} className="relative h-[95vh] w-full">
      <Image
        src={banner.src}
        placeholder="blur"
        blurDataURL={banner.blurDataURL}
        fill={true}
        style={{ objectFit: "cover" }}
        alt="Holy Mary statue"
      />
      <section className="absolute inset-0 bg-black/40 h-full flex flex-col justify-center items-center text-white">
        <section className="max-w-5xl mx-auto flex flex-col gap-20">
          <section className="pt-20">
            <h1 className="font-bold lg:text-7xl text-5xl text-center mb-4">
              Public Issues Rectification Portal
            </h1>
            <h3 className="lg:text-3xl text-2xl text-center">
              Its time to Resolve your Issues..
            </h3>
          </section>
          <section className="w-full flex justify-center gap-4 p-5 lg:flex-row flex-col">
            
            <a href={`tel:${policeStation.contact}`}>
              <Button
                size="lg"
                color="white"
                variant="outlined"
                className="hover:bg-white hover:text-black lg:w-auto w-full"
                title={policeStation.name}
              >
                Home page
              </Button>
            </a>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Hero;
