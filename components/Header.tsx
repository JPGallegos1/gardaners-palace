import { Heading, HStack } from "@chakra-ui/react";

export interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <HStack
      as="header"
      width="100%"
      height="12rem"
      maxWidth={{
        base: "full",
        sm: "full",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
      margin="0 auto"
    >
      <Heading
        as="h1"
        color="gp.purple.100"
        width={{ base: "full", sm: "full" }}
        textAlign={{ base: "center", sm: "center", md: "right" }}
        fontSize={[24, 36, 48, 60]}
      >
        {title}
      </Heading>
    </HStack>
  );
};

export default Header;
