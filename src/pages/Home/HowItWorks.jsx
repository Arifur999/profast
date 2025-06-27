import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaShippingFast, FaTruckMoving, FaWarehouse } from "react-icons/fa";

const workItems = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaShippingFast className="text-4xl text-teal-700" />,
  },
  {
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaMoneyBillWave className="text-4xl text-teal-700" />,
  },
  {
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaWarehouse className="text-4xl text-teal-700" />,
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaBuilding className="text-4xl text-teal-700" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="px-4 py-16  ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-10 text-center text-teal-800">How it Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {workItems.map((item, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-sm p-6 text-center hover:shadow-md transition duration-300"
            >
               <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-semibold text-md mb-2 text-gray-900">{item.title}</h3>
              <p className="text-sm ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
