import React from 'react';
import {Container, Input, Heading,Button, VStack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <Container maxW={'xl'} h={'100vh'} px={'10'}>
        <form action="">
        <VStack alignItems={'stretch'} width={['full','90']} m={'auto'} my={'16'} >
            <Heading size={'lg'} mb={'4'}>Welcome Back</Heading>
            
                <Input my={'2'} focusBorderColor='#D2386C' type='text' required placeholder='Email'/>

                <Input my={'2'} focusBorderColor='#D2386C' type='password' required placeholder='Password'/>
                <Button my={'2'} alignSelf={'flex-end'} variant={'link'} color={'#D2386C'}>
                <Link to={"/forgetpassword"}>Forget password?</Link>
                </Button>
                <Button my={'2'} variant={'solid'} type='submit' bgColor={'#D2386C'} color={'white'}>Log in</Button>
                
                <Text my={'2'} alignSelf={'flex-end'}>New User? {" "}
                <Button variant={'link'} color={'#D2386C'}>
                    <Link to={'/signup'}>Sign Up</Link>
                </Button>
                </Text>

        </VStack>
        </form>
    </Container>
  )
}

export default Login