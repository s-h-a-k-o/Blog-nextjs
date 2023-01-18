import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import axios from "axios";
import { PostsModel } from "../models/Posts";

interface PostsType {
  featuredPosts: PostsModel[];
}

const HomePage: NextPage<PostsType> = ({ featuredPosts }) => {
  return (
    <>
      <Head>
        <title>Frontend Blog</title>
        <meta name="description" content="Blog about frontend development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    "https://nextjs-blog-97b75-default-rtdb.firebaseio.com/POSTS.json"
  );
  const data = await res.data; // firebase-dan migebuli data aris obieqti da ara array amitom =>
  const postsData = []; // ==> davpushot postData array-shi

  for (const key in data) {
    postsData.push({
      slug: key,
      ...data[key],
    });
  }

  return {
    props: {
      featuredPosts: postsData,
    },
  };
};

export default HomePage;
