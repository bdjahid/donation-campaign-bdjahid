import { useLoaderData, useParams } from "react-router-dom";
import { LiaDollarSignSolid } from 'react-icons/Lia';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonate } from "../../utility/localstorage";
import './DonationDetails .css'

const DonationDetails = () => {
    const donations = useLoaderData();
    console.log(donations)
    const { id } = useParams();
    const idInt = parseInt(id)
    const donation = donations.find(donation => donation.id === idInt);
    // console.log(donation)
    const handleDonate = () => {
        saveDonate(idInt)
        toast('Donate successfully')
    }
    return (
        <div className="mt-10 container mx-auto">
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className="w-full p-5" src={donation.cover} alt="Shoes" /></figure>

                <div className="absolute bottom-40 bgcolor width ms-5">
                    <button onClick={handleDonate} className="btn bg-[#FF444A] ms-5 mt-6">Donate<LiaDollarSignSolid />{donation.price}</button>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold">{donation.title}</h2>
                    <p>{donation.description}</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;