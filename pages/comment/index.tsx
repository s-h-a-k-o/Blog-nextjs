import { NextPage } from "next";
import Head from "next/head";
import CommentForm from "../../components/contact/comment-form";

const ComemntPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>add comment</title>
        <meta name="description" content="add your comment about frontend " />
      </Head>
      <CommentForm />;
    </>
  );
};

export default ComemntPage;
