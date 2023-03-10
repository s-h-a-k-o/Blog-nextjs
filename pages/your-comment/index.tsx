import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import YourComment from "../../components/comment/comment";
import YourMessage from "../../components/comment/comment";
import { FormModel } from "../../models/Posts";
import axios from "axios";

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
      await axios.delete(
        `https://store-form-input-default-rtdb.firebaseio.com/formInput/${data[index]._id}.json`
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
