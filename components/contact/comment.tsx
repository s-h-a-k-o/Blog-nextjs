import Link from "next/link";
import { FC, useState } from "react";
import { FormModel } from "../../models/Posts";

interface PropsType {
  message: FormModel[];
  deleteComment: (index: number) => void;
}

const YourComment: FC<PropsType> = ({ message, deleteComment }) => {
  return (
    <section className=" min-w-full bg-slate-500 min-h-[calc(100vh-97px)] overflow-hidden">
      <h2 className="text-[30px] text-white text-center font-bold mt-[15px]">
        Comments
      </h2>
      {message.length === 0 && (
        <div className="mt-[10%] w-[80%] border-[5px] border-gray-900 p-6 rounded-md m-auto">
          <h2 className="text-center text-red-400 text-[35px] maxmd:text-[25px]">
            You have no comments yet! -{" "}
            <Link href="/comment">
              <span className="hover:text-gray-900 cursor-pointer underline">
                Leave your comment
              </span>
            </Link>
          </h2>
        </div>
      )}
      <div className=" md:w-[65%] maxmd:mx-3 m-auto rounded-md flex flex-col justify-center items-center">
        {message.map((item, index) => (
          <div
            key={item._id}
            className="bg-slate-300 px-3 py-3 w-[70%] border-[10px] border-gray-900  m-5 rounded-md"
          >
            <div className="text-black lg:flex m-5 rounded-lg overflow-auto">
              <div className="md:min-w-[120px] max-w-[120px] p-2 font-bold">
                {item.name}
              </div>
              <div className="p-2">
                <h4 className="mb-2 italic text-blue-500">{item.email}.</h4>
                <p className="text-justify ">{item.message}</p>
              </div>
            </div>
            <div className="grid grid-rows gap-3 md:grid md:grid-cols-2 ">
              <div className="text-center">
                <button
                  className=" bg-green-400 text-black text-[13px] px-2 p-1 rounded-md font-bold 
                hover:bg-slate-500 hover:text-white active:bg-slate-400 active:text-black"
                  onClick={() => deleteComment(index)}
                >
                  delete comment
                </button>
              </div>

              <div className="text-center">
                <Link href="/comment">
                  <button
                    className=" bg-blue-400 p-1 rounded-md font-bold px-2 text-[13px]
                  hover:bg-slate-500 hover:text-white active:bg-slate-100 active:text-black"
                  >
                    add more comments
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YourComment;
