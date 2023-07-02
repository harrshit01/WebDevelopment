import React from 'react';
import {Container, Input, Heading,Button, VStack, Text, Avatar} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Signup = () => {
  return (
    <Container maxW={'xl'} h={'100vh'} px={'10'}>
    <form action="">
    <VStack alignItems={'stretch'} width={['full','90']} m={'auto'} my={'16'} >
        <Heading size={'lg'} >Video Hub</Heading>
        <Avatar boxSize={"32"} alignSelf={'center'}></Avatar>
        
            <Input my={'2'} focusBorderColor='#D2386C' type='text' required placeholder='Name'/>
            <Input my={'2'} focusBorderColor='#D2386C' type='email' required placeholder='Email'/>

            <Input my={'2'} focusBorderColor='#D2386C' type='password' required placeholder='Password'/>
            
            <Button my={'2'} variant={'solid'} type='submit' bgColor={'#D2386C'} color={'white'}>Sign Up</Button>
            
            <Text my={'2'} alignSelf={'flex-end'}>Already a User? {" "}
            <Button variant={'link'} color={'#D2386C'}>
                <Link to={'/login'}>Log In</Link>
            </Button>
            </Text>

    </VStack>
    </form>
</Container>
  )
}

export default Signup