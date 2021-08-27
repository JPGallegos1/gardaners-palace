import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box color="gp.red.100">Main content here</Box>
    </Layout>
  );
};

export default Home;
