import type { NextPage } from "next";
import Card from "../components/Card";
import Layout from "../components/Layout";
import data from "../db.json";

const Home: NextPage = () => {
  return (
    <Layout>
      <Card data={data} />
    </Layout>
  );
};

export default Home;
