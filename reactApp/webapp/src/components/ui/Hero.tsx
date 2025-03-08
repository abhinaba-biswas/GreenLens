import React from "react";

import Image from "next/image";

import heroImage from "../../../public/Images/environment.jpg";

const Hero = (): React.JSX.Element => {
  return (
    <section className="flex items-center justify-center max-w-[1100px] mx-auto flex-wrap-reverse xl:flex-nowrap py-10 gap-12">
      <div className="flex items-center justify-end text-center xl:text-left px-10 w-[40%]">
        <span className="text-2xl md:text-4xl md:flex items-center justify-end ">
          Green Lens,
          Technology interventions are crucial for a sustainable future concerning carbon credits. 
          Innovative solutions like AI-powered monitoring, blockchain-based verification, direct air capture (DAC), 
          and precision agriculture enhance the accuracy, transparency, and scalability of carbon credit projects. 
          These advancements drive effective carbon reduction and removal, ensure reliable monitoring, reporting, and verification (MRV), 
          and foster trust in carbon markets, enabling a transition to a low-carbon economy through reliable carbon financing.
        </span>
      </div>

      <div className="flex items-center justify-center py-10 px-10  w-[60%]">
        <Image
          src={heroImage}
          alt="hero image"
          className="rounded-2xl overflow-hidden object-cover w-full max-h-[50rem] max-w-[50rem] md:max-w-full md:max-h-full md:min-w-[45rem] md:min-h-[30rem]"
        />
      </div>
    </section>
  );
};

export default Hero;
