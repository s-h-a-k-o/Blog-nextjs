import Link from "next/link";
import { FC } from "react";

const MainNavigation: FC = () => {
  return (
    <header
      className="text-white w-full h-[6rem] flex justify-between items-center
    bg-gray-600 font-sans"
    >
      <div
        className="hover:text-gray-300 active:text-gray-300 text-[20px] 
        md:text-[30px] font-bold ml-10"
      >
        <Link href="/">NEXT BLOG</Link>
      </div>
      <nav className="mr-10">
        <ul className="flex m-0 p-0 text-[14px] md:text-[19px]">
          <li className="mr-10 hover:text-gray-300 active:text-gray-300">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="mr-4 hover:text-gray-300 active:text-gray-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
