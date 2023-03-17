import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { Menu, MenuItem, Button } from "@mui/material";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const openMenu = Boolean(anchorEl);
  const openMenuTwo = Boolean(anchorE2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickTwo = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseTwo = () => {
    setAnchorE2(null);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <Link className="link" to="/">
            <img
              src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1677763253/logo/village_new_logo_xgyflq.png"
              width="150px"
              height="110px"
              alt="Village_logo"
            />
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              ACCUEIL
            </Link>
          </div>
          <div className="item">
            <Button
              className="item"
              style={{ color: "black", marginTop: "4px" }}
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleClickTwo}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Nos produits
            </Button>
            <Menu
              id="menu"
              anchorEl={anchorE2}
              open={openMenuTwo}
              onClose={handleCloseTwo}
            >
              <MenuItem onClick={handleCloseTwo}>
                <Link
                  to="/products/1"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Bois
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseTwo}>
                <Link
                  to="/products/2"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Cuivre
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseTwo}>
                <Link
                  to="/products/3"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Verre Soufflé
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseTwo}>
                <Link
                  to="/products/4"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Mosaïque
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseTwo}>
                <Link
                  to="/products/5"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Tapis
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseTwo}>
                <Link
                  to="/products/6"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Céramique
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseTwo}>
                <Link
                  to="/products/7"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Rotin
                </Link>
              </MenuItem>
            </Menu>
          </div>

          <div className="item">
            <Button
              className="item"
              style={{ color: "black", marginTop: "4px" }}
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Nos artisans
            </Button>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link
                  to="/fibre"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Fibres Végétales
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/mosaique"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Mosaïque
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/peinture"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Peinture sur le bois
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/tapisserie"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Tapisserie
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/verre"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Verre Soufflé
                </Link>
              </MenuItem>
            </Menu>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              À PROPOS
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </div>

          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
