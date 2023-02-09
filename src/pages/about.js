// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>
      <p>My favorite thing right now is to play Hi Fi Rush</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="A little about me ;P" />
  </>
);

// Step 3: Export your component
export default AboutPage;
