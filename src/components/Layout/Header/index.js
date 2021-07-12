import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

import Container from '../Container';
import NavigationList from './NavigationList';
import InputField from '../../Forms/InputField';
import NotificationDropDown from '../../Menus/NotificationDropDown';
import FilledButton from '../../Buttons/FilledButton';
// import OutlinedButton from '../../Buttons/OutlinedButton';
import UserDropDown from '../../Menus/UserDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.surface[0],
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: theme.layouts.header.height.desktop,
    [theme.breakpoints.down('sm')]: {
      minHeight: theme.layouts.header.height.desktop,
      height: 'auto',
      paddingTop: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      borderBottom: 'none',
      paddingTop: theme.spacing(5),
    },
  },
  logo: {
    width: theme.layouts.logo.width.desktop,
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    marginRight: 68,
    [theme.breakpoints.down('sm')]: {
    },
  },
  menuBtn: {
    display: 'none',
    color: theme.palette.surface[3],
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  wrapper: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  menuWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      borderLeft: `2px solid ${theme.palette.surface[2]}`,
    },
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  logoWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
  },
  rowWrapper: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: theme.spacing(2),
    },
  },
  toolWrapper: {
    display: 'flex',
    marginTop: theme.spacing(0.5),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  connectBtn: {
    width: theme.spacing(17.375),
    marginLeft: 11,
  },
  uploadBtn: {
    width: theme.spacing(9.875),
  },
  search: {
    marginRight: 22,
    width: theme.spacing(32),
    marginBottom: 3,
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();

  const [expand, setExpand] = useState(true);

  return (
    <AppBar className={classes.root} position="static" elevation={0}>
      <Container>
        <div className={classes.wrapper}>
          <div className={classes.logoWrapper}>
            <Link to="/" className={classes.logo}>
              <img
                src={`/assets/images/logo-${theme.palette.type}.png`}
                alt="Supfam logo"
                width="100%"
                height="auto"
              />
            </Link>
            <IconButton
              className={classes.menuBtn}
              onClick={() => setExpand((prev) => !prev)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Collapse in={expand}>
            <div className={classes.menuWrapper}>
              <NavigationList />
              <div className={classes.toolWrapper}>
                <div className={classes.rowWrapper}>
                  <InputField
                    size="small"
                    icon={<SearchIcon />}
                    className={classes.search}
                    placeholder="Search"
                  />

                  <NotificationDropDown />
                </div>

                <div className={classes.rowWrapper}>
                  <FilledButton
                    className={classes.uploadBtn}
                    label="Upload"
                    handleClick={() => history.push('/upload')}
                  />

                  {/* <OutlinedButton */}
                  {/*  className={classes.connectBtn} */}
                  {/*  label="Connect Wallet" */}
                  {/* /> */}
                  <UserDropDown />
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
};

Header.defaultProps = {
  isAuthorized: true,
};

export default Header;
