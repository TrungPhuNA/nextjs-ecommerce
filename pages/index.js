import Master from './layouts/Master'
import {Container} from 'react-bootstrap';
import Link from 'next/link'

import "slick-carousel/slick/slick.css";
import "./../styles/Home.module.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ApiMicroService from './api/api-service';

import ItemLoadingProduct from './components/ItemLoadingProduct';
import ItemProduct from './components/ItemProduct';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};
const slideImages = [
    {
        url: 'sp1.jpeg',
        caption: 'Slide 1'
    },
    {
        url: 'sp2.jpeg',
        caption: 'Slide 2'
    },
    {
        url: 'sp3.jpeg',
        caption: 'Slide 3'
    },
    {
        url: 'sp1.jpeg',
        caption: 'Slide 3'
    },
    {
        url: 'sp3.jpeg',
        caption: 'Slide 3'
    },
    {
        url: 'sp2.jpeg',
        caption: 'Slide 3'
    },
    {
        url: 'sp1.jpeg',
        caption: 'Slide 3'
    },
    {
        url: 'sp3.jpeg',
        caption: 'Slide 3'
    },
    {
        url: 'sp2.jpeg',
        caption: 'Slide 3'
    },
];
export default function Home(
    { categoriesHot, productsNew, countLoading }
) {
    return (
        <Master>
            <Container>
                <div className="home-category mt-3">
                    <div className="lists">
                        {categoriesHot.length > 0 ? categoriesHot.map((item, index) => (
                            <div className="lists-item" key={index}>
                                <Link href={`/category/${item.slug}`} as={`/category/${item.slug}`}>
                                    <a title="Thời trang phụ kiện">
                                        <img src="/c1.png" alt=""/>
                                        <span>{item.name}</span>
                                    </a>
                                </Link>
                            </div>
                        )) : ''}
                    </div>
                </div>
            </Container>
            <Container>
                <div className="section bg-white mt-3">
                    <div className="heading">
                        <div className="">
                            <img src="/giasoc.svg" alt=""/>
                            <img src="/dealFlashIcon.svg" alt=""/>
                            <img src="/homnay.svg" alt=""/>
                        </div>
                    </div>
                    <div className="content ">
                        <Slider {...settings}>
                            {slideImages.map((item, index)=> (
                                <div className="item-slide" key={index}>
                                    <Link href="/product">
                                        <a title={item.name}>
                                            <img src={item.url} alt=""/>
                                            <p className="item-price">
                                                <span>2.000.000 đ</span>
                                                <span className="item-price-discount">-20%</span>
                                            </p>
                                            <div className="deals_qty">
                                                <p className="deals_progress"></p>
                                                <span>Vừa mở bán</span>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            ))}
                        </Slider>
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
            <Container>
                <div className="section bg-white mt-3">
                    <div className="heading d-flex justify-content-between align-items-center">
                        <h3>Mã giảm giá</h3>
                        <a href=""><i className="fa fa-angle-right "></i></a>
                    </div>
                    <div className="content">
                        <div className="lists">
                            <div className="lists-item lists-item-3 coupon-item">
                                <div className="left coupon-item-time flex-column">
                                    <p className="d-block mb-0">LVLM002</p>
                                    <span className="d-block">HSD: 20/12/2021</span>
                                </div>
                                <div className="right">
                                    <h3>Giảm 20% trên mọi đơn hàng</h3>
                                    <p className="coupon-item-desc">Coolmate Mặc Đẹp Sống Chất - Quần Áo, Phụ Kiện Cho Nam.</p>
                                    <div className="coupon-item-info d-flex justify-content-between">
                                        <p>
                                            <span><i className="fa fa-clock-o"></i></span>
                                            <span>Còn 2 ngày</span>
                                        </p>
                                        <p>
                                            <a href="">Sử dụng</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lists-item lists-item-3 coupon-item">
                                <div className="left coupon-item-time flex-column">
                                    <p className="d-block mb-0">LVLM002</p>
                                    <span className="d-block">HSD: 20/12/2021</span>
                                </div>
                                <div className="right">
                                    <h3>Giảm 20% trên mọi đơn hàng</h3>
                                    <p className="coupon-item-desc">Coolmate Mặc Đẹp Sống Chất - Quần Áo, Phụ Kiện Cho Nam.</p>
                                    <div className="coupon-item-info d-flex justify-content-between">
                                        <p>
                                            <span><i className="fa fa-clock-o"></i></span>
                                            <span>Còn 2 ngày</span>
                                        </p>
                                        <p>
                                            <a href="">Sử dụng</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lists-item lists-item-3 coupon-item">
                                <div className="left coupon-item-time flex-column">
                                    <p className="d-block mb-0">LVLM002</p>
                                    <span className="d-block">HSD: 20/12/2021</span>
                                </div>
                                <div className="right">
                                    <h3>Giảm 20% trên mọi đơn hàng</h3>
                                    <p className="coupon-item-desc">Coolmate Mặc Đẹp Sống Chất - Quần Áo, Phụ Kiện Cho Nam.</p>
                                    <div className="coupon-item-info d-flex justify-content-between">
                                        <p>
                                            <span><i className="fa fa-clock-o"></i></span>
                                            <span>Còn 2 ngày</span>
                                        </p>
                                        <p>
                                            <a href="">Sử dụng</a>
                                        </p>
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
            <Container>
                <div className="section-content bg-white mt-3 p-3">
                    <h1>Tiki - Thật nhanh, thật chất lượng, thật rẻ</h1>
                    <h2>Tiki có tất cả</h2>
                    <p>Với hàng triệu sản phẩm từ các thương hiệu, cửa hàng uy tín, hàng nghìn loại mặt hàng từ Điện thoại smartphone tới Rau củ quả tươi, kèm theo dịch vụ giao hàng siêu tốc TikiNOW, Tiki mang đến cho bạn một trải nghiệm mua sắm online bắt đầu bằng chữ tín. Thêm vào đó, ở Tiki bạn có thể dễ dàng sử dụng vô vàn các tiện ích khác như mua thẻ cào, thanh toán hoá đơn điện nước, các dịch vụ bảo hiểm.</p>
                    <h2>Khuyến mãi, ưu đãi tràn ngập</h2>
                    <p>Bạn muốn săn giá sốc, Tiki có giá sốc mỗi ngày cho bạn! Bạn là tín đồ của các thương hiệu, các cửa hàng Official chính hãng đang chờ đón bạn. Không cần săn mã freeship, vì Tiki đã có hàng triệu sản phẩm trong chương trình Freeship+, không giới hạn lượt đặt, tiết kiệm thời gian vàng bạc của bạn. Mua thêm gói TikiNOW tiết kiệm để nhận 100% free ship 2h & trong ngày, hoặc mua gói TikiNOW cao cấp để nhận được 100% freeship, áp dụng cho 100% sản phẩm, 100% tỉnh thành Việt Nam. Bạn muốn tiết kiệm hơn nữa? Đã có TikiCARD, thẻ tín dụng Tiki hoàn tiền 15% trên mọi giao dịch (tối đa hoàn 600k/tháng)</p>
                </div>
            </Container>
        </Master>
    )
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

    const countLoading = [
        {
            'id' : 1
        }
    ]
    return {
        props: {
            categoriesHot,
            productsNew,
            countLoading
        },
    }
}
