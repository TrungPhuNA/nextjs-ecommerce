import Link from 'next/link'
import {useState} from 'react';
import './../../styles/components/Header.module.css'
function NavbarMenu () {
    const [showCategory, setShowCategory] = useState(false);
    const toggleNavCategory = (event) => {
        event.stopPropagation();
        setShowCategory(!showCategory)
    }
    return (
        <div className='header'>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a onClick={toggleNavCategory} className="header-icon-bars">
                        <span className="navbar-brand">
                            <i className={showCategory ? 'fa fa-check' : 'fa fa-bars'}></i>
                        </span>
                    </a>
                    <Link href="/" passHref>
                        <a className="navbar-brand header-logo">
                            <img src="/logo.png" alt=""/>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse"
                         id="navbarSupportedContent">
                        <form className="d-flex header-search">
                            <input type="text" className="form-control"
                                   placeholder="Từ khoá tìm kiếm"/>
                        </form>
                        <ul className="navbar-nav mb-2 mb-lg-0 header-icon">
                            <li className="nav-item">
                                <a href=""><i
                                    className="fa fa-shopping-cart"></i></a>
                            </li>
                            <li className="nav-item">
                                <a href=""><i className="fa fa-bell"></i></a>
                            </li>
                            <li className="nav-item">
                                <a href=""><i className="fa fa-user"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={`nav-lists-category ${showCategory ? "active" : "" }`}>
                <div className="title">
                    <span>Danh mục</span>
                    <span className="close-nav" onClick={toggleNavCategory}><i className="fa fa-times"></i></span>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <img src="/c1.png" alt=""/>
                            <span>Danh mục 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/c2.png" alt=""/>
                            <span>Danh mục 2</span>
                        </a>
                    </li>
                    <li>
                        <a href="" className="active">
                            <img src="/c3.png" alt=""/>
                            <span>Danh mục 3</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarMenu;
