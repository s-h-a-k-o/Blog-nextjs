import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started With Nextjs",
  image: "/images/site/nextjs-cover.jpg",
  date: "2022-12-23",
  content: "This is a first post",
  isFeatured: false,
  except:
    "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed",
};

const PostDetail: FC<any> = ({ detail }) => {
  const router = useRouter();
  const query = router.query;
  const slugProp = query.slug;
  console.log(slugProp);
  return (
    <section className=" flex justify-center">
      <div
        className=" maxmd:w-[65%] bg-gray-500 max-w-[60rem] shadow-2xl shadow-gray-900
      rounded-[6px] mt-10"
      >
        {detail.map((post: any) => {
          console.log(post.slug);
          if (slugProp === post.slug) {
            return (
              <div key={post.slug}>
                <header
                  className="md:flex justify-center items-center border-b-[6px] border-purple-300
          mx-8 mt-6"
                >
                  <h1 className="maxmd:text-[30px] text-[50px] text-purple-300 font-bold overflow-hidden">
                    {post.title}
                  </h1>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={300}
                    height={200}
                    priority
                    className="maxmd:w-full mb-5 rounded-[10px] aspect-video md:ml-4"
                  />
                </header>
                <div className="p-8 text-white text-[18px] font-bold">{post.except}</div>
              </div>
            );
          }
        })}
        {/* <header
          className="md:flex justify-center items-center border-b-[6px] border-purple-300
        mx-8 mt-6"
        >
          <h1 className="maxmd:text-[30px] text-[50px] text-purple-300 font-bold overflow-hidden">
            {DUMMY_POST.title}
          </h1>
          <div>
            <Image
              src={DUMMY_POST.image}
              alt={DUMMY_POST.title}
              width={300}
              height={200}
              className="w-full mb-5 rounded-[10px]"
            />
          </div>
        </header>
        <div className="p-8 text-white font-bold">{DUMMY_POST.content}</div> */}
      </div>
    </section>
  );
};

export default PostDetail;
