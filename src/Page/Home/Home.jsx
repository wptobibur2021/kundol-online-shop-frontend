import React from 'react';
import PageLayout from "../../Components/Frontend/PageLayout/PageLayout";
import Slider from "../../Components/Frontend/Slider/Slider";
import Products from "../../Components/Frontend/Products/Products";
import Reviews from "../../Components/Frontend/Reviews/Reviews";
import Subscribe from "../../Components/Frontend/Subscribe/Subscribe";

const Home = () => {
    return (
        <PageLayout>
            <div className="homePageSections">
                <Slider></Slider>
                <Products></Products>
                <Reviews></Reviews>
                <Subscribe></Subscribe>
            </div>
        </PageLayout>
    );
};

export default Home;