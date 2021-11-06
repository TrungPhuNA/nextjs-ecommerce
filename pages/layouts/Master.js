import Head from 'next/head'
import NavbarMenu from './NavbarMenu';
const Master = ({children}) => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <title>123code.net</title>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>
        </Head>
        <header>
            <NavbarMenu/>
        </header>
        {/*<div className="bg-over">*/}
        <div className="bg-not-over">
            <div className="bg-overlay"></div>
        </div>
        <main>
            {children}
        </main>
        <div className="container-fluid footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Hỗ trợ</h4>
                        <a href="" className="text-link d-block">Câu hỏi thường
                            gặp</a>
                        <a href="" className="text-link d-block">Hỗ trợ khách
                            hàng</a>
                    </div>
                    <div className="col-md-3">
                        <h4>Về chúng tôi</h4>
                        <a href="" className="text-link d-block">Giới thiệu</a>
                        <a href="" className="text-link d-block">Tuyển dụng</a>
                    </div>
                    <div className="col-md-3">
                        <h4>Hợp tác, liên kết</h4>
                        <a href="" className="text-link d-block">Quy chế</a>
                        <a href="" className="text-link d-block">Đăng ký gian
                            hàng</a>
                    </div>
                    <div className="col-md-3">
                        <h4>Kết nối với chúng tôi</h4>
                        <p>
                            <a href="" className="link-icon"><i
                                className="bi bi-youtube"></i></a>
                            <a href="" className="link-icon"><i
                                className="bi bi-facebook"></i></a>
                        </p>
                    </div>
                </div>
                <p className="text-center fw-bold">©
                    2021 - Bản quyền của 123code.net</p>
            </div>
        </div>
    </div>
)
export default Master
