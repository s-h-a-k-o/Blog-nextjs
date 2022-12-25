import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section
      className="flex flex-col justify-center items-center text-sky-100 bg-gradient-to-b from-sky-600 to-indigo-500
    p-[2rem]"
    >
      <div className="rounded-[50%] shadow-2xl shadow-gray-900 overflow-hidden">
        <Image
          src="/images/site/119056.jpg"
          alt="mafia logo"
          width={250}
          height={250}
          className="rounded-[50%]"
        />
      </div>
      <h1 className="text-[40px] m-[1rem]">
        Hi, welcome to the frontend world
      </h1>
      <p className="text-[20px]">
        Blog about web development - especially frontend framework like React
      </p>
    </section>
  );
};

export default Hero;
