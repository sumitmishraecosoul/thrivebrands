import React from "react";
import WorkSlider from "../components/WorkSlider";
import HomeFooter from "../components/Footer";
import mainbanner from '../assets/images/service/mainbanner.png';
import infographic from '../assets/images/service/infographic.png';
import ServicePageInfographic from '../assets/images/service/ServicePageInfographic.png';
import whythrive from '../assets/images/service/whythrive.png';
import WhyThriveMobile from '../assets/images/service/WhyThriveMobile.png';
import app from '../assets/images/service/app.png';
import AppMobile from '../assets/images/service/AppMobile.png';
import pricing from '../assets/images/service/pricing.png';
import OurServicesSlider from "../components/OurService";
import SettingFooter from "../components/setting_footer";
import ThriveFooter from "../layouts/ThriveFooter";
import ThriveBannerSection from "../components/ThriveBannerSection";
import ResponsiveImageSection from "../components/ResponsiveHeroSection";
import ResponsiveServiceImageSection from "../components/ResponsiveServiceImageSection";
import WhatThriveBrandsOffers from "../components/WhatThriveBrandsOffers";
import PartnerWithThriveSection from "../components/PartnerWithThriveSection";

export default function Services() {
    return (
        <div >
           {/* <section
                          className="h-[600px] bg-cover bg-center flex items-center justify-center"
                          style={{ backgroundImage: `url(${mainbanner})` }}
                        >
                          
                        </section> */}

                        <ThriveBannerSection />
                        

            {/* <section
                          className="h-[700px]  bg-cover bg-center flex items-center justify-center"
                          style={{ backgroundImage: `url(${app})` }}
                        >
                          
                        </section> */}

                             <ResponsiveImageSection
                              imageWeb={app}
                              imageMobile={AppMobile}
                            />

            <OurServicesSlider />
            {/* <section
                          className="h-[800px] bg-cover bg-center flex items-center justify-center"
                          style={{ backgroundImage: `url(${infographic})` }}
                        >
                          
                        </section> */}

                          <ResponsiveServiceImageSection
                              imageWeb={infographic}
                              imageMobile={ServicePageInfographic}
                            />
            {/* <section
                          className="h-[600px]  bg-cover bg-center flex items-center justify-center"
                          style={{ backgroundImage: `url(${whythrive})` }}
                        >
                          
                        </section> */}
            
                             <WhatThriveBrandsOffers
                              imageWeb={whythrive}
                              imageMobile={WhyThriveMobile}
                            />
            {/* <section
                          className="h-[700px]  bg-cover bg-center flex items-center justify-center"
                          style={{ backgroundImage: `url(${pricing})` }}
                        >
                          
                        </section> */}

                        <PartnerWithThriveSection />
      <SettingFooter />
      <ThriveFooter/>
        </div>
    );
}