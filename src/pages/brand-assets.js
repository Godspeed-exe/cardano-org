import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import SiteHero from "@site/src/components/Layout/SiteHero";
import BoundaryBox from "@site/src/components/Layout/BoundaryBox";
import Divider from "@site/src/components/Layout/Divider";
import Link from "@docusaurus/Link";
import BrandAssetsSection from "../components/BrandAssetsSection";

function HomepageHeader() {
  const { siteTitle } = "useDocusaurusContext()";
  return (
    <SiteHero
      title="Brand Assets"
      description="Our brand is a reflection of everything that we create. Here are 
        some of the things that make up our brand and how you can use them."
      bannerType="braidRedBlue"
    />
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <BoundaryBox>
          <BrandAssetsSection />
        </BoundaryBox>
      </main>
    </Layout>
  );
}
