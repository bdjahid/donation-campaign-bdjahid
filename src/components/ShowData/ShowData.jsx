import { Link } from "react-router-dom";


const ShowData = ({ cetagory }) => {
    const { id, cover, title, category, text_color, background_color } = cetagory;
    return (
        <Link to={`details/${id}`}>
            <div style={{ background: background_color }} className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={cover} alt="Shoes" /></figure>
                <div className="card-body">
                    <p style={{ color: text_color }} className="font-bold">{category}</p>
                    <h2 style={{ color: text_color }} className="card-title">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default ShowData;