import {
  Heading,
  HStack,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

export interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({ title }) => {
  const blink = keyframes`
			0% {
				width: 0;
			}
			99.9% {
				border-right: .15em solid #53578c;
			}
			100% {
				border: none;
			}`;

  const blink_cursor = keyframes`
    from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: #8f8ddf;
     }

  `;

  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${blink} 3.5s steps(30, end), ${blink_cursor} .5s step-end infinite`;

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
        color="gp.green.300"
        width={{ base: "full", sm: "full" }}
        fontSize="3em"
        animation={animation}
        overflow="hidden"
        whiteSpace="nowrap"
        borderRight=".17em solid"
        borderColor="gp.green.300"
        textAlign="center"
        fontFamily="Manrope Medium"
        letterSpacing=".17em"
      >
        {title}
      </Heading>
    </HStack>
  );
};

export default Header;
