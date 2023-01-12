import Link from "next/link";
import { useRouter } from "next/router";
import { FC, FormEvent, useRef, useState } from "react";

const CommentForm: FC = () => {
  const inputEmailRef = useRef<HTMLInputElement | null>(null);
  const inputNameRef = useRef<HTMLInputElement | null>(null);
  const inputMessageRef = useRef<HTMLTextAreaElement | null>(null);

  const [seeComment, setSeeComment] = useState<boolean>(false);

  const router = useRouter();

  const sendMessageHandler = async (event: FormEvent) => {
    event.preventDefault();

    const emailText = inputEmailRef.current?.value;
    const nameText = inputNameRef.current?.value;
    const messageText = inputMessageRef.current?.value;

    const inputBody = {
      email: emailText,
      name: nameText,
      message: messageText,
    };

    if (
      !emailText ||
      !nameText ||
      !messageText ||
      !emailText.includes("@") ||
      emailText.trim() === "" ||
      nameText.trim() === "" ||
      messageText.trim() === ""
    ) {
      alert("invalid form! please enter valid inputs");
      return;
    }
    try {
      const response = await fetch(
        "https://store-form-input-default-rtdb.firebaseio.com/formInput.json",
        {
          method: "POST",
          body: JSON.stringify(inputBody),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      setSeeComment(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-slate-500 w-full min-h-[calc(100vh-6rem)] overflow-hidden">
      <h2 className="text-[30px] font-bold text-slate-100 text-center mt-[20px]">
        Tell us what you think about Frontend
      </h2>
      <div
        className="mt-[6%] maxmd:w-[70%] md:w-[40%] md:min-w-[500px]  bg-slate-300 m-auto shadow-2xl shadow-gray-900
    py-5 rounded-lg min-w-[250px]"
      >
        <h1 className="text-center font-bold maxmd:text-[20px] text-[35px] p-[20px]">
          Send your comment
        </h1>
        <form onSubmit={sendMessageHandler}>
          <div className="grid maxmd:grid-cols-1 grid-cols-2 gap-4 px-7">
            <div className="flex flex-col ">
              <label
                htmlFor="email"
                className="text-[20px] mb-2 font-bold maxmd:text-[15px] overflow-hidden"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                ref={inputEmailRef}
                className="p-1 px-2 rounded-[6px]"
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="name"
                className="mb-2 font-bold maxmd:text-[15px] overflow-hidden text-[20px]"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                ref={inputNameRef}
                className="p-1 px-2 rounded-[6px]"
              />
            </div>
          </div>
          <div className="flex flex-col mt-3 px-7 m-auto">
            <label
              htmlFor="message"
              className="font-bold mb-2 maxmd:text-[15px] overflow-hidden text-[20px]"
            >
              Your Comment
            </label>
            <textarea
              id="message"
              required
              rows={5}
              ref={inputMessageRef}
              className="rounded-[6px] p-1 px-2"
            ></textarea>
          </div>
          <div className="mx-7 mt-3 mb-3 grid grid-cols-1">
            <button
              className=" text-white font-bold min-w-[35%] text-center rounded-[6px] p-2 mb-3
            place-self-end overflow-hidden maxmd:text-[15px] maxmd:w-[50%] maxmd:place-self-center
            bg-gray-500 hover:bg-slate-600 active:bg-slate-400 active:text-black"
            >
              Send Comment
            </button>
          </div>
        </form>
        {!seeComment && (
          <div className="inline-block maxmd:mx-3 mx-7 mt-10 text-[13px]">
            <Link href="/your-comment">
              <button
                className="bg-gray-500 font-bold rounded-[5px] maxmd:p-1 maxmd:px-0  p-2 px-4 text-white block m-auto 
                 overflow-hidden text-center maxmd:w-[90%] md:[80%] hover:bg-slate-600 active:bg-slate-400 active:text-black"
              >
                Go and see your comment
              </button>
            </Link>
          </div>
        )}
        {seeComment && (
          <div className="bg-gray-400 w-[50%] rounded-lg p-5 mt-4 m-auto overflow-hidden">
            <h3 className="text-[20px] text-center mb-3 font-bold">
              your comment added{" "}
            </h3>
            <button
              onClick={() => {
                seeComment && router.push("/your-comment");
              }}
              className="bg-gray-500 font-bold rounded-[5px] p-2 px-4 text-white block m-auto 
                 overflow-hidden text-center maxmd:w-[90%] md:[80%] hover:bg-slate-600 active:bg-slate-400 active:text-black"
            >
              see your comment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
