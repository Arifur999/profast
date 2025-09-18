import React from "react";
import locationMerchant from "../../assets/location-merchant.png";
// import bg from "../../assets/banner/be-a-merchant-bg.png";

const MarchentCard = () => {
  return (
    <div className=" bg-[#03373D] bg-[url('assets/banner/be-a-merchant-bg.png')] bg-no-repeat mt-6 p-6 rounded-2xl">
      <div className="hero-content flex-1/2 flex-col lg:flex-row-reverse">
        <img
          src={locationMerchant}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="flex-1/2">
          <h1 className="text-4xl font-bold text-white">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6 text-gray-400">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <button className="btn btn-primary rounded-full text-black">Become a Merchant</button>
          <button className="btn btn-primary ms-4 btn-outline rounded-full">Earn with Profast Courier</button>
        </div>
      </div>
    </div>
  );
};

export default MarchentCard;
