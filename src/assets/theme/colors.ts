import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    default?: string;
    state?: string;
    error?: string;
  }
  interface SimplePaletteColorOptions {
    default?: string;
    state?: string;
    error?: string;
  }
  interface Theme {
    background: {
      default: string;
      primary: string;
      state?: string;
    };
  }
  interface ThemeOptions {
    background?: {
      default?: string;
      primary?: string;
      state?: string;
    };
  }
}
export const colors: PaletteOptions = {
  primary: {
    default: "#70434A",
    main: "#70434A",
    state: '#885e64',
    error: "#B40000",
  },
  secondary: {
    main: "#E5F2E8",
    default: "#E7EAEE",
    light: "#D0D5DD",
  },
  info: {
    main: "#FF4359",
    light: "#F1F1F1",
  },
  success: {
    main: '#00796B',
    state: '#D1FAD4',
  },
  error: {
    main: '#FF0000',
    state: '#FEE2E2',
  },
  background: {
    default: "#F9F9F9",
    paper: "#fff",
  },
  text: {
    primary: '#39383A',
    secondary: '#707070',
    disabled: '#A0ABBB'
  }
};
