import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const PostsItem: FC<any> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className="mx-8 bg-slate-500 text-center shadow-2xl shadow-gray-900">
      <Link href="/posts/detail">
        <div className="">
          <Image
            src={post.image}
            alt={post.title}
            width={600} // ektesi gamosaxulebistvis archev zomas
            height={300}
            className="w-full" //tu zomas sheamcireb 'full' sheavsebs kontainers
          />
        </div>
        <div className="p-2 text-white">
          <h3 className="text-[26px]">{post.title}</h3>
          <time className="text-gray-300">{formattedDate}</time>
          <p className="mt-4">{post.except}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostsItem;
