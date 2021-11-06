import Link from 'next/link'
import Slider from "react-slick";
import {Container} from 'react-bootstrap';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const slideImages = [
    {
        url: 's-l1.png',
        caption: 'Slide 2'
    },
    {
        url: 's-l2.png',
        caption: 'Slide 3'
    }
];
const Slide = () => (
    <Container>
        <div className="home-slide d-flex mt-3 justify-content-between align-content-center">
            <div className="left">
                <Slider {...settings}>
                    {slideImages.map((item, index)=> (
                        <div className="item-slide-home" key={index}>
                            <Link href="/product">
                                <a title={item.caption}>
                                    <img src={item.url} alt={item.caption}/>
                                </a>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="right">
                <Link href="/">
                    <a title="Tiêu đề">
                        <img src="/s-r1.png" alt=""/>
                    </a>
                </Link>
            </div>
        </div>
    </Container>
)

export default Slide;
