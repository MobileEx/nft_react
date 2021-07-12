import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import NavigationItem from './NavigationItem';

const useStyles = makeStyles((theme) => ({
  root: {
    listStyle: 'none',
    display: 'flex',
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
  },
}));

const NavigationList = () => {
  const classes = useStyles();

  return (
    <Box component="ul" className={classes.root}>
      <NavigationItem label="Discover" path="/activity" />
      <NavigationItem label="How it work" path="/faq" />
    </Box>
  );
};
export default NavigationList;
