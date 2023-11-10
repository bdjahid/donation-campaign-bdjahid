

const Donate = ({ donate }) => {
    const { cover, title, category, price } = donate;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={cover} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <p>{title}</p>
                <p>{price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Donate;