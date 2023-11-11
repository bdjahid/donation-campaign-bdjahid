
const Product = ({ product }) => {
    const { cover, title, category } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={cover} alt="Shoes" /></figure>
            <div className="card-body">
                <h1>{category}</h1>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default Product;