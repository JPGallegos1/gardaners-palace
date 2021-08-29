import NextLink from "next/link";
import {
  List,
  ListItem,
  Heading,
  Text,
  Link,
  Box,
  VStack,
  Image,
  useColorModeValue,
  Button
} from "@chakra-ui/react";

export interface ICard {
  data: any;
}

const Card: React.FC<ICard> = ({ data }: ICard) => {
  return (
    <VStack height="100%" minHeight="30rem">
      <List
        maxWidth="73,125rem"
        width="100%"
        height="100%"
        display="flex"
        justifyContent="space-between"
        flexDirection={{ base: "column", sm: "column", lg: "row" }}
      >
        {data.map((card: any) => (
          <ListItem
            key={card.id}
            maxWidth="24,375rem"
            width="100%"
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            marginY="2rem"
            borderRadius="xl"
            paddingY="2rem"
            paddingX="1rem"
            marginX="1rem"
            background={useColorModeValue("light.secondaryBackground", "dark.secondaryBackground")}
          >
            <Box height="13rem" padding="1rem">
              <Image src={card.image} width="100%" height="100%" />
            </Box>

            <Heading
              as="h2"
              color={useColorModeValue("light.secondary", "dark.secondary")}
              paddingY="2rem"
              fontSize="1.5em"
              fontFamily="Manrope ExtraBold"
              lineHeight="32.78px"
              textAlign="center"
            >
              {card.title}
            </Heading>

            <Text
              paddingBottom="2rem"
              fontFamily="Manrope Regular"
              fontSize="calc(1em + 2px)"
              lineHeight="24,59px"
              textAlign="center"
            >
              {card.description}
            </Text>

            <Box width="100%" textAlign="center">
              <NextLink href="#">
                <Button color={useColorModeValue("dark.primaryText", "dark.primaryText")} bg={useColorModeValue("light.primary", "dark.primary")}>
                  Leer más
                </Button>
              </NextLink>
            </Box>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Card;
