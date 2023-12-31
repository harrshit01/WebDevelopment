
import { Container, HStack, VStack ,Text, Image,Progress, Button, RadioGroup, Radio, Box ,Stat, StatArrow, StatHelpText,StatLabel, StatNumber, Badge} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
import Chart from './Chart';

const CoinDetails = () => {
  const params = useParams();
  const [coin, setCoin] =useState([]);
  const [loading , setLoading] =useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency]= useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);
  const currencySymbol =
  currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const btns =['24h','7d','15d','30d','60d','180d','1y','max'];

  const switchChartstats=(key)=>{
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
          setDays("7d");
          setLoading(true);
          break;
      case "15d":
          setDays("15d");
          setLoading(true);
          break;
      case "30d":
          setDays("30d");
          setLoading(true);
          break;
      case "60d":
          setDays("60d");
          setLoading(true);
          break;
      case "180":
          setDays("180d");
          setLoading(true);
          break;
      case "1y":
          setDays("365d");
          setLoading(true);
          break;
      case "max":
          setDays("max");
          setLoading(true);
          break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  }

  useEffect(()=>{
    const fetchCoin = async()=>{
      try{
        const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`);
        const {data:chartdata} = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
        // console.log(chartdata.prices);
        setChartArray(chartdata.prices);
        setCoin(data);
        setLoading(false);
      } catch(error){
        console.log(error);
        setError(error);

      }
    }
    fetchCoin();

  },[params.id, currency, days]);
  
  if (error) return <ErrorComponent message={"Error While Fetching Coin"} />;

  return (

    <Container maxW={"container.lg"}>
      {loading? (<Loader/>):(
        <>
        <Box w={"full"} borderWidth={"2px"} h={"auto"} pl={'4'} >
          <Chart arr={chartArray} currency={currencySymbol} days={days}/>
        </Box>
        <HStack p={'4'}overflowX={'auto'}>{btns.map((i)=>(
          <Button onClick={()=>switchChartstats(i)} mx={'2'} key={i}>{i}</Button>

        ))}</HStack>
        <RadioGroup value={currency} onChange={setCurrency} p={"4"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>
        <VStack spacing={"4"} w={'full'} alignItems={"flex-start"} p={'4'}>
        

          <Text alignSelf={'center'}>Last updated on : {Date(coin.market_data.last_updated).split("G")[0]}</Text>
          <Image src={coin.image.large} w={'16'} h={'16'} objectFit={'contain'}></Image>
          <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coin.market_data.current_price[currency]}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>
            <Badge
              fontSize={"2xl"}
              bgColor={"blackAlpha.800"}
              color={"white"}
            >{`#${coin.market_cap_rank}`}</Badge>

            <CustomBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
            />
            <Box w={'full'} p={'4'}>
              <Item title={"Max Supply"} value={coin.market_data.max_supply ? coin.market_data.max_supply: `NA`}/>
              <Item
                title={"Circulating Supply"}
                value={coin.market_data.circulating_supply}
              />
              <Item
                title={"Market Cap"}
                value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
              />
              <Item
                title={"All Time Low"}
                value={`${currencySymbol}${coin.market_data.atl[currency]}`}
              />
              <Item
                title={"All Time High"}
                value={`${currencySymbol}${coin.market_data.ath[currency]}`}
              />
            </Box>
        </VStack>
        </>
      )}
    </Container>
    
  )
}
const Item =({title,value})=>(
  <HStack w={'full'} justifyContent={'space-between'}>
    <Text fontFamily={"bebas neue"} letterSpacing={'wider'}>{title}</Text>
    <Text>{value}</Text>

  </HStack>
)

const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
);

export default CoinDetails