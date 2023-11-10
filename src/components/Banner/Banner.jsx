

const Banner = () => {
    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold">I Grow By Helping People In Need</h1>
            <div className="mt-8">
                <label className="input-group justify-center">
                    <input type="text" placeholder="Search here...." className="input input-bordered" />
                    <span className="bg-[#FF444A]">Search</span>
                </label>
            </div>
        </div>
    );
};

export default Banner;