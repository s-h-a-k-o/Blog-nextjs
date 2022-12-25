import { NextPage } from "next";
import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started With Nextjs",
    image: "/images/site/nextjs-cover.jpg",
    except:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed",
    date: "2022-12-23",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started With Nextjs",
    image: "/images/site/nextjs-cover.jpg",
    except:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed",
    date: "2022-12-23",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started With Nextjs",
    image: "/images/site/nextjs-cover.jpg",
    except:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed",
    date: "2022-12-23",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started With Nextjs",
    image: "/images/site/nextjs-cover.jpg",
    except:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed",
    date: "2022-12-23",
  },
];

const AllPostsPage: NextPage = () => {
  return <AllPosts allposts={DUMMY_POSTS} />;
};

export default AllPostsPage;
