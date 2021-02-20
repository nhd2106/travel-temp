import { NextSeo } from "next-seo";
import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  Grid,
  Paper,
  TextField,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
} from "@material-ui/core";
import {
  ExpandMore as ExpandMoreIcon,
  FavoriteBorder,
  Favorite,
} from "@material-ui/icons";
import { PriceCard, Skeleton, Breadcrumbs } from "../../components";

import { handlerProducts } from "../../redux/actions/products";
import {
  numberFormatter
} from '../../libs/utils';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "green",
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "red",
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold,
  },
  AccordionWrapper: {
    width: "100%",
    // paddingRight: "1rem",
  },
}));

const HotelsStyles = styled.div`
  width: 80%;
  margin: auto;
  .card-style::hover {
    color: red;
  }
  .MuiFormControl-root {
    width: 100%;
    // padding-right: 1rem;
  }
  background-color: #FAFAFA!important;
`;
export default function Hotels(props) {
  const dispatch = useDispatch();
  const [expandeds, setExpandeds] = useState({
    hotelTypes: true,
    prices: true,
    meals: true,
    cities: true,
  });
  const [prices, setPrices] = useState([0, 100000000]);
  const products = useSelector(({ products }) => products.products);
  useEffect(() => {
    dispatch(handlerProducts());
  }, []);
  const SEO = {
    title: "Khách sạn",
  };
  const classes = useStyles();
  const handleExpand = (id) => {
    setExpandeds((prevExpand) => ({
      ...prevExpand,
      [id]: !prevExpand[id],
    }));
  };
  const handlePrices = (event, newValue) => {
    setPrices(newValue);
  };
  return (
    <div
      style={{
        marginBottom: "1rem",
        marginBottom: "5rem",
        background: '#fafafa'
      }}
    >
      <HotelsStyles>
        <NextSeo {...SEO} />
        <Breadcrumbs slugNTitle={[{ slug: '/hotels', title: "khách sạn" }]}/>
        <Grid container>
          <Grid lg={3} sm={3} xs={12} container>
            <div style={{width: '90%'}}>
              <h4>Tìm kiếm khách sạn</h4>
              <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Bạn muốn đi đâu?" />
              </form>
              <div className={classes.AccordionWrapper}>
                <Accordion
                  expanded={expandeds.cities}
                  onChange={({ currentTarget }) => {
                    handleExpand(currentTarget.id);
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="cities"
                    id="cities"
                  >
                    <Typography className={classes.heading}>
                      Top điểm đến
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup column>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        }
                        label="Phú Quốc"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        }
                        label="Đà Lạt"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        }
                        label="Nha Trang"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        }
                        label="Hội An"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        }
                        label="Vũng Tàu"
                      />
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expandeds.hotelTypes}
                  onChange={({ currentTarget }) => {
                    handleExpand(currentTarget.id);
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="hotelTypes"
                    id="hotelTypes"
                  >
                    <Typography className={classes.heading}>
                      Loại khách sạn
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup column>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        }
                        label="Resorts"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        }
                        label="Căn hộ"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        }
                        label="Villa"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        }
                        label="Biệt thự"
                      />
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expandeds.prices}
                  onChange={({ currentTarget }) => {
                    handleExpand(currentTarget.id);
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="prices"
                    id="prices"
                  >
                    <Typography className={classes.heading}>
                      khoảng giá 
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                    <Typography style={{
                      wordWrap: 'break-word'
                    }}>
                     từ {numberFormatter.format(prices[0])}
                    </Typography>
                    <Typography style={{
                      wordWrap: 'break-word'
                    }}>
                     đến {numberFormatter.format(prices[1])} vnđ
                    </Typography>
                    <Slider
                      value={prices}
                      onChange={handlePrices}
                      aria-labelledby="range-slider"
                      // getAriaValueText={valuetext}
                      min={0}
                      max={10000000}
                    />
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expandeds.meals}
                  onChange={({ currentTarget }) => {
                    handleExpand(currentTarget.id);
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="meals"
                    id="meals"
                  >
                    <Typography className={classes.heading}>
                      Bao gồm bữa ăn
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup column>
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        }
                        label="Buffet sáng"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        }
                        label="Buffet tối"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        }
                        label="Bữa trưa"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                          />
                        }
                        label="Tất cả bữa ăn"
                      />
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </Grid>
          <Grid lg={9} sm={9} xs={12} container>
            {products && products.length ? (
              products.map(({ title, price, slug, og_image: { url } }) => (
                <Grid lg={4} sm={4} xs={12} key={slug}>
                  <PriceCard
                    className="card-style"
                    title={title}
                    price={price}
                    urlImage={url}
                    slug={slug}
                  />
                </Grid>
              ))
            ) : (
              <>
                <Grid lg={4} sm={4} xs={12}>
                  <Skeleton />
                </Grid>
                <Grid lg={4} sm={4} xs={12}>
                  <Skeleton />
                </Grid>
                <Grid lg={4} sm={4} xs={12}>
                  <Skeleton />
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </HotelsStyles>
    </div>
  );
}
