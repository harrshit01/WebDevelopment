import React from 'react';
import {Link} from "react-router-dom";
import {HStack, Button, Heading} from "@chakra-ui/react";


const Header = () => {
  return (
    <HStack h={'16'} px={'4'} shadow={'base'} alignItems={'center'} bgColor={'black'}>
        <Heading fontSize={'lg'} color={'whiteAlpha.800'} pr={'4'}>Crypto.app</Heading>
        

        <Button variant={'unstyled'} color={'white'} px={'2'}>
            <Link to={"/"}>Home</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} px={'2'}>
            <Link to={"/coins"}>Coins</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'}px={'2'}>
            <Link to={"/exchanges"}>Exchanges</Link>
        </Button>


    </HStack>
  )
}

export default Header