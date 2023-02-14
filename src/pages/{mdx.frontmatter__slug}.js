import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPost = () => {
  return (
    <Layout pageTitle={"The most awesome blog post ever"}>
      <p>This is where my blog posts would go (if I had one) </p>
    </Layout>
  );
};

export const Head = () => <Seo title={"Best post ever"} />;

export default BlogPost;
