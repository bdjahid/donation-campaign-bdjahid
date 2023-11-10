import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonate } from "../../utility/localstorage";
import Donate from "../Donate/Donate";


const Donation = () => {
    const donates = useLoaderData();
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const storedDonateIds = getStoredDonate();
        if (donates.length > 0) {
            const donation = donates.filter(donate => storedDonateIds.includes(donate.id));
            setDonations(donation)
        }
    }, [donates])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    donations.map(donate => <Donate
                        key={donate.id}
                        donate={donate}
                    ></Donate>)
                }
            </div>
        </div>
    );
};

export default Donation;