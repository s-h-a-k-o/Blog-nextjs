import { NextPage, GetStaticProps } from "next";
import AllPosts from "../../components/posts/all-posts";

const AllPostsPage: NextPage<any> = ({ allPosts }) => {
  return <AllPosts allposts={allPosts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://nextjs-blog-97b75-default-rtdb.firebaseio.com/POSTS.json"
  );
  const data = await res.json();
  const postsData = [];

  for (const key in data) {
    postsData.push({
      slug: key,
      ...data[key],
    });
  }

  return {
    props: {
      allPosts: postsData,
    },
  };
};

export default AllPostsPage;
