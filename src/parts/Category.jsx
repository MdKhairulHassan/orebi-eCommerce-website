import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading';
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

const Category = ({paraOne}) => {
  return (
    <>
    <div className='bg-CategoryBG py-[25px] border-BorderColor border-y'>
        <Container className={'max-w-headerContainer'}>
          <Flex>
          <Flex className={'w-[20%] gap-2 items-center'}>
            <HiMenuAlt2 /><Heading as={'h4'} className={'font-dms text-[14px] text-TextHColor'} text={paraOne}/>
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
    </>
  )
}

export default Category