import Link from 'next/link';

const ItemProduct = ({item, classStyle}) => (
    <div className={classStyle}>
        <Link href={`/product/${item.slug}`}>
            <a title={item.name}>
                <img src='https://angular.123code.net/assets/preloader.png' alt={item.name}/>
            </a>
        </Link>
        <h4 className="item-title-h4 mt-2"><a href="" title={item.name}>{item.name}</a></h4>
        <p className="item-price">
            <span>2.000.000 đ</span>
            <span className="item-price-discount">-20%</span>
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
export async function getStaticProps(context) {
    return {
        props: {

        },
    }
}


export default ItemProduct;
