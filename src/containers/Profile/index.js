import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import WallpaperOutlinedIcon from '@material-ui/icons/WallpaperOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import OutlinedButton from '../../components/Buttons/OutlinedButton';
import Container from '../../components/Layout/Container';
import ProfileSidePane from '../../components/Widgets/ProfileSidePane';
import FilterChips from '../../components/Filters/FilterChips';
import ProductCard from '../../components/Cards/ProductCard';
import FollowerCard from '../../components/Cards/FollowerCard';
import LoaderIndicator from '../../components/Loader';

import { products, followers } from '../../constants/dummy.json';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 228,
    [theme.breakpoints.only('sm')]: {
      paddingBottom: 113,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(3),
    },
  },
  banner: {
    background: theme.palette.surface[1],
    backgroundImage: "url('/assets/images/banner.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: 327,
    [theme.breakpoints.down('xs')]: {
      height: '61vw',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'right',
    paddingBottom: 32,
  },
  buttonGroup: {
    '& button': {
      padding: '5px 15px',
      fontSize: 13,
      fontWeight: 'bold',
    },
    '& button:nth-child(1)': {
      marginRight: 20,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'space-between',
      marginLeft: '-5px',
      marginRight: '-5px',
      marginBottom: 55,
      '& button:nth-child(1)': {
        marginRight: 5,
      },
    },
  },
  nav: {
    paddingRight: 24,
    marginTop: -113,
    [theme.breakpoints.only('sm')]: {
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
      marginTop: -31,
    },
  },
  icon: {
    fontSize: 14,
    marginTop: 4,
  },
  content: {
    paddingLeft: 40,
    paddingTop: 66,
    [theme.breakpoints.only('sm')]: {
      paddingLeft: theme.spacing(1.75),
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingTop: 46,
    },
  },
  filter: {
    marginBottom: 16,
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
  },
  filterChip: {
    marginLeft: 0,
    marginRight: 12,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginRight: 4,
    },
  },
  masonry: {
    display: 'flex',
    margin: theme.spacing(0, -1.75),
  },
  gridColumn: {
    margin: theme.spacing(0, 2),
  },
  followers: {
    position: 'relative',
  },
  shadow: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: 70,
    backgroundImage: `linear-gradient(-90deg, ${theme.palette.background.paper}, transparent)`,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  indicator: {
    margin: '0 auto',
    width: 20,
    height: 20,
  },
}));

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();

  const [filter, setFilter] = useState(0);
  const theme = useTheme();
  const breakpointColumnsObj = {
    default: 3,
    [theme.breakpoints.values.md]: 2,
    700: 2,
    500: 1,
  };

  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        <Container className={classes.container}>
          <div className={classes.buttonGroup}>
            <OutlinedButton
              label="Edit cover photo"
              icon={(
                <WallpaperOutlinedIcon className={classes.icon} />
              )}
            />
            <OutlinedButton
              label="Edit profile"
              icon={(
                <BorderColorOutlinedIcon className={classes.icon} />
              )}
              handleClick={() => history.push('/profile/edit')}
            />
          </div>
        </Container>
      </div>
      <Container>
        <Grid container>
          <Grid item md={3} sm={4} xs={12}>
            <div className={classes.nav}>
              <ProfileSidePane />
            </div>
          </Grid>
          <Grid item md={9} sm={8} xs={12}>
            <div className={classes.content}>
              <FilterChips
                className={classes.filter}
                chipClassName={classes.filterChip}
                variant="light"
                active={filter}
                onChange={setFilter}
                items={['On Sales', 'Collectibles', 'Created', 'Likes', 'Following', 'Followers']}
              />

              {filter !== 5 && (
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className={classes.masonry}
                  columnClassName={classes.gridColumn}
                >
                  {products.slice(0, 3).map((item) => (
                    <Box key={item.id} marginBottom={5}>
                      <ProductCard product={item} />
                    </Box>
                  ))}
                </Masonry>
              )}

              {filter === 5 && (
                <div className={classes.followers}>
                  {followers?.map((follower) => (
                    <FollowerCard
                      key={follower.id}
                      follower={follower}
                    />
                  ))}
                  <div className={classes.shadow} />
                </div>
              )}

              <LoaderIndicator className={classes.indicator} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Profile.propTypes = {
};

Profile.defaultProps = {
};

export default Profile;
