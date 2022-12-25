import { NextPage } from "next";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

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

const HomePage: NextPage = () => {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
};

export default HomePage;
