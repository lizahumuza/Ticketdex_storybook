import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, darken, mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "48em",
  lg: "64em",
  xl: "75em",
  xxl: "96em"
});

export const primaryGradientBg = "linear-gradient(137.26deg, #16171B -15.92%, #2B2D33 127.23%)";

const theme = extendTheme({
  colors: {
    brand: {
      white: "#FFFFFF",
      raisinBlack: { 1: "#272A2E", 2: "#232732", 3: "#2B2D33" },
      darkSpringGreen: "#116F49",
      richBlackFORGA39: "#111111",
      battleshipGray: "#888888",
      eerieBlack: "#151515",
      sonicSilver: { 1: "#707070", 2: "#777777" },
      cultured: "#F4F4F4",
      violetBlueCrayola: "#6C78DA",
      azure: "#307FE2",
      oceanGreen: "#51C6A3",
      platinum: "#E7E2E2",
      davysGrey: "#4a494940",
      independence: "#464A65",
      littleBoyBlue: "#307FE2",
      grayX11Gray: { 1: "#B8B8B8", 2: "#B7B7B7" },
      ultraRed: "#F27283",
      greenCyan: "#129566",
      jet: "#333333"
    }
  },
  breakpoints,
  styles: {
    global: (props: Record<string, string>) => ({
      body: {
        bg: mode("brand.cultured", "brand.eerieBlack")(props),
        color: "brand.white"
      },
      a: {
        color: "brand.white"
      }
    })
  },
  components: {
    Link: {
      variants: {
        nav: () => ({
          color: "brand.white",
          fontSize: "sm",
          _hover: {
            textDecoration: "none",
            color: "brand.white"
          }
        }),
        footNav: () => ({
          color: "brand.white",
          textDecoration: "underline",
          fontSize: "sm",
          _hover: {
            textDecoration: "none",
            color: "brand.white"
          }
        })
      }
    },
    Button: {
      variants: {
        primaryOutline: (props: Dict<string>) => ({
          color: "brand.azure",
          borderColor: "brand.azure",
          border: "1px solid",
          borderRadius: "62px",
          bg: "transparent",
          fontWeight: "300",
          fontSize: "14px",
          width: "149px",
          _hover: {
            color: darken(mode("brand.violetBlueCrayola", "brand.darkSpringGreen")(props), 0.05),
            borderColor: darken(
              mode("brand.violetBlueCrayola", "brand.darkSpringGreen")(props),
              0.05
            )
          }
        }),
        secondaryOutline: (props: Dict<string>) => ({
          color: "brand.white",
          borderColor: "brand.white",
          border: "1px solid",
          bg: "transparent",
          fontWeight: "600",
          borderRadius: "62px",
          width: "6rem",
          _hover: {
            color: darken(mode("brand.violetBlueCrayola", "brand.darkSpringGreen")(props), 0.05),
            borderColor: darken(
              mode("brand.violetBlueCrayola", "brand.darkSpringGreen")(props),
              0.05
            )
          }
        }),
        list: () => ({
          color: "brand.white",
          marginTop: "20px",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "24px",
          letterSpacing: "0.2px",
          _hover: {
            textDecoration: "none",
            color: "brand.white"
          },
          _focus: {
            boxShadow: "none",
            textDecoration: "none"
          }
        }),
        buttonGradient: () => ({
          borderRadius: "6.25rem",
          bg: "linear-gradient(90deg, #10985B 0%, #286EE6 100%)",
          _hover: {
            bg: "linear-gradient(90deg, #286EE6 0%, #10985B 100%)"
          }
        })
      }
    }
  },
  fonts: {
    body: "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif",
    heading:
      "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
  },
  fontFamily: {
    poppins: "Poppins"
  },
  config: {
    initialColorMode: "dark"
  },
  textStyles: {
    h1: {
      fontSize: "4xl",
      fontWeight: "semiBold",
      lineHeight: "3rem"
    },
    h2: {
      fontSize: "4xl",
      fontWeight: "light",
      lineHeight: "3rem"
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: "1.75rem"
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 300,
      lineHeight: "1.5rem"
    },
    h5: {
      fontWeight: 700,
      color: "brand.platinum"
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 300,
      lineHeight: "10",
      color: "brand.battleshipGray"
    },
    h7: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "24px"
    },
    "section-header": { fontSize: "1.875rem", fontWeight: "300", lineHeight: "2.813rem" },
    "section-header-bold": { fontSize: "1.875rem", fontWeight: "600", lineHeight: "2.813rem" },
    "filter-title": { fontSize: "0.8rem", fontWeight: "300", lineHeight: "1.5rem" },
    "filter-clear": { fontSize: "0.625rem", fontWeight: "300", lineHeight: "0.938rem" },
    "filter-text": { fontSize: "0.75rem", fontWeight: "300", lineHeight: "1.125rem" },
    "card-meta-title": {
      fontSize: "xs",
      fontWeight: "medium",
      lineHeight: "1.75",
      letterSpacing: "0.01rem"
    },
    "seller-header-title": {
      fontSize: ["2.4rem", "3rem", "3.5rem", "4.375rem"],
      fontWeight: "bold",
      lineHeight: "4.375rem",
      fontStyle: "normal",
      color: "brand.lightGrey"
    },
    "seller-header-subtitle": {
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "1.375rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.013rem",
      margin: "0.563rem 0"
    },
    "seller-text-1": {
      fontWeight: 600,
      lineHeight: "4.375rem",
      fontSize: ["2rem", "2rem", "2rem", "2rem", "3.125rem"],
      fontStyle: "normal",
      color: "brand.white"
    },
    "seller-text-2": {
      fontWeight: 600,
      lineHeight: "2.813rem",
      fontSize: ["1.3rem", "1.875rem"],
      fontStyle: "normal",
      color: "brand.white"
    },
    "seller-text-3": {
      fontWeight: 300,
      lineHeight: "1.5rem",
      fontSize: "1rem",
      fontStyle: "normal",
      color: "brand.white",
      letterSpacing: "0.013rem"
    },
    "seller-text-4": {
      fontWeight: 300,
      lineHeight: "2.813rem",
      fontSize: ["1.3rem", "1.875rem"],
      fontStyle: "normal",
      color: "brand.white"
    },
    "step-title": {
      fontWeight: 600,
      lineHeight: "1.5rem",
      fontSize: "1.875rem",
      fontStyle: "normal",
      color: "brand.white",
      letterSpacing: "0.013rem"
    },
    "success-subtitle": {
      fontWeight: 300,
      lineHeight: "1.5rem",
      fontSize: "1.25rem",
      fontStyle: "normal",
      color: "brand.white",
      letterSpacing: "0.013rem",
      opacity: 0.8
    },
    "success-title-bold": {
      fontWeight: 600,
      lineHeight: "3.75rem",
      fontSize: ["1.8rem", "2.5rem"],
      fontStyle: "normal",
      color: "brand.white"
    },
    "success-title-normal": {
      fontWeight: 300,
      lineHeight: "3.75rem",
      fontSize: ["1.8rem", "2.5rem"],
      fontStyle: "normal",
      color: "brand.white"
    },
    "checkbox-text": {
      fontWeight: 300,
      lineHeight: "1.5rem",
      fontSize: "0.75rem",
      fontStyle: "normal",
      opacity: 0.5,
      letterSpacing: "0.013rem"
    },
    "book-ticket-title": {
      fontSize: { xl: "1.875rem", base: "1.4rem" },
      fontWeight: "600",
      lineHeight: "1.5rem",
      letterSpacing: "0.013rem"
    },
    "book-ticket-bold": {
      fontSize: "1rem",
      fontWeight: "600",
      lineHeight: "1.5rem",
      letterSpacing: "0.013rem"
    },
    "book-ticket-light": { fontSize: "0.75rem", fontWeight: "300", lineHeight: "1.125rem" },
    "book-ticket-cash": { fontSize: "1rem", fontWeight: "600", lineHeight: "1.5rem" },
    "book-ticket-title-12": {
      fontSize: "1rem",
      fontWeight: "600",
      lineHeight: "1.5rem",
      letterSpacing: "0.013rem"
    },
    "concert-text": { fontSize: "1.5rem", fontWeight: "600", lineHeight: "2.37rem" },
    "concert-text-light": { fontSize: "1.5rem", fontWeight: "300", lineHeight: "2.37rem" }
  }
});

export default theme;