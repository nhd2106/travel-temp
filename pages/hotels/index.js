import { NextSeo } from "next-seo";
import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

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
import { Pagination } from "@material-ui/lab";
import {
  ExpandMore as ExpandMoreIcon,
  FavoriteBorder,
  Favorite,
} from "@material-ui/icons";
import { PriceCard, Skeleton, Breadcrumbs, HotelItem } from "../../components";

import { handlerProductsByPage, handlerCountProducts } from "../../redux/actions/products";
import { numberFormatter } from "../../libs/utils";
import { BACKEND } from "../../libs/config";

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
  background-color: #fafafa !important;
  .pagination {
    margin-top: 3rem;
}
`;

export default function Hotels(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(router.query.page)
  const [expandeds, setExpandeds] = useState({
    hotelTypes: true,
    prices: true,
    meals: true,
    cities: true,
  });
  const [prices, setPrices] = useState([0, 100000000]);
  const {
    products,
    numberOfProducts
  } = useSelector(({ products }) => ({
    products: products.products,
    numberOfProducts: products.numberOfProducts
  }));
  const pagesCount = Math.round(numberOfProducts/2) || 5
  console.log(pagesCount)
  useEffect(() => {
    const page = router.query.page || 1;
    dispatch(handlerProductsByPage(page));
  }, [router.query.page]);
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
  const handleChangePage = (event, page) => {
    const currentPath = router.pathname;
    router.replace(`${currentPath}?page=${page}`)
  };
  const baseUrl = BACKEND();
  return (
    <div
      style={{
        marginBottom: "1rem",
        marginBottom: "5rem",
        background: "#fafafa",
      }}
    >
      <HotelsStyles>
        <NextSeo {...SEO} />
        <Breadcrumbs slugNTitle={[{ slug: "/hotels", title: "khách sạn" }]} />
        <Grid container>
          <Grid
            lg={3}
            sm={3}
            xs={12}
            container
            style={{
              justifyContent: "center",
            }}
          >
            <Paper style={{ width: "90%", padding: "1rem" }}>
              <h4>Tìm kiếm khách sạn</h4>
              <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Bạn muốn đi đâu?" />
              </form>
              <div className={classes.AccordionWrapper}>
                <div
                  expanded={expandeds.cities}
                  onChange={({ currentTarget }) => {
                    handleExpand(currentTarget.id);
                  }}
                >
                  <div
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="cities"
                    id="cities"
                  >
                    <Typography className={classes.heading}>
                      Top điểm đến
                    </Typography>
                  </div>
                  <div>
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
                  </div>
                </div>
                <div
                  expanded={expandeds.hotelTypes}
                  onChange={({ currentTarget }) => {
                    handleExpand(currentTarget.id);
                  }}
                >
                  <div
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="hotelTypes"
                    id="hotelTypes"
                  >
                    <Typography className={classes.heading}>
                      Loại khách sạn
                    </Typography>
                  </div>
                  <div>
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
                  </div>
                </div>
                <div
                  expanded={expandeds.prices}
                  onChange={({ currentTarget }) => {
                    handleExpand(currentTarget.id);
                  }}
                >
                  <div
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="prices"
                    id="prices"
                  >
                    <Typography className={classes.heading}>
                      khoảng giá
                    </Typography>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          wordWrap: "break-word",
                        }}
                      >
                        từ {numberFormatter.format(prices[0])}
                      </Typography>
                      <Typography
                        style={{
                          wordWrap: "break-word",
                        }}
                      >
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
                  </div>
                </div>
                <div
                  expanded={expandeds.meals}
                  onChange={({ currentTarget }) => {
                    handleExpand(currentTarget.id);
                  }}
                >
                  <div
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="meals"
                    id="meals"
                  >
                    <Typography className={classes.heading}>
                      Bao gồm bữa ăn
                    </Typography>
                  </div>
                  <div>
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
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid lg={9} sm={9} xs={12} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {products && products.length ? (
              <div>
                {products.map(({ title, price, slug, og_image: { url } }) => {
                const imageTarget = url.split("/uploads/")[1];
                const thumbnail = `${baseUrl}/uploads/thumbnail_${imageTarget}`;
                return (
                  <HotelItem
                    className="card-style"
                    title={title}
                    price={price}
                    urlImage={thumbnail}
                    slug={slug}
                    key={slug}
                  />
                );
              })}
              </div>
            ) : (
              <div>
                <Grid lg={4} sm={4} xs={12}>
                  <Skeleton />
                </Grid>
                <Grid lg={4} sm={4} xs={12}>
                  <Skeleton />
                </Grid>
                <Grid lg={4} sm={4} xs={12}>
                  <Skeleton />
                </Grid>
              </div>
            )}
            <div className="pagination">
              <Pagination
                count={pagesCount}
                variant="outlined"
                shape="rounded"
                onChange={handleChangePage}
              />
            </div>
          </Grid>
        </Grid>
      </HotelsStyles>
    </div>
  );
}
