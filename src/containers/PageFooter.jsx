import React from 'react';
import Footer2 from '../components/Common/Footer';

const PageFooter = ({ showFooter, subtotal }) => {
    return (
        <>
            {showFooter && <Footer2 price={subtotal} />}
        </>
    );
};

export default PageFooter;
