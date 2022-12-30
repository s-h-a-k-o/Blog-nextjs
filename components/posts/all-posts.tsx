import { FC } from "react";
import PostsItem from "./posts-item";

const AllPosts: FC<any> = ({ allposts }) => {
  return (
    <div>
      <h2 className="text-[50px] p-8 text-gray-900 font-bold text-center">
        All Posts Page
      </h2>
      <ul className="grid ls:grid-cols-3 maxmd:grid-cols-1 md:grid-cols-2 gap-[2rem] gap-y-[100px] mb-12 list-none">
        {allposts.map((post: any) => (
          <PostsItem key={post.slug} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default AllPosts;
