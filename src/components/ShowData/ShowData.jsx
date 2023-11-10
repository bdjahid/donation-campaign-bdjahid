import { Link } from "react-router-dom";


const ShowData = ({ cetagory }) => {
    const { id, cover, title, category } = cetagory;
    return (
        <Link to={`details/${id}`}>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={cover} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="font-bold">{category}</p>
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default ShowData;