import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="CUSTOMERS" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <LocalShippingRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="SUPPLIERS" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CategoryRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="PRODUCTS" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReceiptLongRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="ORDERS" />
    </ListItem>
  </div>
);
