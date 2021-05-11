import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import {ThemeContext} from './contexts/ThemeContext'

import {LanguageContext} from './contexts/LanguageContext'

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧"
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷"
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸"
  }
}; 

const Navbar = (props) =>{

  const {isDarkMode, toggleTheme} = useContext(ThemeContext)
  const{language} = useContext(LanguageContext)
  // classes are what are in the style object that is created and then passed in with withStyles into Navbar, turning it into a higher order componenet and providing it with the styles props classes.root access the root class within the style object
  const { classes } = props;
  
  
  // destructure content above to select the language that is passed in from the context, search and flag will be updated as a result of that
  const{search,flag} = content[language]

  return(
    <div className={classes.root}>
      {/* to change the background, of the navbar ternary isDarkmode */}
        <AppBar position='static' color={isDarkMode?'@grey':'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span>{flag}</span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              App Title
            </Typography>
            {/* toggle button that changes when clicked */}
            <Switch onChange={toggleTheme}/>
            <div className={classes.grow} />
            {/* style a search bar */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  // input rootRoot will go to the root class of inputbase
                  root: classes.inputRoot,
                  // inputinput will go to the actual input
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
  )
}



// withstyles function returns navbar with new props

export default withStyles(styles)(Navbar);
