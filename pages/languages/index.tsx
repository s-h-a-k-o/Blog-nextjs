import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import axios from "axios";
import { PostsModel } from "../../models/Posts";

interface allPostsType {
  allPosts: PostsModel[];
}

const AllPostsPage: NextPage<allPostsType> = ({ allPosts }) => {
  return (
    <>
      <Head>
        <title>Frontend Languages</title>
        <meta name="description" content="Frontend Languages" />
      </Head>
      <AllPosts allposts={allPosts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    "https://nextjs-blog-97b75-default-rtdb.firebaseio.com/POSTS.json"
  );
  const data = await res.data;
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
