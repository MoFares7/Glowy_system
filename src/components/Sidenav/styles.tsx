import { ListItemText, styled } from "@mui/material";

export const ListItemStyle = styled(ListItemText)(({ theme }) => ({
  "& .MuiTypography-root": {
    ...theme.typography.subtitle1, 
  },
}));
