import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { ShoppingCart, Undo } from "@mui/icons-material";
import { Menu } from "./Style";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <Menu>
        <IconButton
          sx={{ p: "10px", display: "inline-block" }}
          aria-label="go back"
          onClick={() => navigate("/")}
        >
          <Undo />
        </IconButton>
        <IconButton
          sx={{ p: "10px" }}
          aria-label="shopping cart"
          onClick={() => navigate("/shopping-cart")}
        >
          <ShoppingCart />
        </IconButton>
      </Menu>
    </header>
  );
}
