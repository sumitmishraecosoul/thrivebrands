import mainbanner from '../assets/images/about/mainbanner.png';
import serviceoffered from '../assets/images/about/servicesoffered.png';
import whythrive from '../assets/images/about/Whythrive.png';
import Workingwiththrive from '../assets/images/about/Workingwiththrive.png';
import WorkingwiththriveMobile from '../assets/images/aboutus/Workingwiththrivemobile.png';
// import ThriveVideo from '../assets/images/about/ThriveVideo.mp4';
import ThriveVideo from '/public/videos/ThriveVideo.mp4';
import React from 'react';
import WhoWeAreSection from '../components/WhoWeAreSection';
import WorkSlider from '../components/WorkSlider';
import Testimonials from '../components/Testimonials';
import HomeFooter from '../components/Footer';
import OurMission from '../components/OurMission';
import OurMissionContent from '../components/OurMission';
import AboutPreview from '../components/AboutPreview';
import AboutPreviewWithoutButton from '../components/AboutPreviewWithoutButton';
import SettingFooter from '../components/setting_footer';
import ThriveFooter from '../layouts/ThriveFooter';
import AboutSection from '../components/AboutSection';
import WhyThrive from '../components/WhyThrive';
import DifferentServices from '../components/DifferentServices';
import ResponsiveImageSection from '../components/ResponsiveHeroSection';
import WorkingwiththriveMobile2 from '../assets/images/aboutus/Workingwiththrivemobile2.png';
import WorkingwiththriveWeb from '../assets/images/about/Workingwiththrive.png';

const About = () => {
    return (
        <>
        {/* <section
                className="h-[600px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${mainbanner})` }}
              > */}
               {/* <Link
  to="/contact"
  className="absolute left-[180px] bottom-[220px] min-w-[220px] text-center bg-[#A28750] text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-[#8e7445] hover:scale-105 transform transition-all duration-300 pointer-events-auto"
>
  Thrive with Us →
</Link> */}
              {/* </section> */}

              <AboutSection />

              <div className=" flex justify-center items-center py-10">
  <video
    className="w-full max-w-6xl rounded-lg shadow-lg"
    controls
    autoPlay
    muted
    loop
  >
     <source src="/videos/ThriveVideo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
 {/* <section
                className="h-[600px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${whythrive})` }}
              >
              
              </section> */}

              <WhyThrive />

                <AboutPreviewWithoutButton/>

               {/* <section
                className="h-[1400px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${serviceoffered})` }}
              >
              
              </section> */}
              <DifferentServices />
               {/* <section
                className="h-[800px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${Workingwiththrive})` }}
              >
              
              </section> */}

             <ResponsiveImageSection
      headingText="What Working With Thrive Looks Like?"
      imageWeb={WorkingwiththriveWeb}
      imageMobile={WorkingwiththriveMobile2}
    />




     <SettingFooter />
           <ThriveFooter/>

              </>
        
    );
};

export default About;