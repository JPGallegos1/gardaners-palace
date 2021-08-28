import NextLink from "next/link";
import {
  List,
  ListItem,
  Heading,
  Stack,
  Text,
  Link,
  Box,
  BoxProps,
  VStack,
  Image,
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
            boxShadow="4px 6px 10px #E5E5E5"
            paddingY="2rem"
            paddingX="1rem"
            marginX="1rem"
            background="white"
          >
            <Box height="13rem">
              <Image src={card.image} width="100%" height="100%" />
            </Box>

            <Heading
              as="h2"
              color="gp.green.200"
              paddingY="2rem"
              fontSize="1.5em"
              fontFamily="Manrope ExtraBold"
              lineHeight="32.78px"
              textAlign="center"
            >
              {card.title}
            </Heading>

            <Text
              color="gp.purple.500"
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
                <Link color="gp.purple.500" fontSize={[16, 18, 20, 22, 24]}>
                  Leer más
                </Link>
              </NextLink>
            </Box>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Card;
