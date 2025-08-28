import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from './Cover';
import Services from './Services';
import Client from './Client';
import ContactForm from './ContactForm';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Jerin's Parlour|Home</title>
            </Helmet>
            <Cover/>
            <Services/>
             <Client/>
             <Testimonials></Testimonials>
             <ContactForm></ContactForm>
        </div>
    );
};

export default Home;