import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import OurServices from './OurServices';
import CompanyMarquee from './CompanyMarquee';
import ServiceFeatures from './ServiceFeatures';
import MarchentCard from './MarchentCard';
import ReviewCarousel from './ReviewCarousel';
import FAQAccordion from './FAQAccordion';

const Home = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <CompanyMarquee></CompanyMarquee>
            <ServiceFeatures></ServiceFeatures>
            <MarchentCard></MarchentCard>
            <ReviewCarousel></ReviewCarousel>
            <FAQAccordion></FAQAccordion>
        </div>
    );
};

export default Home;