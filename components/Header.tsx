import { Box, Heading } from "@chakra-ui/react";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Box
      as="header"
      width="100%"
      height="8rem"
      maxWidth="container.lg"
      margin="0 auto"
    >
      <Heading as="h1">Header</Heading>
    </Box>
  );
};

export default Header;
