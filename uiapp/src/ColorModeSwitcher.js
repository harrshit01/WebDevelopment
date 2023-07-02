import React from 'react';
import { useColorMode,useColorModeValue, IconButton } from '@chakra-ui/react';
import {FaMoon,FaSun} from "react-icons/fa";


 const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
  <IconButton 
  zIndex={'99'}
  pos="fixed"
  right={'4'}
  top={'4'}

  variant="ghost"
 
  color="current"
  aria-label={`Switch to ${text} mode`}
  onClick={toggleColorMode}
  icon={<SwitchIcon/>}
  {...props}

  />
  )
};
export default ColorModeSwitcher;
