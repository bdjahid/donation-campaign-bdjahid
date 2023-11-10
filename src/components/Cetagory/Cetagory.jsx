import { useEffect, useState } from "react";
import ShowData from "../ShowData/ShowData";


const Cetagory = () => {
    const [cetagoris, setCetagoris] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setCetagoris(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-36 container mx-auto">
            {
                cetagoris.map(cetagory => <ShowData
                    key={cetagory.id}
                    cetagory={cetagory}
                ></ShowData>)
            }
        </div>
    );
};

export default Cetagory;