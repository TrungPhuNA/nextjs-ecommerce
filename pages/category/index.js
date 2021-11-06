import Master from './../layouts/Master'
import Slider from 'react-slick';
import {Container} from 'react-bootstrap';
import './../../styles/Category.module.css'
import axios from 'axios';
import Link from 'next/link'
import ItemLoadingProduct from '../components/ItemLoadingProduct';
import FilterRating from './include/filter_rating';
import ItemProduct from '../components/ItemProduct';

export default function CategoryLists(
    {categoriesHot,productsNew}
) {
    return (
        <Master>
            <Container>
                <div className="breadcrumb mt-3">
                    <ul>
                        <li><a itemProp="url" href="/" title="Home"><span
                            itemProp="title">Trang chủ</span></a></li>
                        <li><a itemProp="url"
                               href=""
                               title="Sản phẩm"><span
                            itemProp="title">Sản phẩm</span></a></li>
                        <li><a itemProp="url" href="" title="Đồng hồ Diamond D"><span
                            itemProp="title">C</span></a></li>
                    </ul>
                </div>
            </Container>
            <Container>
                <div className="categories mt-3">
                    <div className="left">
                        <div className="box">
                            <div className="box-title">Danh mục sản phẩm</div>
                            <div className="box-content">
                                <ul>
                                    {categoriesHot.map((item, index) => (
                                        <li key={index}>
                                            <Link href="/category">
                                                <a  title={item.name}>{item.name}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-title">Địa chỉ</div>
                            <div className="box-content checkbox">
                                <ul>
                                    <li className=" js-param-search active">
                                        <a href=""><span>Nghệ An</span> </a>
                                    </li>
                                    <li className=" js-param-search ">
                                        <a href=""><span>Hà Nội</span> </a>
                                    </li>
                                    <li className=" js-param-search ">
                                        <a href=""><span>Hải Phòng</span> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-title">Đánh giá</div>
                            <div className="box-content rating">
                                <FilterRating/>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="content">
                            <div className="filters d-flex align-items-center">
                                <div className="filter-item mt-2">
                                    <span><i className="fa fa-filter"></i></span>
                                    <span>Lọc</span>
                                </div>
                            </div>
                            <div className="lists">
                                    {productsNew.length > 0 ?  productsNew.map((item, index) => (
                                        <ItemProduct item={item} key={index} classStyle="lists-item lists-item-4" />
                                    )) :
                                    <div className="lists wrapper-cell" >
                                        {countLoading.map((item, index) => (
                                            <ItemLoadingProduct key={index} />
                                        ))}
                                    </div>
                                }

                                {/*<ItemProduct />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="coupons-home mt-3">
                    <div className="lists">
                        <div className="lists-item lists-item-4 m-0 p-0">
                            <a href="">
                                <img src="/cop1.png" alt=""/>
                            </a>
                        </div>
                        <div className="lists-item lists-item-4 m-0 p-0">
                            <a href="">
                                <img src="/cop2.png" alt=""/>
                            </a>
                        </div>
                        <div className="lists-item lists-item-4 m-0 p-0">
                            <a href="">
                                <img src="/cop3.png" alt=""/>
                            </a>
                        </div>
                        <div className="lists-item lists-item-4 m-0 p-0">
                            <a href="">
                                <img src="/cop4.png" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </Master>
    )
}

export async function getStaticProps(context) {
    const responseCategory = await axios.get(
        `https://cms.123code.net/api/categories`
    )
    const categoriesHot = responseCategory.data.data.categories;

    const responseProducts = await axios.get(
        `https://cms.123code.net/api/products?limit=10`
    )
    const productsNew = responseProducts.data.data.products;

    return {
        props: {
            categoriesHot,
            productsNew
        },
    }
}
