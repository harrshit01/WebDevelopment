import { Container, Button,Input ,VStack, HStack} from '@chakra-ui/react';
import React from 'react';
import {AiOutlineCloudUpload} from "react-icons/ai"

const Upload = () => {
  return (
    <Container maxW={'xl'} h={'100vh'}>
             <VStack justifyContent={'center'} h={'full'} >

        
            <AiOutlineCloudUpload size={'10vmax'} color='#D2368C'/>
            <form>
                <HStack>

                <Input
                 type='file'
                 css={{
                    '&::file-selector-button':{
                        outline:"none",
                        border: 'none',
                        width: 'calc(100% + 36px)',
                        height: '100%',
                        marginLeft: '-18px',
                        color: '#D2368C',
                        backgroundColor: 'white',
                        cursor: 'pointer',

                    }
                 }}
                ></Input>
                <Button bgColor={'#D2368C'} color={'white'}>Upload</Button>
                </HStack>
            </form>
        </VStack>

    </Container>
  )
}

export default Upload