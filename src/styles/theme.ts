export default {
  font: {
    family: {
      primary: '"Roboto", sans-serif',
      secondary: '"Baloo 2", sans-serif',
    },
    sizes: {
      tiny: "1.0rem",
      smaller: "1.2rem",
      small: "1.4rem",
      regular: "1.6rem",
      large: "1.8rem",
      larger: "2.0rem",
      big: "2.4rem",
      huge: "3.2rem",
      massive: "4.8rem",
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
      extraBold: 800,
    },
  },
  colors: {
    white: "#FFFFFF",
    gray: {
      900: "#272221",
      800: "#403937",
      700: "#574F4D",
      600: "#8D8686",
      500: "#D7D5D5",
      400: "#E6E5E5",
      300: "#EDEDED",
      200: "#F3F2F2",
      100: "#FAFAFA",
    },
    yellow: {
      700: "#C47F17",
      500: "#DBAC2C",
      300: "#F1E9C9",
    },
    purple: {
      700: "#4B2995",
      500: "#8047F8",
      300: "#EBE5F9",
    },
    red: {
      500: "#F75A68",
    },
  },
} as const;
