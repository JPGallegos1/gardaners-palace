import { Heading, HStack, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

export interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({ title }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack
      as="header"
      width="100%"
      maxWidth={{
        base: "full",
        sm: "full",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
      margin="0 auto"
      display="flex-column"
      textAlign="center"
      padding="2rem 0"
    >
      <Heading
        as="h1"
        width="100%"
        textAlign={{ base: "center", sm: "center", md: "center" }}
        fontSize={[24, 36, 48, 60]}
        paddingBottom="0.5rem"
      >
        {title}
      </Heading>
      <Button onClick={toggleColorMode} color={useColorModeValue("dark.primaryText", "dark.primaryText")} bg={useColorModeValue("light.primary", "dark.primary")} variant="solid">
        {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </HStack>
  );
};

export default Header;
