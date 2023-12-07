import Hero from "@/components/HeroSection";
import Layout from "@/components/Layout";
import Article from "@/components/ArticleSection";
import Features from "@/components/FeatureSection";
import Qoutes from "@/components/QouteSection";
import Testimony from "@/components/TestimonySection";

export default function Main() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Article />
      <Qoutes />
      <Testimony />
    </Layout>
  );
}
