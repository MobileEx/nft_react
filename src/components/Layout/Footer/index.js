import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';

import Container from '../Container';
import SubTitle1 from '../../Typography/Subtitle1';
import Body1 from '../../Typography/Body1';
import Body2 from '../../Typography/Body2';
import TinyBold from '../../Typography/TinyBold';
import Tiny from '../../Typography/Tiny';
import InputField from '../../Forms/InputField';
import ExpandableColumn from './ExpandableColumn';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: 80,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 78,
    },
    [theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.surface[1],
      paddingTop: 59,
    },
  },
  logoWrapper: {
    width: theme.layouts.logo.width.desktop,
    marginBottom: 20,
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  top: {
    paddingBottom: theme.spacing(6),
  },
  bottom: {
    padding: theme.spacing(4.375, 0),
    display: 'flex',
    justifyContent: 'space-between',
    letterSpacing: 0.4,
  },
  subtitle: {
    color: theme.palette.text.primary,
    marginBottom: 30,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      lineHeight: '28px',
    },
  },
  list: {
    marginBottom: 40,
    fontWeight: 500,
  },
  link: {
    marginBottom: 23,
  },
  description: {
    lineHeight: '24px',
  },
  emailInput: {
    borderRadius: '25px !important',
    marginTop: 24,
    fontSize: 14,
    padding: '3px 9px 3px 0px',
    width: '100%',
  },
  emailSubmit: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  accept: {
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(2),
    fontWeight: 'bold',
  },
  primaryText: {
    color: theme.palette.text.primary,
  },
  column: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0 !important',
      paddingTop: 30,
      borderTop: `1px solid ${theme.palette.surface[2]}`,
    },
  },
  column1: {
    paddingLeft: 11,
    [theme.breakpoints.only('sm')]: {
      paddingLeft: 8,
    },
  },
  column2: {
    paddingLeft: 16,
    [theme.breakpoints.only('sm')]: {
      paddingLeft: 32,
    },
  },
  column3: {
    paddingLeft: 21,
    [theme.breakpoints.only('sm')]: {
      paddingLeft: 56,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container className={classes.top}>
          <Grid item md={4} sm={3} xs={12}>
            <div className={classes.logoWrapper}>
              <img src={`/assets/images/logo-${theme.palette.type}.png`} alt="logo" />
            </div>
            <SubTitle1 className={classes.subtitle}>A Creator Economy</SubTitle1>
          </Grid>
          <Grid item md={2} sm={2} xs={12}>
            <div className={clsx(classes.column, classes.column1)}>
              <ExpandableColumn title="Stacks">
                <Link to="/">
                  <TinyBold className={classes.link}>Discover</TinyBold>
                </Link>
                <Link to="/connect-wallet">
                  <TinyBold className={classes.link}>Connect Wallet</TinyBold>
                </Link>
                <Link to="/">
                  <TinyBold className={classes.link}>Create Item</TinyBold>
                </Link>
              </ExpandableColumn>
            </div>
          </Grid>
          <Grid item md={2} sm={2} xs={12}>
            <div className={clsx(classes.column, classes.column2)}>
              <ExpandableColumn title="Info">
                <Link to="/">
                  <TinyBold className={classes.link}>Download</TinyBold>
                </Link>
                <Link to="/">
                  <TinyBold className={classes.link}>Demos</TinyBold>
                </Link>
                <Link to="/search">
                  <TinyBold className={classes.link}>Support</TinyBold>
                </Link>
              </ExpandableColumn>
            </div>
          </Grid>
          <Grid item md={4} sm={5} xs={12}>
            <div className={clsx(classes.column, classes.column3)}>
              <Body1 className={classes.list}>Join Newsletter</Body1>
              <Body2 className={classes.description}>
                Subscribe our newsletter to get more free design course and resource
              </Body2>

              <InputField
                className={classes.emailInput}
                placeholder="Enter your email"
                icon={(
                  <IconButton
                    size="small"
                    className={classes.emailSubmit}
                  >
                    <ArrowRightAltIcon />
                  </IconButton>
                )}
              />
            </div>
          </Grid>
        </Grid>
        <Divider />
        <div className={classes.bottom}>
          <Tiny>
            Copyright © 2021 UI8 LLC. All rights reserved
          </Tiny>

          <Hidden xsDown>
            <Tiny className={classes.primaryText}>
              We use cookies for better service.
              <Tiny component="span" className={classes.accept}>Accept</Tiny>
            </Tiny>
          </Hidden>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
