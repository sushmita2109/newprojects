import Box from "@mui/material/Box";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import DiscountIcon from "@mui/icons-material/Discount";
import PersonIcon from "@mui/icons-material/Person";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import { List, ListItem } from "@mui/material";
import nishyan from "../nishyan.png";

export const Sidebar = () => {
  return (
    <Box
      className="sidebar"
      sx={{ backgroundColor: "#46465c", height: "100vh" }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}>
        <img
          src={nishyan}
          alt="logo"
          style={{ width: "50px", height: "auto", borderRadius: "5px" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <p>Nischyan</p>
          <a href="#">visit Store</a>
        </Box>
        <KeyboardArrowUpIcon />
      </Box>
      <List>
        <ListItem>
          {" "}
          <HomeOutlinedIcon /> Home
        </ListItem>
        <ListItem>
          <AssignmentOutlinedIcon />
          Orders
        </ListItem>
        <ListItem>
          <GridViewOutlinedIcon />
          Products
        </ListItem>
        <ListItem>
          <LocalShippingOutlinedIcon /> Delivery
        </ListItem>
        <ListItem>
          <CampaignOutlinedIcon /> Marketing
        </ListItem>
        <ListItem>
          <PollOutlinedIcon /> Analytics
        </ListItem>
        <ListItem>
          <PaymentsOutlinedIcon />
          Payments
        </ListItem>
        <ListItem>
          <NearMeOutlinedIcon /> Tools
        </ListItem>
        <ListItem>
          <DiscountIcon /> Discount
        </ListItem>
        <ListItem>
          <PersonIcon /> Audience
        </ListItem>
        <ListItem>
          <ColorLensIcon />
          Appearence
        </ListItem>
        <ListItem>
          <BoltOutlinedIcon /> Plugins
        </ListItem>
      </List>
    </Box>
  );
};
