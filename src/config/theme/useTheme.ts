import { useMemo } from "react";
import { Direction, createTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { themeSettings } from ".";
export const useTheme = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const dir: Direction = language === "ar" ? "rtl" : "ltr";
  const theme = useMemo(() => createTheme(themeSettings(dir)), [dir]);
  return [theme];
};
