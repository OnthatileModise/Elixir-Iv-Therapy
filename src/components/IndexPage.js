import React from "react";
import HomeSection from "./sections/HomeSection";
import {ServicesSection} from "./sections/ServicesSection";
import {ContactUsSection} from "./sections/ContactUsSection";

export const IndexPage = () => {

    return(
        <>
            <HomeSection/>
            {ServicesSection()}
            {ContactUsSection()}
        </>
    )
}