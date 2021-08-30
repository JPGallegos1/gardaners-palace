import { extendTheme, useColorModeValue } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        background: useColorModeValue("light.background", "dark.background"),
        fontSize: "16px",
      }
    }),
  },
  colors: {
    dark: {
      background: "#16161a",
      primary: "#7f5af0",
      secondary: "#2cb67d",

      // Backgrounds
      primaryBackground: "#16161a",
      secondaryBackground: "#242629",
      
      // Texts
      primaryText: "#fffffe",
      secondaryText: "#94a1b2"
    },
    light: {
      background: "#f8f5f2",
      primary: "#7f5af0",
      secondary: "#078080",

      // Backgrounds
      primaryBackground: "#f8f5f2",
      secondaryBackground: "#fffffe",
      
      // Texts
      primaryText: "#232323",
      secondaryText: "#222525"
    },
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
