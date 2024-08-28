import { ListItemText, styled } from "@mui/material";
import { colors } from '../../assets/theme/colors';

export const ListItemStyle = styled(ListItemText)(({ theme, isRed }) => ({
  "& .MuiTypography-root": {
    ...theme.typography.subtitle1,
    color: isRed ? colors.primary.main : 'inherit',
  },
}));
