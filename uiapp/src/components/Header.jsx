import React from 'react';
import {
    Drawer,
    DrawerBody,
   
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {BiMenuAltLeft} from "react-icons/bi";


const Header = () => {
    const {isOpen, onClose, onOpen} = useDisclosure();
  return (
    <>
    
    <Button zIndex={'100'}onClick={onOpen} pos={'fixed'} top={'4'} left={'4'} p={'0'} h={'10'} w={'10'} borderRadius={"full"} backgroundColor={'#D2386C'}><BiMenuAltLeft size={'20'} color='white'/></Button>
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
    <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClose={onClose} />
          <DrawerHeader>Video Hub</DrawerHeader>

          <DrawerBody >
            <VStack alignItems={'flex-start'}>
                <Button color={'#D2386C'} variant={'ghost'} onClick={onClose}>
                    <Link to={'/'}> Home</Link>
                </Button>
                <Button color={'#D2386C'} variant={'ghost'} onClick={onClose}>
                    <Link to={'/Videos'}> Videos</Link>
                </Button>   
                <Button color={'#D2386C'} variant={'ghost'} onClick={onClose}>
                    <Link to={'/videos?category=free'}> Free Videos</Link>
                </Button>
                <Button color={'#D2386C'} variant={'ghost'} onClick={onClose}>
                    <Link to={'/upload'}> Upload Video</Link>
                </Button>
            

            </VStack>
            <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-around'}>
            <Button backgroundColor={'#D2386C'} color={'white'} onClick={onClose}>
                <Link to={'/login'}> Log In</Link>
            </Button>
            
            <Button color={'#D2386C'} variant={"outline"} onClick={onClose}>
                <Link to={'/signup'}> Sign Up</Link>
            </Button>
            </HStack>
          </DrawerBody>

         
        </DrawerContent>

    </Drawer>
    </>
    
  )
}

export default Header