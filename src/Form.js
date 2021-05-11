import React, {useContext} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import {LanguageContext} from './contexts/LanguageContext'

const words = {
  english: {
    signIn: "Sign In",
    email: "Email Address",
    password: "Password",
    remember: "Remember Me"
  },
  french: {
    signIn: "Se Connecter",
    email: "Adresse Électronique",
    password: "Mot de Passe",
    remember: "Souviens-toi De Moi"
  },
  spanish: {
    signIn: "Registrarse",
    email: "Correo Electrónico",
    password: "Contraseña",
    remember: "Recuérdame"
  }
}

const Form = (props) =>{
// useContext hook allows access to languageContext. 
//destructure value passed in from languageContext
  const {language, changeLanguage}= useContext(LanguageContext)
  
  // classes coming from styles that are passed in from the function withstyles that convert form into a higher order component 
  const { classes } = props;
  // destructure from the object above and select based on context that is selected
  // words language give you the object for each language in the words object
  const {email,signIn,password,remember} = words[language]

  return (
    
    <main className={classes.main}>
    <Paper className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant='h5'>Sign In</Typography>
      {/* set the menu to language state from context */}
      {/* onChange will call the changelanguage method from the context */}
      <Select value={language} onChange={changeLanguage}>
        <MenuItem value='english'>English</MenuItem>
        <MenuItem value='french'>French</MenuItem>
        <MenuItem value='spanish'>Spanish</MenuItem>
      </Select>
      <form className={classes.form}>
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='email'>{email}</InputLabel>
          <Input id='email' name='email' autoFocus />
        </FormControl>
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='password'>{password}</InputLabel>
          <Input id='password' name='password' autoFocus />
        </FormControl>
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label={remember}
        />
        <Button
          variant='contained'
          type='submit'
          fullWidth
          color='primary'
          className={classes.submit}
        >
          {signIn}
        </Button>
      </form>
    </Paper>
  </main>

  )
}


export default withStyles(styles)(Form);
