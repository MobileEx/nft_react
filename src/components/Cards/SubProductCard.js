import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import Body1 from '../Typography/Body1';
import Tiny from '../Typography/Tiny';
import PriceTag from '../Tags/PriceTag';
import OutlinedButton from '../Buttons/OutlinedButton';
import ImageWrapper from '../ImageWrapper';
import { resourcePath } from '../../constants/config';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 360,
  },
  wrapper: {
    position: 'relative',
    marginRight: 23,
    '& .overlay': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      transition: '.5s ease',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(1, 1, 2),
    },
    '&:hover': {
      cursor: 'pointer',
      '& .overlay': {
        opacity: 1,
        height: '100%',
        background: theme.palette.text.primary,
      },
    },
  },
  imageWrapper: {
    width: 162,
    height: 147,
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.surface[1],
    flexShrink: 0,
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  summary: {
    marginTop: 9,
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: 11,
  },
  count: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  bidBtn: {
    width: 100,
  },
  arrowBtn: {
    background: theme.palette.surface[1],
    '&:hover': {
      background: 'inherit',
    },
    '& svg': {
      color: theme.palette.text.secondary,
    },
  },
}));

const SubProductCard = ({
  subProduct,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <ImageWrapper
          className={classes.imageWrapper}
          content={`${resourcePath.product}${subProduct?.product}`}
        />
        <div className="overlay">
          <IconButton className={classes.arrowBtn}>
            <ArrowRightAltIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.productInfo}>
        <Body1>{subProduct?.title}</Body1>
        <div className={classes.summary}>
          <Avatar
            className={classes.avatar}
            src={`${resourcePath.user}${subProduct?.avatar}`}
          />
          <PriceTag price={subProduct?.price} />
          <Tiny
            className={classes.count}
            component="span"
          >
            {`${subProduct?.currentCount} of ${subProduct?.totalCount}`}
          </Tiny>
        </div>
        <OutlinedButton
          className={classes.bidBtn}
          label="Place a bid"
          size="small"
        />
      </div>
    </div>
  );
};

SubProductCard.propTypes = {
  subProduct: PropTypes.object.isRequired,
};

SubProductCard.defaultProps = {
};

export default SubProductCard;
