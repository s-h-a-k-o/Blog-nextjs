import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import PostDetail from "../../components/posts/post-detail";
import { PostsModel } from "../../models/Posts";

interface SinglePostType {
  posts: PostsModel[];
}

const SinglePostPage: NextPage<SinglePostType> = ({ posts }) => {
  const router = useRouter();
  const query = router.query;
  const slugProp = query.slug;

  const post = posts.find((item: any) => item.slug === slugProp);
  if (!post) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.Description} />
      </Head>
      <PostDetail post={post} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
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
  const paths = postsData.map((post: any) => {
    return {
      params: { slug: post.slug.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const res = await fetch(
    `https://nextjs-blog-97b75-default-rtdb.firebaseio.com/POSTS.json/`
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
      posts: postsData,
    },
  };
};

export default SinglePostPage;
