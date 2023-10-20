import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type SMTableProps = {
  label: string;
  datasourse: any[];
  cols: any[];
};

export default function SMTable(props: SMTableProps) {
  const { label, datasourse, cols } = props;
  return (
    <Box>
      <Typography variant="h4">{label}</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {cols.map((x, _i) => (
                <StyledTableCell align="left">{x.heading}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datasourse.map((row, _i) => (
              <StyledTableRow>
                {cols.map((col, _ind) => (
                  <StyledTableCell align="left">{row[col.key]}</StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

// usage example

// import React from 'react';
// import SMTable from './SMTable'; // Adjust the import path

// function App() {
//   const tableData = [
//     { id: 1, name: 'John Doe', age: 30 },
//     { id: 2, name: 'Jane Smith', age: 25 },
//     // Add more data as needed
//   ];

//   const tableColumns = [
//     { heading: 'ID', key: 'id' },
//     { heading: 'Name', key: 'name' },
//     { heading: 'Age', key: 'age' },
//   ];

//   return (
//     <div>
//       <SMTable label="User Data" datasourse={tableData} cols={tableColumns} />
//     </div>
//   );
// }

// export default App;
