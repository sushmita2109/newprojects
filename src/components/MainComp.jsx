import { Box, Card, FormControl } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { TableCard } from "./TableCard";

export const MainComp = () => {
  const [lastMonth, setLastMonth] = useState("");

  const handleChange = (event) => {
    setLastMonth(event.target.value);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          maxWidth: "100%",
          backgroundColor: "#241d3a",
          color: "white",
        }}
      >
        <h4>Overview</h4>
        <FormControl sx={{ m: 1, minWidth: 280 }}>
          <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
            Last Month
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lastMonth}
            label="Last Month"
            onChange={handleChange}
            sx={{ minWidth: 150 }}
          >
            <MenuItem value={1}>Jan</MenuItem>
            <MenuItem value={2}>Feb</MenuItem>
            <MenuItem value={3}>Mar</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "start",
        }}
      >
        <Card sx={{ minWidth: 475 }}>
          <p> Online Order</p>
          <p>233</p>
        </Card>
        <Card sx={{ minWidth: 475 }}>
          <p>Amount Received</p>
          <p>
            <CurrencyRupeeIcon fontSize="small" />
            23,912
          </p>
        </Card>
      </Box>
      <h4>Transaction|This Month</h4>
      <TableCard />
    </Box>
  );
};
