import Master from './../layouts/Master'
import {Container} from 'react-bootstrap';
import ItemProduct from '../components/ItemProduct';
import ItemLoadingProduct from '../components/ItemLoadingProduct';
import axios from 'axios';
import Link from 'next/link';
import ApiMicroService from '../api/api-service';
export default function Product(
    {productsNew}
) {
    return (
        <Master>
            <Container>
                <div className="breadcrumb mt-3">
                    <ul>
                        <li>
                            <Link href="/">
                                <a itemProp="url" title="Home"><span
                                    itemProp="title">Trang chủ</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/product">
                                <a itemProp="url"
                                   title="Sản phẩm"><span
                                    itemProp="title">Sản phẩm</span></a>
                            </Link>
                        </li>
                        <li>
                            <span itemProp="title">C</span>
                        </li>
                    </ul>
                </div>
            </Container>
            <Container>
                <div className="product-detail mt-3 bg-white d-flex">
                    <div className="thumb d-flex">
                        <div className="left d-flex flex-md-column">
                            <div className="mb-2">
                                <img src="/sp1.jpeg" alt="1"/>
                            </div>
                            <div className="mb-2">
                                <img src="/sp2.jpeg" alt="2"/>
                            </div>
                            <div className="mb-2">
                                <img src="/sp3.jpeg" alt="3"/>
                            </div>
                        </div>
                        <div className="right">
                            <div>
                                <img src="/sp3.jpeg" alt="2"/>
                            </div>
                        </div>
                    </div>
                    <div className="info mt-2">
                        <h1>Đồ án website chương trình giảm giá bằng laravel - Đồ án tốt nghiệp</h1>
                        <p className="item-start">
                            <span>
                                <strong className="active"><i className="fa fa-star"></i></strong>
                                <strong className="active"><i className="fa fa-star"></i></strong>
                                <strong className="active"><i className="fa fa-star"></i></strong>
                                <strong className=""><i className="fa fa-star"></i></strong>
                                <strong className=""><i className="fa fa-star"/></strong>
                            </span>
                            <span className="item-pay">Đã bán 20</span>
                        </p>

                        <div className="d-flex box-information-shop">
                            <div className="information">
                                <div className="box-price">
                                    <span className="price">20.000.000 đ</span>
                                </div>
                                <div className="box-qty">
                                    <p className="label">Số Lượng</p>
                                    <div className="group-input">
                                        <button>
                                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="1"/>
                                        </button>
                                        <input type="text"  className="input" />
                                        <button>
                                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="shop">
                                <div className="shop-box">
                                    <div className="">
                                        <a className="overview d-flex align-items-center " href="https://tiki.vn/cua-hang/hangshoes">
                                            <img src="https://vcdn.tikicdn.com/cache/w100/ts/seller/4b/54/1a/f385a79a716cb3505f152e7af8c769aa.png" alt="1"/>
                                            <span className="seller-name"><span>Hăngshoes</span></span>
                                        </a>
                                        <div className="seller-detail d-flex" style={{minHeight: "40px"}}>
                                            <div className="item review ">
                                                <div className="title"><span>3.7 / 5</span>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="sub-title">274
                                                    đánh giá
                                                </div>
                                            </div>
                                            <div className="border-left"></div>
                                            <div className="item normal">
                                                <div className="title">
                                                    <span>40</span></div>
                                                <div className="sub-title">
                                                    Theo dõi
                                                </div>
                                            </div>
                                            <div className="border-left"></div>
                                            <div className="item chat">
                                                <div className="title">
                                                    <span>72%</span></div>
                                                <div className="sub-title">Phản hồi</div>
                                            </div>
                                        </div>
                                        <div className="seller-action ">
                                            <a className="action"
                                               data-view-id="pdp_store_seller.view"
                                               href="https://tiki.vn/cua-hang/hangshoes">
                                                <img src="https://salt.tikicdn.com/ts/upload/49/27/ff/d735c33edfdc6cf6aeb6e183bec28869.png" alt="1" />
                                                <span>Xem Shop</span>
                                           </a>
                                            <div
                                                data-view-id="pdp_store_seller.follow"
                                                className="action follow"
                                                data-view-label="101161">
                                                <img src="https://salt.tikicdn.com/ts/upload/5b/bf/3c/eeda00767e26b5873030e44f951441c4.png" alt="1" />
                                                <span>Theo Dõi</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="section bg-white mt-3">
                    <div className="heading">
                        <h3>Dành riêng cho bạn</h3>
                    </div>
                    <div className="content">
                        <div className="lists">
                            {productsNew.length > 0 ?  productsNew.map((item, index) => (
                                    <ItemProduct item={item} key={index} classStyle="lists-item lists-item-6" />
                                )) :
                                <div className="lists wrapper-cell" >
                                    {countLoading.map((item, index) => (
                                        <ItemLoadingProduct key={index} />
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </Master>
    )
}

export async function getStaticProps(context) {
    let productsNew = [];
    try {
        const responseProducts = await ApiMicroService.get(`/api/products?limit=10`)
        productsNew = responseProducts.data.data.products;
    }catch (e) {
        console.log(" ----- e: ", e);
    }

    return {
        props: {
            productsNew
        },
    }
}
