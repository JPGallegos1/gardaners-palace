import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        background: "gp.white.100",
        fontSize: "16px",
      },
    }),
  },
  colors: {
    gp: {
      white: {
        100: "#EFEFF2",
      },
      green: {
        100: "#c9f05b",
        200: "#76b049",
        300: "#3b7d39",
        400: "#11572f",
        500: "#113c24",
      },
      purple: {
        100: "#d6c9ff",
        200: "#8f8ddf",
        300: "#53578c",
        400: "#222845",
        500: "#000005",
      },
      red: {
        100: "#EE6855",
      },
    },
  },
});
