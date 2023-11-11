import { useEffect, useState } from "react";
import Product from "../Product/Product";




const Banner = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [searchItems, setSearchItems] = useState(localStorage.getItem('searchTerm') || '');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const filteredProducts = products.filter(product =>
            product.category.toLowerCase().includes(searchItems.toLowerCase())
        );
        setSearchResults(filteredProducts);
    }, [searchItems]);

    const handleSearch = (event) => {
        event.preventDefault();
        const item = event.target.search.value;

        setSearchItems(item)
        localStorage.setItem('searchItems', item);

    }

    return (
        <div className="text-center mt-20 container mx-auto">

            <h1 className="text-4xl font-bold">I Grow By Helping People In Need</h1>
            <div className="mt-8">
                <form onSubmit={handleSearch}>
                    <label className="input-group justify-center">
                        <input name="search" type="text" placeholder="Search here...." className="input input-bordered" />
                        <input className="btn btn-primary" type="submit" value="Search" />
                    </label>
                </form>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ms-14 md:ms-0">
                    {
                        searchResults.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;