import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { fonts } from '../../../assets/theme/fonts';
import { colors } from '../../../assets/theme/colors';
import { borders } from '../../../assets/theme/borders';
import xIcon from '../../../assets/icons/x.svg'
import correctIcon from '../../../assets/icons/correct.svg';
import { Box, Typography } from '@mui/material';

function createData(name, sunday, monday, tuesday, wednesday, thursday, friday, saturday) {
    return { name, sunday, monday, tuesday, wednesday, thursday, friday, saturday };
}

const rows = [
    createData('Frozen yoghurt', true, false, true, false, true, true, false),
    createData('Ice cream sandwich', false, true, false, true, false, true, false),
    createData('Eclair', true, true, true, false, true, false, true),

];

export default function WorkHoursTable() {
    return (
        <TableContainer sx={{ borderRadius: borders.borderRadius.md, overflow: 'hidden' }}>
            <Table sx={{ minWidth: 650, borderRadius: borders.borderRadius.xl }} >
                <TableHead>
                    <TableRow sx={{}}>
                        <TableCell
                            sx={{
                                typography: fonts.subtitle1,
                                border: `1px solid ${colors.secondary.light}`,
                            }}
                        >
                            Branch Name
                        </TableCell>
                        <TableCell
                            sx={{
                                typography: fonts.subtitle1,
                                border: `1px solid ${colors.secondary.light}`,
                            }}
                            align="center"
                        >
                            Sunday
                        </TableCell>
                        <TableCell
                            sx={{
                                typography: fonts.subtitle1,
                                border: `1px solid ${colors.secondary.light}`,
                            }}
                            align="center"
                        >
                            Monday
                        </TableCell>
                        <TableCell
                            sx={{
                                typography: fonts.subtitle1,
                                border: `1px solid ${colors.secondary.light}`,
                            }}
                            align="center"
                        >
                            Tuesday
                        </TableCell>
                        <TableCell
                            sx={{
                                typography: fonts.subtitle1,
                                border: `1px solid ${colors.secondary.light}`,
                            }}
                            align="center"
                        >
                            Wednesday
                        </TableCell>
                        <TableCell
                            sx={{
                                typography: fonts.subtitle1,
                                border: `1px solid ${colors.secondary.light}`,
                            }}
                            align="center"
                        >
                            Thursday
                        </TableCell>
                        <TableCell
                            sx={{
                                typography: fonts.subtitle1,
                                border: `1px solid ${colors.secondary.light}`,
                            }}
                            align="center"
                        >
                            Friday
                        </TableCell>
                        <TableCell
                            sx={{
                                typography: fonts.subtitle1,
                                border: `1px solid ${colors.secondary.light}`,
                            }}
                            align="center"
                        >
                            Saturday
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell
                                sx={{
                                    typography: fonts.subtitle1,
                                    textAlign: 'center',
                                    border: `1px solid ${colors.secondary.light}`,
                                }}
                                component="th"
                                scope="row"
                            >
                                {row.name}
                            </TableCell>
                            <TableCell
                                sx={{
                                    typography: fonts.subtitle1,
                                    color: colors.text.secondary,
                                    border: `1px solid ${colors.secondary.light}`,
                                    textAlign: 'center',
                                }}
                            >
                                {row.sunday ? (
                                    <Box>
                                        <img src={correctIcon} />
                                        <Typography sx={{ typography: fonts.subtitle1 }}>09:00 Am To 17:00 Pm</Typography>
                                    </Box>
                                ) : (
                                    <Box>
                                        <img src={xIcon} />
                                        <Typography sx={{ typography: fonts.subtitle1 }}>Salon Closed</Typography>
                                    </Box>
                                )}
                            </TableCell>
                            <TableCell
                                sx={{
                                    typography: fonts.subtitle1,
                                    color: colors.text.secondary,
                                    border: `1px solid ${colors.secondary.light}`,
                                    textAlign: 'center',
                                }}
                            >
                                {row.monday ? (
                                    <Box>
                                        <img src={correctIcon} />
                                        <Typography sx={{ typography: fonts.subtitle1 }}>09:00 Am To 17:00 Pm</Typography>
                                    </Box>
                                ) : (
                                    <Box>
                                        <img src={xIcon} />
                                        <Typography sx={{ typography: fonts.subtitle1 }}>Salon Closed</Typography>
                                    </Box>
                                )}
                            </TableCell>
                            <TableCell
                                sx={{
                                    typography: fonts.subtitle1,
                                    color: colors.text.secondary,
                                    border: `1px solid ${colors.secondary.light}`,
                                    textAlign: 'center',
                                }}
                            >
                                {row.tuesday ? (
                                    <Box>
                                        <img src={correctIcon} />
                                        <Typography sx={{ typography: fonts.subtitle1 }}>09:00 Am To 17:00 Pm</Typography>
                                    </Box>
                                ) : (
                                    <Box>
                                        <img src={xIcon} />
                                        <Typography sx={{ typography: fonts.subtitle1 }}>Salon Closed</Typography>
                                    </Box>
                                )}
                            </TableCell>
                            <TableCell
                                sx={{
                                    typography: fonts.subtitle1,
                                    color: colors.text.secondary,
                                    border: `1px solid ${colors.secondary.light}`,
                                    textAlign: 'center',
                                }}
                            >
                                {row.wednesday ? (
                                    <Box>
                                        <img src={correctIcon} />
                                        <Typography sx={{ typography: fonts.subtitle1 }}>09:00 Am To 17:00 Pm</Typography>
                                    </Box>
                                ) : (
                                    <Box>
                                        <img src={xIcon} />
                                        <Typography sx={{ typography: fonts.subtitle1 }}>Salon Closed</Typography>
                                    </Box>
                                )}
                            </TableCell>
                            <TableCell
                                sx={{
                                    typography: fonts.subtitle1,
                                    color: colors.text.secondary,
                                    border: `1px solid ${colors.secondary.light}`,
                                    textAlign: 'center',
                                }}
                            >
                                {row.thursday ? (
                                    <Box>
                                        <img src={correctIcon} />
                                        <Typography sx={{ typography: fonts.subtitle1 }}>09:00 Am To 17:00 Pm</Typography>
                                    </Box>
                                ) : (
                                    <Box>
                                        <img src={xIcon} />
                                        <Typography sx={{ typography: fonts.subtitle1 }}>Salon Closed</Typography>
                                    </Box>
                                )}
                            </TableCell>
                            <TableCell
                                sx={{
                                    typography: fonts.subtitle1,
                                    color: colors.text.secondary,
                                    border: `1px solid ${colors.secondary.light}`,
                                    textAlign: 'center',
                                }}
                            >
                                {row.friday ? (
                                    <Box>
                                        <img src={correctIcon} />
                                        <Typography sx={{ typography: fonts.subtitle1 }}>09:00 Am To 17:00 Pm</Typography>
                                    </Box>
                                ) : (
                                    <Box>
                                        <img src={xIcon} />
                                        <Typography sx={{ typography: fonts.subtitle1 }}>Salon Closed</Typography>
                                    </Box>
                                )}
                            </TableCell>
                            <TableCell
                                sx={{
                                    typography: fonts.subtitle1,
                                    color: colors.text.secondary,
                                    border: `1px solid ${colors.secondary.light}`,
                                    textAlign: 'center',
                                }}
                            >
                                {row.saturday ? (
                                    <Box>
                                        <img src={correctIcon} />
                                        <Typography sx={{ typography: fonts.subtitle1 }}>09:00 Am To 17:00 Pm</Typography>
                                    </Box>
                                ) : (
                                    <Box>
                                        <img src={xIcon} />
                                        <Typography sx={{ typography: fonts.subtitle1 }}>Salon Closed</Typography>
                                    </Box>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
