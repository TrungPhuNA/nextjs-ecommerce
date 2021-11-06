import {Container} from 'react-bootstrap';
import Link from 'next/link';
import FilterRating from './include/filter_rating';
import ItemProduct from '../components/ItemProduct';
import ItemLoadingProduct from '../components/ItemLoadingProduct';
import Master from '../layouts/Master';
import axios from 'axios';
import Head from 'next/head';
import ApiMicroService from '../api/api-service';

const Category = (
    {categoriesHot, productsNew}
) => (
    <Master>
        <Head>
            <title>Danh mục</title>
        </Head>
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

export const getStaticPaths = async (params) => {
    let paths = [];
    const responseCategory = await axios.get(
        `https://cms.123code.net/api/categories`
    )
    const categoriesHot = responseCategory.data.data.categories;
    if (categoriesHot.length > 0 )
    {
        paths = categoriesHot.map((cate) => ({
            params: { slug: cate.slug },
        }));
    }


    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    let categoriesHot , productsNew = [];
    try {
        const responseCategory = await ApiMicroService.get(`/api/categories`)
        categoriesHot = responseCategory.data.data.categories;
    }catch (e) {
        console.log(" ----- e: ", e);
    }

    try {
        const responseProducts = await ApiMicroService.get(`/api/products?limit=10`)
        productsNew = responseProducts.data.data.products;
    }catch (e) {
        console.log(" ----- e: ", e);
    }
    return {
        props: {
            categoriesHot,
            productsNew
        },
    }
}

export default Category;
