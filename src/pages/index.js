// Step 1: Import React
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

//Components
import Layout from "../components/layout";
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Im doing this to learn, because I want to work in CS</p>
      <StaticImage
        alt="This is my favorite game as of right now"
        src="../images/uWu.jpg"
      />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
