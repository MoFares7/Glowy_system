import { Direction } from "@mui/material";
import { colors } from "./colors";
import { fonts } from "./fonts";
export const themeSettings = (dir: Direction) => {
  return {
    direction: dir,
    palette: {
      ...colors,
    },
    typography: { ...fonts },
  };
};
