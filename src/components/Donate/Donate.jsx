import { BiDollar } from 'react-icons/bi'
import { Link } from 'react-router-dom';
const Donate = ({ donate }) => {
    const { cover, title, category, price, background_color, text_color } = donate;

    return (
        <div style={{ background: background_color }} className="card card-side bg-base-100 shadow-xl mx-5 md:my-0">
            <figure><img src={cover} alt="Movie" /></figure>
            <div className="card-body">
                <h2 style={{ color: text_color }}
                    className="text-sm">{category}</h2>
                <p className="text-xl font-bold">{title}</p>
                <p>he</p>
                <p style={{ color: text_color }} className='flex items-center'><BiDollar />{price}</p>
                <div className="card-actions">
                    <Link to={`/details/:id`}>
                        <button style={{ background: text_color }} className='btn text-white'>View Details</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Donate;