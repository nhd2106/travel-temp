import { NextSeo } from "next-seo";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


import PriceCard from '../../components/PriceCard';

import { handlerProducts } from '../../redux/actions/products';


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
}));

const HotelsStyles = styled.div`
  width: 80%;
  margin: auto;
  .card-style::hover {
    color: red;
  }
`;
export default function Hotels(props) {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.products );
  useEffect(() => {
    dispatch(handlerProducts())
  }, [])
  console.log(products);
  const SEO = {
    title: "Khách sạn",
  };
  const classes = useStyles();

  return (
    <div
      style={{
        marginTop: "5rem",
        marginBottom: "5rem",
      }}
    >
      <div></div>
      <HotelsStyles>
        <NextSeo {...SEO} />
        <Grid container>
          <Grid lg={3} sm={3} xs={12} container>
            <div>
              <h4>Tìm kiếm khách sạn</h4>
              <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Bạn muốn đi đâu?" />
              </form>

            </div>
          </Grid>
          <Grid lg={9} sm={9} xs={12} container>
              {
                Object.keys(products).length ? (
                  products.map(({
                    title,
                    price,
                    og_image: {
                      url
                    }
                  }) => <Grid lg={4} sm={4} xs={12}>
                  <PriceCard className='card-style' title={title} price={price} urlImage={url}/>
              </Grid>)
                ) : null
              }
          </Grid>
        </Grid>
      </HotelsStyles>
    </div>
  );
}
