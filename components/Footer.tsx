import { Box, Heading } from "@chakra-ui/react";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box
      as="footer"
      width="100%"
      height="8rem"
      maxWidth={{
        base: "full",
        sm: "full",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
      margin="0 auto"
    >
      <Heading as="h2">Footer</Heading>
    </Box>
  );
};

export default Footer;
