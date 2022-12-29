import { FC } from "react";
import PostsItem from "../posts/posts-item";

const FeaturedPosts: FC<any> = ({ posts }) => {
  return (
    <section className="">
      <h1 className="text-[50px] p-8 text-gray-900 font-bold text-center">
        Featured Posts
      </h1>
      <ul
        className="grid grid-cols-4 maxmd:grid-cols-1 md:grid-cols-2 ls:grid-cols-4 gap-[1.5rem]  list-none
      overflow-hidden"
      >
        {posts.map((post: any) => (
          <PostsItem key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default FeaturedPosts;

//flex flex-row maxmd:flex-col
