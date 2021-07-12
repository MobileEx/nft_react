import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },
  submit: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: theme.spacing(4),
    '& button': {
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
    },
  },
  select: {
    marginBottom: theme.spacing(3),
    width: '100%',
  },
  item: {
    padding: `${theme.spacing(1, 2)} !important`,
  },
  agree: {
    color: theme.palette.text.primary,
  },
}));

const SignUp = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <h1>SignUp</h1>
    </form>
  );
};

export default SignUp;
