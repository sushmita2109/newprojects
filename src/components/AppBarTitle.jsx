import { Box } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import TextField from "@mui/material/TextField";

export const AppBarTitle = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#46465c",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <p>Payments</p>

        <p>
          <HelpOutlineIcon fontSize="small" /> How it works
        </p>
      </Box>

      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <QuestionAnswerIcon />
    </Box>
  );
};
