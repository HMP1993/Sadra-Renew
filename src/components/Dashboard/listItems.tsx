import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CategoryIcon from "@mui/icons-material/Category";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

export const mainListItems = (
  <div>
    {/* Customers */}
    <ListItem>
      <ListItemText primary="CUSTOMERS" typeof="h1" />
    </ListItem>
    <ListItem button>
      <PersonAddIcon style={{ minWidth: "55px" }} />
      <ListItemText primary="Add Customers" />
    </ListItem>
    <ListItem button>
      <PersonSearchIcon style={{ minWidth: "55px" }} />
      <ListItemText primary="Customers List" />
    </ListItem>
    <Divider />
    {/* Suppliers */}
    <ListItem>
      <ListItemText primary="SUPPLIERS" />
    </ListItem>
    <ListItem button>
      <AddBusinessIcon style={{ minWidth: "55px" }} />
      <ListItemText primary="Add Suppliers" />
    </ListItem>
    <ListItem button>
      <StorefrontIcon style={{ minWidth: "55px" }} />
      <ListItemText primary="Suppliers List" />
    </ListItem>
    <Divider />
    {/* Product */}
    <ListItem>
      <ListItemText primary="PRODUCTS" />
    </ListItem>
    <ListItem button>
      <CategoryIcon style={{ minWidth: "55px" }} />
      <ListItemText primary="Add Products" />
    </ListItem>
    <ListItem button>
      <CategoryIcon style={{ minWidth: "55px" }} />
      <ListItemText primary="Products List" />
    </ListItem>
    <Divider />
    {/* Orders */}
    <ListItem>
      <ListItemText primary="ORDERS" />
    </ListItem>
    <ListItem button>
      <PlaylistAddIcon style={{ minWidth: "55px" }} />
      <ListItemText primary="Add orders" />
    </ListItem>
    <ListItem button>
      <PlaylistAddCheckIcon style={{ minWidth: "55px" }} />
      <ListItemText primary="orders List" />
    </ListItem>
  </div>
);
