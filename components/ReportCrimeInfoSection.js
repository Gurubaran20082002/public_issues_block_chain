import React from "react";
import ReportCrimeInfoCard from "./ReportCrimeInfoCard";
import shieldImage from "@/assets/img/reportCrimeSection/shield.png";
import eyeImage from "@/assets/img/reportCrimeSection/eye.png";
import loveOnesImage from "@/assets/img/reportCrimeSection/love-ones.png";

const ReportCrimeInfoSection = ({ id = "empower-safety" }) => {
  return (
    <section id={id} className="w-full py-28 px-10 bg-blue-gray-700">
      <section className="mx-auto text-center">
        <h2 className="font-bold lg:text-5xl text-4xl text-center mb-4 text-white">
           Report any Issues
        </h2>
        <p className="text-blue-gray-200 max-w-5xl mx-auto">
          Your voice matters, contribute to community well-being by reporting
          social issues a safer environment
        </p>
        <section className="flex xl:justify-between lg:justify-around justify-evenly gap-4 pt-20 max-w-7xl mx-auto flex-wrap">
          <section className="hover:-translate-y-6 ease-in-out duration-150">
            <ReportCrimeInfoCard
              imgSrc={shieldImage.src}
              title="Department of Road Transport"
              text="It is dedicated to ensuring the safety and security of all road users, from pedestrians to motorists, by implementing comprehensive measures."
            />
          </section>
          <section className="hover:-translate-y-6 ease-in-out duration-150">
            <ReportCrimeInfoCard
              imgSrc={eyeImage.src}
              title="Department of Electricity"
              text="It serves as the backbone of our modern society, delivering reliable and efficient electrical power to homes, businesses, and industries."
            />
          </section>
          <section className="hover:-translate-y-6 ease-in-out duration-150">
            <ReportCrimeInfoCard
              imgSrc={loveOnesImage.src}
              title="Department of Pollution control"
              text="It is entrusted with the vital task of safeguarding our environment and public health by mitigating and preventing pollution in all its forms."
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default ReportCrimeInfoSection;
