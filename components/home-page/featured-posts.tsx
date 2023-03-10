import { FC } from "react";
import { PostsModel } from "../../models/Posts";
import PostsItem from "../posts/posts-item";

interface FeaturedPostsType {
  posts: PostsModel[];
}



const FeaturedPosts: FC<FeaturedPostsType> = ({ posts }) => {
  return (
    <section className="w-full bg-slate-900 pb-10 min-h-full">
      <h1 className="md:text-[50px] maxmd:text-[200%] p-8 text-gray-300 font-bold text-center overflow-hidden">
        Three Main Languages
      </h1>
      <ul
        className="grid maxmd:grid-cols-1 md:grid-cols-2 ls:grid-cols-3 gap-[1.5rem]  list-none
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
