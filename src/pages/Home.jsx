import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import DataContext from './DataContext';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgToSlides = [
    { title: 'Frog Collection', url: '//www.ketnipz.com/cdn/shop/files/frog_collection_banner_2_2048x.gif' },
    { title: 'Back In Stock', url: '//www.ketnipz.com/cdn/shop/files/good_in_mi_hood_2024_restock_banner_3_2048x.png'}
  ]

  const goPrev = () => { 
    setCurrentIndex( currentIndex === 0 ? imgToSlides.length - 1 : currentIndex - 1 );
  }

  const goNext = () => { 
    setCurrentIndex( currentIndex === imgToSlides.length - 1 ? 0 : currentIndex + 1 );
  }

  const product__detail = [ 
    { product__name: 'BLACK HOODIE',  
      product__price: 65,
      product__url: '//www.ketnipz.com/cdn/shop/files/CAFFEINE_APPRECIATION_BLACK_HOODIE_A_720x.png',
      product__url__hover: '//www.ketnipz.com/cdn/shop/files/CAFFEINE_APPRECIATION_BLACK_HOODIE_B_720x.png',
      product__url__others: '//www.ketnipz.com/cdn/shop/files/COFFEE-BLACK-HOODIE-F_720x.jpg?v=1719870298'
    },
    { product__name: 'PINK HOODIE',   
      product__price: 60,
      product__url: '//www.ketnipz.com/cdn/shop/files/DONT_BE_A_PRICK_PINK_HOODIE_A_720x.png',
      product__url__hover: '//www.ketnipz.com/cdn/shop/files/DONT_BE_A_PRICK_PINK_HOODIE_B_720x.png',
      product__url__others: '//www.ketnipz.com/cdn/shop/files/JJ3A1930_720x.jpg'
    },
    { product__name: 'PURPLE HOODIE', 
      product__price: 45,
      product__url: '//www.ketnipz.com/cdn/shop/files/MUSHROOM_LILAC_HOODIE_A_720x.png',
      product__url__hover: '//www.ketnipz.com/cdn/shop/files/MUSHROOM_LILAC_HOODIE_B_720x.png',
      product__url__others: '//www.ketnipz.com/cdn/shop/files/1_3c42e5b4-3e06-48c4-8ac0-6dcfd70917cd_720x.jpg'
    },
    { product__name: 'BLUE HOODIE',   
      product__price: 70,
      product__url: '//www.ketnipz.com/cdn/shop/files/IM_IN_DANGER_BLUE_HOODIE_A_720x.png',
      product__url__hover: '//www.ketnipz.com/cdn/shop/files/IM_IN_DANGER_BLUE_HOODIE_B_720x.png',
      product__url__others: 'https://www.ketnipz.com/cdn/shop/files/JJ3A1933_720x.jpg?v=1719871105'
    },
  ]

  const character__logo = [
    '//www.ketnipz.com/cdn/shop/files/0000_Layer_2_360x.jpg',
    '//www.ketnipz.com/cdn/shop/files/0001_Layer_3_360x.jpg',
    '//www.ketnipz.com/cdn/shop/files/0002_Layer_1_360x.jpg',
  ]

  const { showProduct } = useContext(DataContext);

  const handleClickToProduct = (items) => {
    showProduct(items);
  }

  return (
    <>
      <Navbar />
      <div className='home__arrow__prev home__arrow' onClick={goPrev}>‹</div>
      <div className='home__arrow__next home__arrow' onClick={goNext}>›</div>
      <div className='img__slides'
           style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${imgToSlides[currentIndex].url})`}}></div>

      <section className='home__items__container'>
        <section className='home__items__box__out'>
          {product__detail.map((items, index) => (
            <Link to='/product__detail'
                  onClick={() => handleClickToProduct(items)} 
                  className='home__items__box__in'
                  key={index}>
              <div className='home__img__hover'>
                <img className='home__img-1' src={items.product__url__hover}/>
                <img className='home__img-2' src={items.product__url}/>
              </div> 
              <h6>{items.product__name}</h6>
              <p>${items.product__price.toFixed(2)}</p>
            </Link>
          ))}
        </section>
        <section className="home__character__logo">
        {character__logo.map((charac, index) => (
          <img key={index} src={`${charac}`}/>
        ))}
      </section>
      </section>
      <Footer />
    </>
  )
}

export default Home