import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };

const colors = {
  brand: {
    primary: "#580AFF",
    secondary: "#9E89F1",
    tertiary: "#000000",
    quaternary: "#FFFFFF"
  },
};

const theme = extendTheme({ colors });
export default theme;
export function create() {
  return <p>create</p>;
}
