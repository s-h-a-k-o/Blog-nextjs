import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const HomePage: NextPage<any> = ({ featuredPosts }) => {
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
      featuredPosts: postsData,
    },
  };
};

export default HomePage;
