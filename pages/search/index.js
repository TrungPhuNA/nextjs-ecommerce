import {Container} from 'react-bootstrap';
import Link from 'next/link';
import MasterEmpty from '../layouts/MasterEmpty';
import Router from 'next/router';

export default function Search(){
    const handleBackUrl = () => {
        Router.back();
    }
    return (
        <MasterEmpty>
            <div className="box-header-mb d-flex justify-content-between align-content-center align-items-center">
                <div className="left">
                    <a title="" onClick={handleBackUrl} className="fa fa-angle-left"></a>
                    <Link href="/">
                        <a title="" className="fa fa-bars"></a>
                    </Link>
                </div>
                <div className="box-search">
                    <input type="text" className="form-control" placeholder="Bạn tìm gì hôm nay"/>
                    <span className="icon-search">
                        <img src="/icon/icon-search.png" alt="Icon search"/>
                    </span>
                </div>
                <div className="right">
                    <Link href="/">
                        <img src="/icon/icon-cart.svg" alt="Icon Cart"/>
                    </Link>
                </div>
            </div>
            <Container style={{margin: "0",padding: "0" }}>
                <div className="pages-search bg-white">
                    <div className="search-history">
                        <h4 className="title">Tìm kiếm gần đây</h4>
                        <ul>
                            { [1,2,3,4,5].map((item, index) =>(
                                <li key={index} className="d-flex justify-content-between align-items-center">
                                    <span>Giày</span>
                                    <span><img src="/icon/icon-delete.png" alt=""/></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="search-suggest mt-3">
                        <h4 className="title">Tìm kiếm phổ biến</h4>
                        <div className="lists-suggest">
                            { ['quần áo','giày dép','mũ bảo hiểm','mã giảm giá'].map((item, index) =>(
                                <a key={index} className="item">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="search-suggest-cate mt-3">
                        <h4 className="title">Danh mục nổi bật</h4>
                        <div className="lists-cate d-flex lists">
                            { ['Quần áo','Thời trang','Đồ điện dân dụng','Mỹ phẩm - làm đẹp','Đồ công nghệ','Sản phẩm', 'Văn phòng'].map((item, index) =>(
                                <a key={index} className="item lists-item d-flex flex-column justify-content-center align-items-center">
                                    <img src="/lap.png" alt=""/>
                                    <span>{item}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </MasterEmpty>
    )
}
