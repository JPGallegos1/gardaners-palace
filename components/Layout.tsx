import Head from "next/head";
import { Container, VStack } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

export interface ILayout {}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header title="Twitter's Gardaners Palace" />
      <VStack
        as="main"
        width="100%"
        height="100%"
        maxWidth={{
          base: "full",
          sm: "full",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}
        minH="100vh"
        margin="0 auto"
      >
        <Container as="section" width="100%" maxWidth="container.lg">
          <>{children}</>
        </Container>
      </VStack>
      <Footer />
    </>
  );
};

export default Layout;
