import Image from "next/image";
import { FC } from "react";
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started With Nextjs",
  image: "/images/site/nextjs-cover.jpg",
  date: "2022-12-23",
  content: "# This is a first post",
};

const PostDetail: FC = () => {
  return (
    <section className=" flex justify-center">
      <div
        className=" maxmd:w-[65%] bg-gray-500 max-w-[60rem] shadow-2xl shadow-gray-900
      rounded-[6px] mt-10"
      >
        <header
          className="md:flex justify-center items-center border-b-[6px] border-purple-300
        mx-8 mt-6"
        >
          <h1 className="maxmd:text-[30px] text-[50px] text-purple-300 font-bold overflow-hidden">
            {DUMMY_POST.title}
          </h1>
          <Image
            src={DUMMY_POST.image}
            alt={DUMMY_POST.title}
            width={250}
            height={150}
            className="maxmd:w-full mb-8 maxmd:mt-5"
          />
        </header>
        <ReactMarkdown className="p-8 text-white font-bold">
          {DUMMY_POST.content}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default PostDetail;
