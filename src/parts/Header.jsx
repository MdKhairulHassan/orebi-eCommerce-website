import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Menu from '../components/Menu'

const Header = ({imgSrc, imgAlt, menuone, menutwo, menuthree, menufour }) => {
  return (
    <>
      {/* Header Logo with Menu Start */}
      <div className='py-[30px]'>
        <Container className={'max-w-headerContainer'}>
          <Flex>
            <div className='w-[30%]'>
            <Image imgSrc={imgSrc} imgAlt={imgAlt}/>
          </div>
          <Flex className='w-[70%] pl-8'>
            <Menu menuName={menuone}/>
            <Menu menuName={menutwo}/>
            <Menu menuName={menuthree}/>
            <Menu menuName={menufour}/>
          </Flex>
          </Flex>
        </Container>
      </div>
      {/* Header Logo with Menu End */}
    </>
  )
}

export default Header