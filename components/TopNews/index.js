import styled from 'styled-components';
import {
    Grid,
    Hidden
} from '@material-ui/core';

const Wrapper = styled.div`
    // width: 70%;
    // margin: auto;
    padding-top: 20rem;
    .flex{
        display: flex;
    }
    .rightNews{
        flex-direction: column;
        .rightNews__item{
            margin-bottom: 1rem;
        }
    }
`

const Topnews = (props) => {


    return (
        <>
            <Wrapper>
                <Grid container spacing={2}>
                    <Grid className="top-news" item xs={12} sm={6}>
                        <div >
                            <img width="100%" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_850/https://gauoi.vn/wp-content/uploads/2021/03/banhcanhnampho.jpg" />
                            <h1> lorem ipsum dolor sit amet, consectetur lorem ipsum lorem ipsum</h1>
                            <p>lorem ipsum dolor sit amet, consectetur lorem id lorem20</p> 
                        </div>
                        <div>
                            <ul>
                                <li>
                                    Nô nức check in đầu xuân tại tiệm cà phê view Sông Hàn đẹp sang
                            </li>
                                <li>
                                    Ghé ngay TIỆM ĂN HÀN QUỐC mở luôn ngày Tết để nhận lì xì lấy lộc đầu năm.
                            </li>
                                <li>
                                    Thưởng thức những món ăn hấp dẫn dưới bàn tay tài hoa của bếp trưởng La Plage Sheraton Grand Da Nang
                            </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <div className="flex rightNews">
                            <div className="flex rightNews__item">
                                <div>
                                    <img width="120" height="100" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_850/https://gauoi.vn/wp-content/uploads/2021/03/Cover-bst-web.jpg" />
                                </div>
                                <div>
                                    TOP 7 QUÁN CÀ PHÊ MỚI tại Đà Nẵng
                           </div>
                            </div>
                            <div className="flex rightNews__item">
                                <div>
                                    <img width="120" height="100" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_850/https://gauoi.vn/wp-content/uploads/2021/03/Cover-bst-web.jpg" />
                                </div>
                                <div>
                                    TOP 7 QUÁN CÀ PHÊ MỚI tại Đà Nẵng
                           </div>
                            </div>
                            <div className="flex rightNews__item">
                                <div>
                                    <img width="120" height="100" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_850/https://gauoi.vn/wp-content/uploads/2021/03/Cover-bst-web.jpg" />
                                </div>
                                <div>
                                    TOP 7 QUÁN CÀ PHÊ MỚI tại Đà Nẵng
                           </div>
                            </div>
                            <div className="flex rightNews__item">
                                <div>
                                    <img width="120" height="100" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_850/https://gauoi.vn/wp-content/uploads/2021/03/Cover-bst-web.jpg" />
                                </div>
                                <div>
                                    TOP 7 QUÁN CÀ PHÊ MỚI tại Đà Nẵng
                           </div>
                            </div>
                            <div className="flex rightNews__item">
                                <div>
                                    <img width="120" height="100" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_850/https://gauoi.vn/wp-content/uploads/2021/03/Cover-bst-web.jpg" />
                                </div>
                                <div>
                                    TOP 7 QUÁN CÀ PHÊ MỚI tại Đà Nẵng
                           </div>
                            </div>
                            <div className="flex rightNews__item">
                                <div>
                                    <img width="120" height="100" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_850/https://gauoi.vn/wp-content/uploads/2021/03/Cover-bst-web.jpg" />
                                </div>
                                <div>
                                    TOP 7 QUÁN CÀ PHÊ MỚI tại Đà Nẵng
                           </div>
                            </div>

                        </div>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs={12} sm={3}>
                            <div className="right_topBanner" style={{
                                backgroundColor: '#FFCC00',
                                width: 300,
                                height:600
                            }}>
                                <h3>top banner for instagram</h3>
                            </div>

                </Grid>
                    </Hidden>
                </Grid>
            </Wrapper>

        </>
    )
}

export default Topnews;