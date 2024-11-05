import React from 'react'
import Badge from './Badge'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Flex from './Flex';
import Heading from './Heading';
import { FaCodeCompare } from "react-icons/fa6";

const Product = () => {
  return (
    <>
      <Badge badgeName={"New"} className={'absolute top-5 left-5'}/>
      <div className='bg-white p-5 invisible group-hover:visible absolute w-full top-[43%] left-0'>
        <Flex className={'justify-end gap-x-3 items-center pb-2'}>
          <Heading as={'h5'} text={'Add to Wish List'} className={'hover:text-TextHColor hover:font-bold text-TextColor'}/> <FaHeart/>
        </Flex>
        <Flex className={'justify-end gap-x-3 group items-center pb-2'}>
          <Heading as={'h5'} text={'Compare'} className={'hover:text-TextHColor hover:font-bold text-TextColor'}/> <FaCodeCompare/>
        </Flex>
        <Flex className={'justify-end gap-x-3 group items-center'}>
          <Heading as={'h5'} text={'Add to Cart'} className={'hover:text-TextHColor hover:font-bold text-TextColor'}/> <FaShoppingCart/>
        </Flex>
      </div>
    </>
  )
}

export default Product