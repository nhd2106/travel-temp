import { useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import DDrawer from "./Drawer";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { signOutHandler } from "../../redux/actions/user";

import { auth as googleAuth } from "../../utils/firebase/firebase.utils";
import { Badge } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBackground: {
    background: "#1BA0E2",
  },
  linkMargin: {
    marginRight: "20px",
    color: "white",
    textDecoration: "none",
  },
  list: {
    width: 250,
  },
}));

export default function DNavbar({ navigations }) {
  const router = useRouter();
  const currentSlug = router.asPath;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRouter = (link) => {
    router.push(link);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.user);
  const signOut = () => {
    window.localStorage.clear();
    googleAuth.signOut();
    dispatch(signOutHandler());
    handleClose();
  };

  return (
    <>
      <AppBar position="sticky" style={{ background: "#1BA0E2" }}>
        <Toolbar>
          <Hidden smUp>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                flex: " 1 1 40rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link href="/">
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "calc(0.7rem + 1vw)",
                  }}
                >
                  Yêu Vivu
                </a>
              </Link>
            </div>
            <Grid
              container
              style={{
                flex: " 1, 1, 40rem",
                alignItems: "center",
              }}
            >
              <Grid item lg={9}>
                {[
                  { title: "Khách sạn", slug: "/hotels" },
                  { title: "Địa điểm", slug: "/dia-diem" },
                  { title: "Trải nghiệm", slug: "/trai-nghiem" },
                  { title: "Liên hệ", slug: "/lien-he" },
                ].map(({ title, slug }) => {
                  return (
                    <Hidden smDown key={slug}>
                      <Link href={`${slug}`}>
                        <a
                          className={clsx(`${classes.linkMargin} `, {
                            active: currentSlug === `/${slug}`,
                          })}
                        >
                          {title}
                        </a>
                      </Link>
                    </Hidden>
                  );
                })}
              </Grid>
            </Grid>
            <Tooltip title="Giỏ hàng">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => router.push("/cart")}
              >
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            {user ? (
              <div
                style={{
                  display: "flex",
                }}
              >
                <Tooltip title="xem thông tin">
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </Tooltip>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={openMenu}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Tài khoản</MenuItem>
                  <MenuItem
                    onClick={() => handleRouter("http://localhost:1337/admin")}
                  >
                    Quản lý
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Đăng xuất
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <div>
                <Tooltip title="Đăng nhập">
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <LockOpenIcon />
                  </IconButton>
                </Tooltip>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={openMenu}
                  onClose={handleClose}
                >
                  <MenuItem onClick={() => handleRouter("/dang-nhap")}>
                    Đăng nhập
                  </MenuItem>
                  <MenuItem onClick={() => handleRouter("/dang-ky")}>
                    Đăng ký
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Container>
        </Toolbar>
      </AppBar>
      <DDrawer
        open={open}
        toggleDrawer={toggleDrawer}
        navigations={navigations}
      />
    </>
  );
}
