import { Container, HStack, VStack ,Text, Heading, Image, Button, RadioGroup, Radio} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
// import {AiFillFastBackward,AiFillFastForward} from"react-icons/ai";


const Coins = () => {
  const [coins, setCoins] =useState([]);
  const [loading , setLoading] =useState(true);
  const [error, setError] = useState(false);
  const [page, setPage]= useState(1);
  const [currency, setCurrency]= useState("inr");

  const currencySymbol =
  currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns = new Array(132).fill(1);
  
  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  useEffect(()=>{
    const fetchCoins = async () => {
      try{
        const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}`);
        

        setCoins(data);
        setLoading(false);
      }catch(error){
        setError(error);
        setLoading(false);

      };
    }
    fetchCoins();

  },[currency,page]);

  if (error)
  return <ErrorComponent message={"Error While Fetching Coins"} />;



 
  return (
     <Container maxW={'container.lg'}>
      {
        loading ? (<Loader/>) : (
          <>
             <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {
              coins.map((i)=>(
                <CoinsCard
                key={i.id}
                img={i.image}
                symbol={i.symbol}
                name={i.name}
                  price={i.current_price}
                  currencySymbol={currencySymbol}
                  id={i.id}
                />
              ))
            }
          </HStack>
          <HStack w={'full'} overflowX={'auto'}>
            {btns.map((item ,index)=>(
              <Button
              key={index}
              bgColor={"blackAlpha.800"}
              color={'white'}
              variant={'solid'}
              onClick={()=> changePage(index+1)}
              >{index+1}</Button>
            ))}
          </HStack>



          </>
          
        )
        
      }

     </Container>
  )
}
const CoinsCard= ({ id, name, img, symbol, price, currencySymbol = "₹" })=>(
  <Link to={`/coin/${id}`}>

 
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
      {symbol}
    </Heading>
    <Text noOfLines={1}>{ price? `${currencySymbol} ${price}` : "NA" }</Text>
    <Text size={"md"} noOfLines={1}>
      {name}
    </Text>
    


  </VStack>
  </Link>
);


export default Coins;




// <HStack w={'full'} justifyContent={'center'} mt={'4'}>
// <AiFillFastBackward fontSize={"30px"} onClick={()=>{if(page>=2){
//   setLoading(true);
//   setPage(page-1);
// }
//   }}/>

// <Button bgColor={'blackAlpha.600'} color={'white'}>{page}</Button>
// <AiFillFastForward fontSize={"30px"}  onClick={()=>{
//   setLoading(true);
//   setPage(page+1);

//   }}/>
// </HStack> */