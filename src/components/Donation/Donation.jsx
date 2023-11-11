import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonate } from "../../utility/localstorage";
import Donate from "../Donate/Donate";



const Donation = () => {
    const donates = useLoaderData();
    const [donations, setDonations] = useState([]);
    const [isShow, setIsShow] = useState(false)

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
                {isShow ?
                    donations.map(donate => <Donate
                        key={donate.id}
                        donate={donate}
                    ></Donate>)
                    :
                    donations.slice(0, 4).map(donate => <Donate
                        key={donate.id}
                        donate={donate}
                    ></Donate>)
                }
            </div>
            <div className="text-center my-5">
                {donations.length > 4 && <button onClick={() => setIsShow(!isShow)} className="btn btn-primary">Show All</button>}
            </div>
        </div>
    );
};

export default Donation;