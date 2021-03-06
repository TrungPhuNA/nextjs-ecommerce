import Link from 'next/link';
import formatMoney  from "./../helpers/function";
const ItemProduct = ({product, classStyle}) => {
    if (!product) return  null;
    return (
        <div className={classStyle}>
            <Link href={`/product/${product.slug}`}>
                <a title={product.name}>
                    <img src='https://angular.123code.net/assets/preloader.png' alt={product.name}/>
                </a>
            </Link>
            <h4 className="item-title-h4 mt-2">
                <Link href={`/product/${product.slug}`}>
                    <a title={product.name}>{product.name}</a>
                </Link>
            </h4>
            <p className="item-price">
                <span>{formatMoney(product.price)} đ</span>
                {product.sale ? <span className="item-price-discount">-{product.sale}%</span> : ''}
            </p>
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
        </div>
    )
}

export default ItemProduct;
