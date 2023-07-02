import React from 'react';
import {Box, Stack, VStack ,HStack, Heading, Text ,Button, Input} from "@chakra-ui/react";
import {AiOutlineSend, AiOutlineYoutube, AiOutlineInstagram, AiOutlineGithub} from "react-icons/ai";

const Footer = () => {
  return (
    <Box w={'full'} minH={'40'} bgColor={'black'} p={"16"}>
    <Stack direction={['column','row']} alignItems={'center'} >
        <VStack w={'full'}  alignItems={"stretch"}>
            <Heading fontSize={'2xl'} color={'white'} textAlign={['center', 'left']}>Subscribe to Get Updates</Heading>
            <HStack py={'2'} borderBottom={'2px solid white'} >
                <Input  type={'text'} outline={'none'} border={'none'} focusBorderColor="none" placeholder='Enter E-mail here'/>
                <Button color={"#D2386C"} variant={'ghost'}>
                <AiOutlineSend size={20}/>
                </Button>
            </HStack>

        </VStack >
        <VStack w={'full'} alignItems={'center'} borderLeft={["none", "1px solid white"]} borderRight={["none", "1px solid white"]}>
        <Heading fontSize={'2xl'} color={'white'}>Video Hub</Heading>
        <Text fontSize={'xl'} color={'whiteAlpha.700'}>All Rights Reserved</Text>


            
        </VStack>
    

        <VStack w={'full'} alignItems={'center'}>
            <Heading fontSize={'2xl'} color={'white'}>Social Media</Heading>
            <HStack>
                <Button variant={'ghost'} >
                    <a  href="https://www.youtube.com"><AiOutlineYoutube size={20 } color={"#D2386C"}  /></a>
 
                </Button>
                <Button variant={'ghost'}  >
                    <a href="https://www.instagram.com"><AiOutlineInstagram size={20} color={"#D2386C"} /></a>
                </Button>
                <Button  variant={'ghost'} >
                    <a href="https://www.github.com"><AiOutlineGithub size={20} color={"#D2386C"} /></a>
                </Button>
            </HStack>
            
        </VStack>
    
    

    </Stack>
    </Box>
  )
}

export default Footer