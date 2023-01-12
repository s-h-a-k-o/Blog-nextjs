import Image from "next/image";
import { FC } from "react";

const PostDetail: FC<any> = ({ post }) => {
  return (
    <div className="w-full min-h-[calc(100vh-96px)] bg-slate-900 pt-[10%] maxmd:pb-5">
      <div className="flex justify-center overflow-hidden">
        <div
          className="maxmd:w-[65%] md:mx-10 lg:mx-0 bg-slate-500 max-w-[60rem] shadow-2xl shadow-gray-900
    rounded-[6px]"
        >
          <div key={post.slug}>
            <header
              className="md:flex maxmd:text-center justify-between items-center border-b-[6px] border-red-400
        mx-8 mt-6"
            >
              <h1 className="maxmd:mb-5 maxmd:text-[30px] md:text-[35px] lg:text-[50px] text-red-400 font-bold overflow-auto">
                {post.title}
              </h1>
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={300}
                priority
                className="maxmd:w-full mb-5 rounded-[10px] aspect-video"
              />
            </header>
            <div className="p-8 text-white text-[18px] font-bold overflow-hidden ">
              {post.Description}{" "}
              <span
                className="cursor-pointer active:text-red-300 text-red-400"
                onClick={(event) => {
                  event.preventDefault();
                  window.open(post.resource, "_blank");
                }}
              >
                {post.link}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
