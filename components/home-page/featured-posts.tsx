import { FC } from "react";
import PostsItem from "../posts/posts-item";

const FeaturedPosts: FC<any> = ({ posts }) => {
  return (
    <section className="w-full  overflow-hidden">
      <h1 className="md:text-[50px] maxmd:text-[200%] p-8 text-gray-300 font-bold text-center overflow-hidden">
        Three Main Languages
      </h1>
      <ul
        className=" mb-8 grid maxmd:grid-cols-1 md:grid-cols-2 ls:grid-cols-3 gap-[1.5rem]  list-none
       p-5 px-8 overflow-hidden"
      >
        {posts.slice(0, 3).map((post: any) => {
          return <PostsItem key={post.slug} post={post} />;
        })}
      </ul>
    </section>
  );
};

export default FeaturedPosts;
