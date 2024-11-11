import './App.css'
import Container from './components/Container'
import Image from './components/Image'
import Logo from './assets/Logo.png'
import ad_1 from './assets/Ad_1.jpg'
import ad_2 from './assets/Ad_2.png'
import ad_3 from './assets/Ad_3.jpg'
import Menu from './components/Menu'
import Flex from './components/Flex'
import { HiMenuAlt2 } from "react-icons/hi";
import { FaSearch, FaUser, FaShoppingCart, FaUndoAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaVanShuttle } from "react-icons/fa6";
import Heading from './components/Heading'
import Anchor from './components/Anchor'
import Product from './components/Product'
import productimg1 from './assets/productimg1.jpg'
import productimg2 from './assets/productimg2.png'
import productimg3 from './assets/productimg3.png'
import productimg4 from './assets/productimg4.png'
import productBimgone from './assets/productBimgone.png'
import productBimgtwo from './assets/productBimgtwo.png'
import productBimgthree from './assets/productBimgthree.png'
import productBimgfour from './assets/productBimgfour.png'
import productSimgone from './assets/productSimgone.png'
import productSimgtwo from './assets/productSimgtwo.png'
import productSimgthree from './assets/productSimgthree.png'
import productSimgfour from './assets/productSimgfour.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from './components/PrevArrow'
import NextArrow from './components/NextArrow'
import Footertexts from './components/Footertexts'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow/>,
    // arrows: true,
  };

  return (
    <>
      {/* Header Logo with Menu Start */}
      <div className='py-[30px]'>
        <Container className={'max-w-headerContainer'}>
          <Flex>
            <div className='w-[30%]'>
            <Image imgSrc={Logo} imgAlt={Logo}/>
          </div>
          <Flex className='w-[70%] pl-8'>
            <Menu menuName={'Home'}/>
            <Menu menuName={'Shop'}/>
            <Menu menuName={'About'}/>
            <Menu menuName={'Contacts'}/>
            <Menu menuName={'Journal'}/>
          </Flex>
          </Flex>
        </Container>
      </div>
      {/* Header Logo with Menu End */}

      {/* Category Part Start */}
      <div className='bg-CategoryBG py-[25px] border-BorderColor border-y'>
        <Container className={'max-w-headerContainer'}>
          <Flex>
          <Flex className={'w-[20%] gap-2 items-center'}>
            <HiMenuAlt2 className=''/><Heading as={'h4'} className={'font-dms text-[14px] text-TextHColor'} text={'Shop by Category'}/>
            </Flex>
            <div className='w-[60%] relative'>
              <input className='w-full p-3' type="text" placeholder='Search Products'/><FaSearch  className='absolute top-[50%] translate-y-[-50%] right-4'/>
            </div>
            <Flex className={'w-[20%] items-center justify-end'}>
              <FaUser className='mr-1'/>
              <TiArrowSortedDown className='mr-9' />
              <FaShoppingCart />
            </Flex>
        </Flex>
        </Container>
      </div>
      {/* Category Part End */}

      {/* Banner Part Start */}
      <div className='bg-BannerBG'>
        <Container className={'max-w-headerContainer'}>
          <Anchor href={'#'} target={'_blank'}>
          <div className="bg-banner bg-center bg-cover bg-no-repeat py-[223px]"></div>
          </Anchor>
        </Container>
      </div>
      {/* Banner Part End */}

      {/* Information Part Start */}
      <div className='py-[25px] mb-[70px] border-BorderInfoColor border-y'>
        <Container className={'max-w-headerContainer'}>
          <Flex className={"justify-between"}>
          <Flex className={'items-center gap-2'}>
            <PiNumberTwoBold className='text-[25px]'/> <Heading as={'h5'} text={'Two years warranty'} className={'font-dms text-[16px] text-InformationColor '}/>
          </Flex>
          <Flex className={'items-center gap-4'}>
            <FaVanShuttle className='text-[25px]'/> <Heading as={'h5'} text={'Free shipping'} className={'font-dms text-[16px] text-InformationColor '}/>
          </Flex>
          <Flex className={'items-center gap-4'}>
            <FaUndoAlt className='text-[25px]'/> <Heading as={'h5'} text={'Return policy in 30 days'} className={'font-dms text-[16px] text-InformationColor '}/>
          </Flex>
        </Flex>
        </Container>
      </div>
      {/* Information Part End */}

      {/* Ads Part Start */}
      <div className='py-[70px]'>
        <Container className={'max-w-headerContainer'}>
          <Flex className={'justify-between'}>
            <div className='w-[49%]'>
            <img src={ad_1} alt={'ad_1'} />
            </div>
            <div className='w-[49%]'>
              <img src={ad_2} alt={'ad_2'} />
              <img src={ad_3} alt={'ad_3'} className='mt-[31px]' />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Ads Part End */}

      {/* Product Slider Part Start */}
      <div className='py-[70px]'>
        <Container className={'max-w-headerContainer'}>
          <Heading as={'h3'} className={'font-bold font-dms text-TextHColor text-[39px] pb-[58px] pl-2'} text={'New Arrivals'} />
          <Slider {...settings}>
            <div className='w-[24%] bg-white relative group px-2'>
              <Product
                imgSrc={productimg1}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group px-2'>
              <Product
                imgSrc={productimg2}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group px-2'>
              <Product
                imgSrc={productimg3}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group px-2'>
              <Product
                imgSrc={productimg4}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
         </Slider>
        </Container>
      </div>
      {/* Product Slider Part End */}

      {/* Product Bestsellers Part Start */}
      <div className='py-[70px]'>
        <Container className={'max-w-headerContainer'}>
          <Heading as={'h3'} className={'font-bold font-dms text-TextHColor text-[39px] pb-[58px] pl-2'} text={'Our Bestsellers'} />
       <Flex className={'justify-between'}>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productBimgone}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productBimgtwo}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productBimgthree}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productBimgfour}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
         </Flex>
      </Container>
      </div>
      {/* Product Bestsellers Part End */}

      {/* Ads Part 2 Banner Start */}
      <div className='py-[70px]'>
        <Container className={'max-w-headerContainer'}>
          <Anchor href={'#'} target={'_blank'}>
          <div className="bg-Adspart2 bg-center bg-cover bg-no-repeat py-[140px]"></div>
          </Anchor>
        </Container>
      </div>
      {/* Ads Part 2 Banner End */}

       {/* Product Special Offers Part Start */}
      <div className='pt-[70px] pb-[140px]'>
        <Container className={'max-w-headerContainer'}>
          <Heading as={'h3'} className={'font-bold font-dms text-TextHColor text-[39px] pb-[58px] pl-2'} text={'Special Offers'} />
       <Flex className={'justify-between'}>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productSimgone}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productSimgtwo}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productSimgthree}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productSimgfour}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
         </Flex>
      </Container>
      </div>
      {/* Product Special Offers Part End */}

       {/* Footer Part Start */}
      <div className='bg-CategoryBG py-[60px]'>
        <Container className={'max-w-headerContainer'}>
          <Flex className={'justify-between'}>
            <div className='w-[130px]'>
              <Footertexts
                Fhead={'MENU'}
                Pone={'Home'}
                Ptwo={'Shop'}
                Pthree={'About'}
                Pfour={'Contact'}
                Pfive={'Journal'}
              />
            </div>
            <div className='w-[130px]'>
              <Footertexts
                Fhead={'SHOP'}
                Pone={'Category 1'}
                Ptwo={'Category 2'}
                Pthree={'Category 3'}
                Pfour={'Category 4'}
                Pfive={'Category 5'}
              />
            </div>
            <div className='w-[130px]'>
             <Footertexts
                Fhead={'HELP'}
                Pone={'Privacy Policy'}
                Ptwo={'Terms & Conditions'}
                Pthree={'Special E-shop'}
                Pfour={'Shipping'}
                Pfive={'Secure Payments'}
              />
            </div>
            <div className='w-[260px]'>
              <Footertexts
                Fhead={'(052) 611-5711 company@domain.com'}
                Pone={'575 Crescent Ave. Quakertown, PA 18951'}
              />
            </div>
            <div className='w-[200px]'>
              <Image imgSrc={Logo} imgAlt={Logo}/>
            </div>
          </Flex>
          <Flex className={'items-center justify-between pt-[70px]'}>
            <Flex className='w-[95px] justify-between pt-[70px]'>
              <FaFacebookF /> <FaLinkedinIn /> <FaInstagram />
            </Flex>
            <div className='w-[390px]'>
              <Footertexts
                Psix={'2020 Orebi Minimal eCommerce Figma Template by Adveits'}
              />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Footer Part End */}
      
    </>
  )
}

export default App
