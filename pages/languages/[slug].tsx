import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import PostDetail from "../../components/posts/post-detail";

const SinglePostPage: NextPage<any> = ({ postDetail }) => {
  return <PostDetail detail={postDetail} />;
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
      postDetail: postsData,
    },
  };
};

export default SinglePostPage;