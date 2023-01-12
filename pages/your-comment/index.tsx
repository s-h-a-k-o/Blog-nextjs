import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import YourComment from "../../components/contact/comment";
import YourMessage from "../../components/contact/comment";
import { FormModel } from "../../models/Posts";

interface FormType {
  message: FormModel[];
}

const MessagesPage: NextPage<FormType> = ({ message }) => {
  const [data, setData] = useState<FormModel[]>([]);
  useEffect(() => {
    setData(message);
  }, [message]);
  const deleteComment = async (index: number) => {
    try {
      await fetch(
        `https://store-form-input-default-rtdb.firebaseio.com/formInput/${data[index]._id}.json`,
        {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setData(data.filter((item, i) => i !== index));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>your Comment</title>
        <meta name="description" content="add your comment about frontend" />
      </Head>
      <YourComment message={data} deleteComment={deleteComment} />
    </>
  );
};

export default MessagesPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://store-form-input-default-rtdb.firebaseio.com/formInput.json"
  );
  const data = await res.json();

  const commentData = [];

  for (const key in data) {
    commentData.push({
      _id: key,
      ...data[key],
    });
  }
  return {
    props: { message: commentData },
  };
};
