import React from "react";
// import { makeStyles, createStyles } from '@material-ui/core/styles'
import "./index.scss";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";

const CatagoriesMenu = () => {
  // const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const [automotives, setAutomotives] = React.useState(false);
  const [bikes, setBikes] = React.useState(false);
  const [books, setBooks] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }
  function handleAutomotives() {
    setAutomotives(!automotives);
  }
  function handleBikes() {
    setBikes(!bikes);
  }
  function handleBooks() {
    setBooks(!books);
  }
  // function handleAutomotives() {
  //   setAutomotives(!automotives);
  // }
  

  return (
    <List component="nav" className="catagory-menu-container" disablePadding>
      <ListItem button onClick={handleClick} className="btn-container">
        <ListItemText primary="Accommodation" />
        {/* {open ? <IconExpandLess /> : <IconExpandMore />} */}
      </ListItem>

      <ListItem button onClick={handleAutomotives} className="btn-container">
        <ListItemText primary="Automotives & Motorbikes" />
        {automotives ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={automotives} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className="btn-container" style={{ border: "none" }}>
            <ListItemText inset primary="Bicycle" />
          </ListItem>
          <ListItem button className="btn-container" style={{ border: "none" }}>
            <ListItemText inset primary="Cars" />
          </ListItem>
          <ListItem button className="btn-container" style={{ border: "none" }}>
            <ListItemText inset primary="Motorbikes" />
          </ListItem>
          <ListItem button className="btn-container" style={{ border: "none" }}>
            <ListItemText inset primary="Trucks" />
          </ListItem>
          <ListItem button className="btn-container" style={{ border: "none" }}>
            <ListItemText inset primary="Boats" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleBikes} className="btn-container">
        <ListItemText primary="Bikes" />
        {bikes ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>

      <ListItem button onClick={handleBooks} className="btn-container">
        <ListItemText primary="Books" />
        {books ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
    </List>
  );
};

// const drawerWidth = 240

// const useStyles = makeStyles(theme =>
//   createStyles({
//     appMenu: {
//       width: '100%',
//     },
//     navList: {
//       width: drawerWidth,
//     },
//     menuItem: {
//       width: drawerWidth,
//     },
//     menuItemIcon: {
//       color: '#97c05c',
//     },
//   }),
// )

export default CatagoriesMenu;
