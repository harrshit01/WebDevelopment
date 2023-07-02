// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Loader from './Loader';
// import ErrorComponent from './ErrorComponent';

// import { Container, Image, Text,VStack, HStack,  Heading } from '@chakra-ui/react';


// const Exchanges = () => {
//   const [error, setError]= useState(false);
//   const [loading, setLoading] =useState(true);
//   const [exchanges , setExchanges]= useState([]);
//   useEffect(()=>{
//     const fetchapi = async()=>{
//     try{
//           const {data} = await axios.get(`https://api.coingecko.com/api/v3/exchanges?per_page=200'`);    
//           console.log(data);
//           setExchanges(data);
//           setLoading(false);
//           }
//     catch(error){
//     setError(true);
//     setLoading(false);
//     }

//     };
//     fetchapi();   
//   },[]);

// if (error)
// return <ErrorComponent message={"Error While Fetching Exchanges"} />;

//   return (
//     <Container maxW={'container.xl'}>
//       {
//         loading ? (<Loader/> ) : (
//           <>
//             <HStack wrap={'wrap'}>
//             {exchanges.map((i)=>(
//               <ExchangeCard 
//               key={i.id}
//               name={i.name}
//               url={i.url}
//               rank={i.trust_score_rank}
//               image={i.image} />
//             ))}
//             </HStack>        
//           </>
//         )
//       }
//     </Container>
//   )
// }

// const ExchangeCard =({name, image,rank, url})=>(
  
//     <a href={url} target='blank'>
//       <VStack w={'52'} alignItems={'center'} 
//       shadow={'xl'} p={'8'} borderRadius={'lg'} 
//       transform={'all 0.3s'} m={'4'} 
//       css={{
//         "&:hover":{
//           transform:"scale(1.1)"
//         }
//       }}
//       >
//       <Image src={image} w={'10'} h={'10'} objectFit={'contain'}></Image>
//       <Heading >{rank}</Heading>
//       <Text>{name}</Text>
//       </VStack>

//     </a>
  
// );
// export default Exchanges;


import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
 

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/exchanges?per_page=100`);
        setExchanges(data);
       
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error)
    return <ErrorComponent message={"Error While Fetching Exchanges"} />;

  return (
    <Container maxW={"container.lg"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack
    bgColor={"blackAlpha.20"}
      w={"40"}
      shadow={"md"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchanges;