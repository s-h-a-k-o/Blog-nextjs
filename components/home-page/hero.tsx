import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section
      className="w-full h-full flex flex-col justify-center items-center text-sky-100 bg-gradient-to-b from-sky-600 to-indigo-500
    p-[2rem] overflow-hidden"
    >
      <div className="rounded-[10px] shadow-2xl shadow-gray-900 overflow-hidden">
        <Image
          src="/images/site/frontend.jpg"
          alt="mafia logo"
          width={500}
          height={350}
          priority
          className="" 
        />
      </div>
      <h1 className="maxmd:text-[30px] maxmd:text-center text-[40px] m-[1rem] overflow-hidden">
        Hi, welcome to the frontend world
      </h1>
      <p className="maxmd:text-[20px] text-center md:text-[25px] overflow-hidden">
        Blog about web development
      </p>
    </section>
  );
};

export default Hero;
