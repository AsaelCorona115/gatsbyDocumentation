// Step 1: Import React
import * as React from "react";

//Components
import Seo from "../components/seo";
import Layout from "../components/layout";
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>
      <p>My favorite thing right now is to play Hi Fi Rush</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

// Step 3: Export your component
export default AboutPage;
