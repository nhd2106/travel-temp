import Link from 'next/link';
import styled from 'styled-components';


const PriceCardStyle = styled.div`
    margin: 2rem 1rem;
    .card-wrapper {
        width: 100%;
        .box{
            box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1), 0px 20px 20px rgba(0, 0, 0, 0.1); 
        }
    }
    img {
        width: 100%;
    }
    .description{
        padding: 1rem;
        h3 {
            text-overflow: ellipsis;
        }
    }
    .number {
        display: flex;
        justify-content: space-between;
        .count, .price {
            flex: 1 1 50%;
        }
        .price {
            text-align: right;
        }
        .old-price {
            text-decoration: line-through;
        }
        .new-price {
            color: red;
            text-align: right;
        }
    }   
`

const PriceCards = () => {
    return (
        <PriceCardStyle>
            <Link href='/'>
                <a>
                    <div className='card-wrapper'>
                    <div className='box'>
                    <img src="/sonesea.jpg" />
                    <div className='description'>
                        <h3>title</h3>
                        <div className='number'>
                            <div className='count'>
                                số người mua
                            </div>
                            <div className='price'>
                                <div className='old-price'>
                                    5000000 đ
                                </div>
                                <div className='new-price'>
                                    giá mới
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </a>
            </Link>
        </PriceCardStyle>
    )
}

export default PriceCards;