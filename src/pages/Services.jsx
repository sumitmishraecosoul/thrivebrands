import React from "react";
import WorkSlider from "../components/WorkSlider";
import HomeFooter from "../components/Footer";
import mainbanner from '../assets/images/service/mainbanner.png';
import infographic from '../assets/images/service/infographic.png';
import whythrive from '../assets/images/service/whythrive.png';
import app from '../assets/images/service/app.png';
import pricing from '../assets/images/service/pricing.png';
import OurServicesSlider from "../components/OurService";
import SettingFooter from "../components/setting_footer";
import ThriveFooter from "../layouts/ThriveFooter";

export default function Services() {
    return (
        <div >
           <section
                          className="h-[600px] bg-cover bg-center flex items-center justify-center"
                          style={{ backgroundImage: `url(${mainbanner})` }}
                        >
                          
                        </section>

            <section
                          className="h-[700px]  bg-cover bg-center flex items-center justify-center"
                          style={{ backgroundImage: `url(${app})` }}
                        >
                          
                        </section>

            <OurServicesSlider />
            <section
                          className="h-[800px] bg-cover bg-center flex items-center justify-center"
                          style={{ backgroundImage: `url(${infographic})` }}
                        >
                          
                        </section>
            <section
                          className="h-[600px]  bg-cover bg-center flex items-center justify-center"
                          style={{ backgroundImage: `url(${whythrive})` }}
                        >
                          
                        </section>
            
            <section
                          className="h-[700px]  bg-cover bg-center flex items-center justify-center"
                          style={{ backgroundImage: `url(${pricing})` }}
                        >
                          
                        </section>
      <SettingFooter />
      <ThriveFooter/>
        </div>
    );
}