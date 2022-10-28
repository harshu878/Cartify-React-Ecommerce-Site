import * as React from 'react';

import {
  ChakraProvider,
  Flex,
  Text,
  Link,
  Box,
  Grid,
  HStack,
  StackDivider,
} from '@chakra-ui/react';



import Allroutes from './Routes/Allroutes';

import { Hav } from './components/Hav';
// import NavBar from './components/Navbar';





export default function App() {
  return (
    <ChakraProvider>
 {/* <NavBar/> */}
 <Hav/>
 <Allroutes/>

     
    </ChakraProvider>
  );
}
