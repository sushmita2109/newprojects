import logo from "./logo.svg";
import "./App.css";

import { Sidebar } from "./components/Sidebar";
import { AppBarTitle } from "./components/AppBarTitle";
import { Box } from "@mui/material";
import { MainComp } from "./components/MainComp";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "8px",
        }}
      >
        <Sidebar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "2px",
          }}
        >
          <AppBarTitle />

          <MainComp />
        </Box>
      </Box>
    </div>
  );
}

export default App;
