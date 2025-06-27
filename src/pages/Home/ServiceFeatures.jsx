import React from 'react';
import trackingImg from '../../assets/Transit warehouse.png';
import deliveryImg from '../../assets/Group 4.png';
import supportImg from '../../assets/safe-delivery.png';

const features = [
  {
    img: trackingImg,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    img: deliveryImg,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    img: supportImg,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const ServiceFeatures = () => {
  return (
    <div className="p-6 space-y-6 max-w-10/12 mx-auto mb-6 border-b-2 border-dashed border-gray-400">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center bg-gray-100 p-4 rounded-xl shadow-sm "
        >
          <div className=" w-full mx-auto md:w-1/3 flex justify-center mb-4 md:mb-0">
            <img
              src={feature.img}
              alt={feature.title}
              className="w-28 h-28 object-contain"
            />
             <div className="hidden md:block h-30 border-l-2 border-dashed border-gray-400 lg:ml-6 transform "></div>
          </div>
          <div className="md:w-2/3 md:pl-8 text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;
