import Link from 'next/link';

const FilterRating = () => (
    <ul>
        <li>
            <Link href="/">
                <a href="">
                    <p className="item-start">
                        <span>
                            <strong className="active"><i className="fa fa-star"></i></strong>
                            <strong className="active"><i className="fa fa-star"></i></strong>
                            <strong className="active"><i className="fa fa-star"></i></strong>
                            <strong className="active"><i className="fa fa-star"></i></strong>
                            <strong className="active"><i className="fa fa-star"/></strong>
                        </span>
                        <span className="item-pay">từ 5 sao</span>
                    </p>
                </a>
            </Link>
        </li>
        <li>
            <Link href="/">
                <a href="">
                    <p className="item-start">
                        <span>
                            <strong className="active"><i className="fa fa-star"></i></strong>
                            <strong className="active"><i className="fa fa-star"></i></strong>
                            <strong className="active"><i className="fa fa-star"></i></strong>
                            <strong className="active"><i className="fa fa-star"></i></strong>
                            <strong className=""><i className="fa fa-star"/></strong>
                        </span>
                        <span className="item-pay">Từ 4 sao</span>
                    </p>
                </a>
            </Link>
        </li>
        <li>
            <Link href="/">
                <a href="">
                    <p className="item-start">
                        <span>
                            <strong className="active"><i className="fa fa-star"></i></strong>
                            <strong className="active"><i className="fa fa-star"></i></strong>
                            <strong className="active"><i className="fa fa-star"></i></strong>
                            <strong className=""><i className="fa fa-star"></i></strong>
                            <strong className=""><i className="fa fa-star"/></strong>
                        </span>
                        <span className="item-pay">Từ 3 sao</span>
                    </p>
                </a>
            </Link>
        </li>
    </ul>
)

export default FilterRating;
