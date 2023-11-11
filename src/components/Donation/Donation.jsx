import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonate } from "../../utility/localstorage";
import Donate from "../Donate/Donate";



const Donation = () => {
    const donates = useLoaderData();
    const [donations, setDonations] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        const storedDonateIds = getStoredDonate();
        if (donates.length > 0) {
            const donation = donates.filter(donate => storedDonateIds.includes(donate.id));
            setDonations(donation)
        }
    }, [donates])
    return (
        <div className="container mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    donations.slice(0, dataLength).map(donate => <Donate
                        key={donate.id}
                        donate={donate}
                    ></Donate>)
                }

            </div>
            <div className={dataLength === donations.length ? 'hidden' : ''}>
                <div className="text-center my-5">
                    <button onClick={() => setDataLength(donations.length)} className="btn btn-primary">Show All</button>
                </div>
            </div>
        </div>
    );
};

export default Donation;