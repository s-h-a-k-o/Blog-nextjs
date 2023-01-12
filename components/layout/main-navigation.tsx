import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState, useEffect } from "react";

interface WinSizeType {
  winWidth: number | undefined;
  winHeight: number | undefined;
}

const MainNavigation: FC = () => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);

  let windowWidth: number | undefined;
  let winHeight: number | undefined;
  if (typeof window !== "undefined") {
    windowWidth = window.innerWidth;
    winHeight = window.innerHeight;
  } else {
    console.log("error");
  }

  const [winSize, setWinSize] = useState<WinSizeType>({
    winWidth: windowWidth,
    winHeight: winHeight,
  });

  const changeSize = () => {
    setWinSize({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", changeSize);

    if (winSize.winWidth || 0 >= 768) {
      setShowMenu(false);
    }

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, [winSize]);

  const switchMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  const router = useRouter();
  const path = router.pathname;

  useEffect(() => {
    setShowMenu(false);
  }, [path]);

  return (
    <section>
      <header
        className=" text-white h-[6rem] flex justify-between items-center
  bg-gray-600 font-sans overflow-hidden w-full"
      >
        <div
          className="hover:text-gray-300 active:text-gray-300 text-[20px] 
      md:text-[20px] lg:text-[30px] font-bold ml-10"
        >
          <Link href="/">FRONTEND BLOG</Link>
        </div>

        <nav className="mr-5 maxmd:hidden">
          <ul className="flex md:text-[16px] lg:text-[19px] font-bold">
            <li className="cursor-pointer md:mr-7 lg:mr-10 text-green-200 active:text-gray-300">
              <Link href="/languages">Web Languages</Link>
            </li>
            <li className="cursor-pointer md:mr-7 lg:mr-10 text-blue-300 rounded-[8px]  active:text-gray-300">
              <Link href="/comment">Add Comment</Link>
            </li>
            <li className="cursor-pointer mr-4 text-[rgb(205,133,63)] rounded-[8px]  active:text-gray-300">
              <Link href="/your-comment">Go To Comments</Link>
            </li>
          </ul>
        </nav>
        <div
          className="md:hidden mr-5 w-[50px] h-[50px] hover:bg-slate-900 bg-slate-800 cursor-pointer rounded-[50%] flex flex-col justify-center items-center px-[12px]"
          onClick={switchMenuHandler}
        >
          <div className="bg-white h-[1px] w-full my-[4px]"></div>
          <div className="bg-white h-[1px] w-full my-[4px]"></div>
          <div className="bg-white h-[1px] w-full my-[4px]"></div>
        </div>
      </header>
      {showMenu && (
        <div
          className={`md:hidden w-[200px] h-[300px] text-white bg-slate-700 absolute right-0 pt-5 rounded-[4px] z-50`}
        >
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="text-[rgb(255,124,124)] active:text-gray-300 mb-7">
              <Link href="/">Home</Link>
            </div>
            <div className="mb-7 text-green-200 active:text-gray-300">
              <Link href="/languages">Web Languages</Link>
            </div>
            <div className="mb-7 text-blue-300 active:text-gray-300">
              <Link href="/comment">Add Comment</Link>
            </div>
            <div className="text-[rgb(205,133,63)] active:text-gray-300">
              <Link href="/your-comment">Go To Comments</Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainNavigation;
