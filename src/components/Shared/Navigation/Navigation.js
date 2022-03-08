import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import { Container, useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../../img/icon.png";
import SegmentRoundedIcon from "@mui/icons-material/SegmentRounded";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import useAuth from "../../../hooks/useAuth";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navigation({ handleOpen }) {
 const { user, logOut } = useAuth();

 const theme = useTheme();
 const useStyle = makeStyles({
  navItem: {
   color: "#fff",
   textDecoration: "none",
   margin: "0 1em",
   transition: "all 0.3s",
   // "&:first-child": {
   //  color: "#5454D4",
   // },
   "&:hover": {
    color: "#FF4958",
   },
  },
  navIcon: {
   [theme.breakpoints.up("md")]: {
    display: "none !important",
   },
  },
  navItemContainer: {
   [theme.breakpoints.down("md")]: {
    display: "none",
   },
  },
  appBarBgColor: {
   backgroundColor: "transparent",
  },
  navLinks: {
   color: "#fff",
   textDecoration: "none",
   padding: ".5em .8em",
   transition: "all 300ms",
   "&:hover": {
    color: "#FF4958",
   },
  },
 });

 const { navIcon, navItemContainer, appBarBgColor, navLinks } = useStyle();
 const mobileMenuStyles = {
  textDecoration: "none",
  color: "#10375C",
 };
 const [state, setState] = React.useState(false);

 const list = (
  <Box sx={{ width: 250 }} role="presentation">
   <List>
    <Link style={mobileMenuStyles} to="/">
     <ListItem button>
      <ListItemText>HOME</ListItemText>
     </ListItem>
    </Link>
    <Link style={mobileMenuStyles} to="/allcourses">
     <ListItem button>
      <ListItemText>AllCourses</ListItemText>
     </ListItem>
    </Link>
    <Link style={mobileMenuStyles} to="/blogs">
     <ListItem button>
      <ListItemText>Blogs</ListItemText>
     </ListItem>
    </Link>
    <Link style={mobileMenuStyles} to="/about">
     <ListItem button>
      <ListItemText>About</ListItemText>
     </ListItem>
    </Link>
    <Link style={mobileMenuStyles} to="/contact">
     <ListItem button>
      <ListItemText>Contact</ListItemText>
     </ListItem>
    </Link>
    <Link style={mobileMenuStyles} to="/quiz">
     <ListItem button>
      <ListItemText>Free Quiz</ListItemText>
     </ListItem>
    </Link>
    <Link style={mobileMenuStyles} to="/newcart">
     <ListItem button>
      <ListItemText>
       <ShoppingCartIcon />
      </ListItemText>
     </ListItem>
    </Link>
   </List>
   <Divider />
  </Box>
 );

 return (
  <>
   <Box sx={{ flexGrow: 1 }}>
    <AppBar
     elevation={0}
     className={appBarBgColor}
     sx={{ py: 3 }}
     position="static"
    >
     <Container>
      <Toolbar sx={{ padding: "0 !important" }}>
       <Typography
        variant="h6"
        component="div"
        sx={{
         flexGrow: 1,
         display: "flex",
         justify: "center",
         alignItems: "center",
         marginRight: "1em",
        }}
       >
        <img src={logo} alt="" style={{ maxWidth: "100%" }} />
       </Typography>
       <Box
        sx={{
         textAlign: "center",
         mr: 4,
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
        }}
        className={navItemContainer}
       >
        <Link className={navLinks} to="/allcourses">
         <SearchIcon sx={{ mt: 1, fontSize: "2rem" }} />
        </Link>
        <Link className={navLinks} to="/">
         Home
        </Link>
        <Link className={navLinks} to="/allcourses">
         AllCourses
        </Link>
        <Link className={navLinks} to="/blogs">
         Blogs
        </Link>
        <Link className={navLinks} to="/about">
         About us
        </Link>
        <Link className={navLinks} to="/contact">
         Contact
        </Link>
        <Link className={navLinks} to="/quiz">
         Free Quiz
        </Link>
        <Link className={navLinks} to="/newcart">
         <ShoppingCartIcon sx={{ mt: 1 }} />
        </Link>
       </Box>
       {user?.email ? (
        <Button
         onClick={logOut}
         startIcon={<PersonIcon />}
         sx={{
          bgcolor: "#FF4958",
          color: "#fff",
          width: "46px",
          height: "25px",
          padding: "1.2em 4em",
          border: "1px solid #FF4958",
          borderRadius: "3px",
          fontFamily: "Manrope",
          "&:hover": {
           bgcolor: "#F9B233",
           border: "1px solid #F9B233",
          },
         }}
        >
         Logout
        </Button>
       ) : (
        <Button
         sx={{
          bgcolor: "#FF4958",
          color: "#fff",
          width: "46px",
          height: "25px",
          padding: "1.2em 3.8em",
          border: "1px solid #FF4958",
          borderRadius: "3px",
          fontFamily: "Manrope",
          "&:hover": {
           bgcolor: "#F9B233",
           border: "1px solid #F9B233",
          },
         }}
         onClick={handleOpen}
        >
         Login
        </Button>
       )}
       <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ ml: 1 }}
        className={navIcon}
        onClick={() => setState(true)}
       >
        <SegmentRoundedIcon />
       </IconButton>
      </Toolbar>
     </Container>
    </AppBar>
   </Box>

   <div>
    <React.Fragment>
     <Drawer open={state} onClose={() => setState(false)}>
      {list}
     </Drawer>
    </React.Fragment>
   </div>
  </>
 );
}
