import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ListAltIcon from "@mui/icons-material/ListAlt";
import IconButton from "@mui/material/IconButton";

export const mainListItems = (
  <div>
    <ListItem>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="CUSTOMERS" />
      <IconButton edge="end">
        <AddCircleIcon />
      </IconButton>
      <IconButton edge="end">
        <ListAltIcon />
      </IconButton>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <LocalShippingRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="SUPPLIERS" />
      <IconButton edge="end">
        <AddCircleIcon />
      </IconButton>
      <IconButton edge="end">
        <ListAltIcon />
      </IconButton>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <CategoryRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="PRODUCTS" />
      <IconButton edge="end">
        <AddCircleIcon />
      </IconButton>
      <IconButton edge="end">
        <ListAltIcon />
      </IconButton>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <ReceiptLongRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="ORDERS" />
      <IconButton edge="end">
        <AddCircleIcon />
      </IconButton>
      <IconButton edge="end">
        <ListAltIcon />
      </IconButton>
    </ListItem>
  </div>
);
