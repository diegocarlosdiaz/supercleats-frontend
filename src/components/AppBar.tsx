"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import { Chip, Divider, Grid, InputBase } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { styled, alpha } from "@mui/material/styles";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HeaderBanner from "./header-banner/HeaderBanner";
import { useRouter } from "next/router";
import CartBuyButton from "./buttons/CartBuyButton";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const pages = ["Women", "Men", "Kids", "Sales & Clereance", "Brands"];

const sections = [
  {
    name: "Women",
    href: "/women",
  },
  {
    name: "Men",
    href: "/men",
  },
  {
    name: "Kids",
    href: "/kids",
  },
  {
    name: "Sales and Clereance",
    href: "/sales-clereance",
  },
  {
    name: "Brands",
    href: "/brand",
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  /* const router = useRouter();
  const handleRedirectSections = (url:string) => {
    router.push(`http://localhost:3000${url}`)
  } */

  return (
    <>
      <HeaderBanner></HeaderBanner>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Container maxWidth="xl">
          <Grid px={4} justifyContent="space-between">
            <Toolbar disableGutters>
              <Grid sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                <a href="http://localhost:3000">
                  <Image
                    src="/super-cleats-white.png" // Ruta relativa a la carpeta public
                    alt="logo"
                    width={200} // Ancho deseado
                    height={300} // Altura deseada
                  />
                </a>
              </Grid>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {sections.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Grid sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
                <Image
                  src="/super-cleats-white.png" // Ruta relativa a la carpeta public
                  alt="logo"
                  width={200} // Ancho deseado
                  height={300} // Altura deseada
                />
              </Grid>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Grid
                  alignItems="end"
                  container
                  spacing={2}
                  justifyContent="end"
                >
                  <Grid item>
                    <Search>
                      <SearchIconWrapper>
                        <SearchOutlinedIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        inputProps={{ "aria-label": "search" }}
                        placeholder="Buscar"
                      />
                    </Search>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Proximamente disponible">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <PersonOutlineIcon
                          sx={{ color: "white" }}
                          fontSize="medium"
                        />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Proximamente disponible">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <FavoriteBorderOutlinedIcon
                          sx={{ color: "white" }}
                          fontSize="medium"
                        />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <CartBuyButton />
                  </Grid>
                </Grid>
                {/* <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu> */}
              </Box>
            </Toolbar>
          </Grid>

          <Grid
            pt={4}
            sx={{
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {sections.map((page) => (
              <Grid key={page.name}>
                <a
                  href={page.href}
                  className="mx-2 px-3 py-2.5 relative rounded group overflow-hidden font-medium text-white inline-block"
                >
                  <span className="absolute rounded-t-xl my-2 mb-1 top-0 left-0 flex w-full h-0 transition-all duration-200 ease-out transform translate-y-0 bg-gray-300  group-hover:h-full opacity-90"></span>
                  <span className="relative font-bold text-sm group-hover:text-black">
                    {page.name}
                  </span>
                </a>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
