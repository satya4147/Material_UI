
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography ,Paper} from "@mui/material";
import React from "react";

export default function BasicTable(){

        function createData(name, calories, fat, carbs, protein){
            return {name, calories, fat, carbs, protein}
        }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ]

    return(
        <>
        <Typography>Baisc Table</Typography>

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert(100g serving)</TableCell>
                        <TableCell align="right">Colories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">cards&nbsp;(g)</TableCell>
                        <TableCell align="right">protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={rows.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >


                        {rows.map((row)=>(
                            <TableRow>

                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                  <TableCell align="right">{row.fat}</TableCell>
                                  <TableCell align="right">{row.carbs}</TableCell>
                                  <TableCell align="right">{row.protein}</TableCell>

                            </TableRow>

                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        
        </>
    )
}