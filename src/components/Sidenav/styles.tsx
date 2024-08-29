import { ListItemText, styled, Theme } from '@mui/material';
import { colors } from '../../assets/theme/colors';

interface ListItemStyleProps {
  isRed?: boolean;
}

export const ListItemStyle = styled(ListItemText, { 
  shouldForwardProp: (prop) => prop !== 'isRed',
})<ListItemStyleProps>(({ theme, isRed }) => ({
  "& .MuiTypography-root": {
    ...theme.typography.subtitle1,
    color: isRed ? colors.primary?.main : 'inherit',
  },
}));
