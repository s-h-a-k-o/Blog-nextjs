import { FC } from "react";
import { PostsModel } from "../../models/Posts";
import PostsItem from "./posts-item";

interface AllPostsType {
  allposts: PostsModel[];
}

const AllPosts: FC<AllPostsType> = ({ allposts }) => {
  return (
    <div className="w-full bg-gray-900 overflow-hidden min-h-[calc(100vh-96px)] px-5">
      <h2 className="text-[30px] md:text-[50px] p-8 text-gray-300 font-bold text-center">
        Get Into Programming
      </h2>
      <ul
        className="grid ls:grid-cols-3 maxmd:grid-cols-1 md:grid-cols-2 gap-[2rem] gap-y-[100px] mb-12 list-none
        maxmd:h-[70%] px-5"
      >
        {allposts.map((post: any) => (
          <PostsItem key={post.slug} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default AllPosts;
