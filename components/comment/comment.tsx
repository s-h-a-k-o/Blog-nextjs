import Link from "next/link";
import { FC } from "react";
import { FormModel } from "../../models/Posts";

interface PropsType {
  message: FormModel[];
  deleteComment: (index: number) => void;
}

const YourComment: FC<PropsType> = ({ message, deleteComment }) => {
  return (
    <section className="w-full bg-slate-800  min-h-[calc(100vh-96px)]">
      <h2 className="text-[30px] text-white text-center font-bold pt-[15px]">
        Comments
      </h2>
      {message.length !== 0 && (
        <h2 className="maxmd:ml-5 md:text-end text-white md:pr-10 text-[20px] my-5">
          <span className="hover:text-sky-300">
            {" "}
            <Link href="/comment">add new comment </Link>
          </span>
        </h2>
      )}
      {message.length === 0 && (
        <h2 className="text-center text-red-500 text-[35px] maxmd:text-[25px] mt-[6%]">
          You have no comments yet! -{" "}
          <Link href="/comment">
            <span className="hover:text-gray-200 cursor-pointer underline">
              Leave your comment
            </span>
          </Link>
        </h2>
      )}
      <div className=" md:w-[65%] maxmd:mx-3 m-auto rounded-md flex flex-col justify-center items-center">
        {message.map((item, index) => (
          <div key={item._id} className="bg-slate-300 p-3 w-[70%] rounded-md mb-10 maxmd:px-5">
            <div className="text-black lg:flex rounded-lg">
              <div className="md:min-w-[120px] max-w-[120px] p-2 pl-3 font-bold">
                {item.name}
              </div>
              <div className="p-3 w-full">
                <h4 className="mb-5 italic text-blue-600">{item.email}.</h4>
                <p className="bg-slate-200 p-3 rounded-[6px] overflow-auto">{item.message}</p>
                <div className="text-end">
                  <button
                    className="mt-8 bg-blue-600 text-white text-[13px] p-2 rounded-md font-bold 
          hover:bg-slate-600"
                    onClick={() => deleteComment(index)}
                  >
                    delete comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YourComment;
