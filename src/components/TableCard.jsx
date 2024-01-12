import { Box, Button, Card, MenuItem, Select, TextField } from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import "./TableCard.css";

function createData(orderid, orderdate, orderamount, transactionfees) {
  return { orderid, orderdate, orderamount, transactionfees };
}

const rows = [
  createData(1, "7 July 23", 2343, 2.0),
  createData(2, "7 July 23", 2543, 21.0),
  createData(3, "7 July 23", 1343, 0.0),
  createData(4, "7 July 23", 3343, 20.0),
  createData(5, "7 July 23", 5343, 43.0),
];

export const TableCard = () => {
  const [currentPage, setCureentPage] = useState(1);
  const recordPerPage = 2;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = rows.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(rows.length / recordPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCureentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCureentPage(currentPage - 1);
    }
  };

  const changePage = (id) => {
    setCureentPage(id);
  };

  return (
    <Box>
      <Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "2px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search by OrderId"
            variant="outlined"
          />
          <Box>
            <Button>Sort</Button>
            <Button>
              <SaveAltIcon />
            </Button>
          </Box>
        </Box>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order Id</TableCell>
              <TableCell align="right">Order Date</TableCell>
              <TableCell align="right">Order Amount</TableCell>
              <TableCell align="right">Transaction Fees</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((row) => (
              <TableRow
                key={row.orderid}
                sx={{
                  width: "100%",
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell>{row.orderid}</TableCell>
                <TableCell align="right">{row.orderdate}</TableCell>
                <TableCell align="right">{row.orderamount}</TableCell>
                <TableCell align="right">{row.transactionfees}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prevPage}>
                Prev
              </a>
            </li>
            <li>
              {numbers.map((n, i) => (
                <li className="page-item" key={indexedDB}>
                  <a
                    href="# "
                    className="page-link"
                    onClick={() => changePage(n)}
                  >
                    {n}
                  </a>
                </li>
              ))}
            </li>
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </Card>
    </Box>
  );
};
