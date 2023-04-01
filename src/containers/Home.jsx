import React, { useEffect, useRef } from 'react';
import Item from '../components/Common/Item';
import { fetchItems } from '../reducks/items/operations';
import { getItems } from '../reducks/items/selectors';
import { useDispatch, useSelector } from 'react-redux';
// import Footer from './components/Common/Footer.jsx';
import PageFooter from './PageFooter';
import CustomCategoryButtons from './Grid';
import SupportFms from './SupportFms.jsx'
import MainImage from '../assets/img/sale_offer.png';
import { fetchCarts } from '../reducks/carts/operations';
import Carousel from './Car';
import Grid from './Grid.jsx';
import FImg from '../assets/img/7.png';
import CImg1 from '../assets/img/clg_img1.png';
import CImg2 from '../assets/img/clg_img2.png';
import CImg3 from '../assets/img/clg_img3.png';
import NewsLetter from './SignLetter.jsx';

const Home = ({ showFooter, subtotal }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const items = getItems(selector);

    const itemRef = useRef(null);

    useEffect(() => {
        dispatch(fetchItems());
        if (localStorage.getItem('LOGIN_USER_KEY')) {
            dispatch(fetchCarts());
            console.log(items);
        }
    }, []);

    function handleShopNowClick() {
        itemRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <section class="main-image">
                <img src={MainImage} alt="main-img" />
                <div className="shop-btn">
                    <button className='shop-now' onClick={handleShopNowClick}>Shop Now</button>
                </div>
            </section>
            
            <Carousel />
        
            <CustomCategoryButtons handleShopNowClick={handleShopNowClick} />

            <div className="product-heading">
                <h2 className='product-list'>Product-List</h2>
            </div>
            
            <section className="item-container" ref={itemRef}>
                <div className="item-grid">
                    {items &&
                        items.map(item => (
                            <div className="item">
                                <Item key={item.id} item={item} />
                            </div>
                        ))}
                </div>
            </section>

            <SupportFms handleShopNowClick={handleShopNowClick} />

            <section className="info-img">
                <div className="foot-img">
                    <img src={FImg} alt="" className="f-img" />
                </div>
            </section>

            {/* {showFooter && <Footer price={subtotal} />} */}
            <PageFooter showFooter={showFooter} subtotal={subtotal} />


            <section className="new-latest">
                <p className="n-l">New Latest</p>
                <div className="new-latest-img">
                    <img src={CImg1} alt="" className="c-img" />
                    <img src={CImg2} alt="" className="c-img" />
                    <img src={CImg3} alt="" className="c-img" />
                </div>
            </section>

            <NewsLetter />
        </>
    );
};

export default Home;