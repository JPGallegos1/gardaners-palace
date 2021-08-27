import Head from "next/head";
import { Container, VStack } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <VStack
        as="main"
        width="100%"
        height="100%"
        maxWidth="container.lg"
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
