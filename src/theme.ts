import { StyleFunctionProps, ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/roboto";

const themeconfig: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  ...themeconfig,
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("gray.50", "gray.700")(props),
      },
    }),
  },
});
