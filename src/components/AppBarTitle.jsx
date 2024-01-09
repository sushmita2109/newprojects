import { Box } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

export const AppBarTitle = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <p>Payments</p>
        <HelpOutlineIcon />
        <p>How it works</p>
      </Box>
      <QuestionAnswerIcon />
    </Box>
  );
};
