import React from 'react';
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const PageLayout = ({children}) => {
    return (
        <div className="mainSectionContainer">
            <div className="mainSections">
                <Navigation></Navigation>
                    {children}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default PageLayout;