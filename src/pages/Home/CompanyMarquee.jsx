import Marquee from "react-fast-marquee";
import amazon from "../../assets/brands/amazon.png";
import amazonv from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import startp from "../../assets/brands/start-people 1.png";
import start from "../../assets/brands/start.png";

const logos = [ amazon,amazonv,casio, moonstar,randstad ,startp, start ];

const CompanyMarquee = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-teal-800">
          We've helped thousands of sales teams
        </h2>
      </div>

      <Marquee
        direction="right"
        pauseOnHover={true}
        speed={50}
        gradient={false}
        className="py-2"
      >
        {logos.map((logo, index) => (
          <div key={index} className="mx-8">
            <img
              src={logo}
              alt="Company Logo"
              className="h-8 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </Marquee>

      <div className="mt-6 border-t border-dashed border-teal-800 opacity-30 w-11/12 mx-auto"></div>
    </div>
  );
};

export default CompanyMarquee;
