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
    <li className=" mx-8 overflow-hidden bg-slate-500 text-center shadow-2xl shadow-gray-900">
      <Link href={`/posts/${post.slug}`}>
        <div>
          <Image
            src={post.image}
            alt={post.title}
            width={700}
            height={250}
            priority
            className="aspect-video"
          />
        </div>

        <div className="p-2 text-white">
          <h3 className="text-[26px]">{post.title}</h3>
          <time className="text-gray-300">{formattedDate}</time>
          <p className="p-4 text-[18px]">{post.except}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostsItem;
