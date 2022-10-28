import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Badge,
  Stack,
  VStack,
  Text,
  Spacer,
  Input
} from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import MobileDrawer from './MobileDrawer';
import aba from '../images/aba.png';
import abc from '../images/cartify-high-resolution-logo.png'


import Cartmenu from './Cartmenu';
import { Cartcontext } from '../context/Context';

  

export const Hav = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const {
    dispatch,
  state,
  productState,
  productDispatch
  } = React.useContext(Cartcontext);
  const { sort, byStock,
    byFastDelivery,
    byRating,
    searchQuery } = productState;

  return (
    <Box
    as="nav"
      bg="bg-surface"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      marginBottom="2"
      p="2"
      
    >
      <HStack  justify="space-between">
        
           <Link to="/">
           <Image src={abc} boxSize='40%' />
              </Link>
             
       
        <Box w="100%">
        <Input   
           placeholder="Search a product..."
           size='lg'
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
                   </Box>
                 

        {isDesktop ? (
          <Flex w="100%" align="center" justify="flex-end">
            <HStack as="nav" spacing="8">
              <Link to="/">
                <h3>Home</h3>
              </Link>
              <Link to="/cart">
                <h3>Cart</h3>
              </Link>
              <Cartmenu />
            </HStack>
            {/* // Call to action items */}
          </Flex>
        ) : (
          <>
          <Spacer />
            <Cartmenu />
            <MobileDrawer />
          </>
        )}
      </HStack>
    </Box>
  );
};

    // <Box
    //   as="nav"
    //   bg="bg-surface"
    //   boxShadow={useColorModeValue('sm', 'sm-dark')}
    //   marginBottom="2"
    // >
    //   <Container
    //     py={{
    //       base: '4',
    //       lg: '5',
    //     }}
    //   >
    //     <HStack spacing="10" justify="space-between">
    //       <Image src={aba} h="50px" />
    //       {isDesktop ? (
    //         <Flex w="100%" px="6" py="5" align="center" justify="space-between">
    //           {/* //Logo */}
    //           {/* <Image src={aba} h="50px" /> */}
    //           {/* // Nav Items */}
    //           <HStack as="nav" spacing="5">
    //             <Link to="/">
    //               <h3 data-testid="home-link">Home</h3>
    //             </Link>
    //             <Link to="/about">
    //               <h3 data-testid="login-link"> about</h3>
    //             </Link>

    //             <Menu>
    //               <MenuButton bg="teal.300" as={Button}>
    //                 <Stack direction="row">
    //                   <FaShoppingCart color="black" fontSize={'25px'} />
    //                   <p>10</p>
    //                 </Stack>
    //               </MenuButton>
    //               <MenuList>
    //                 <MenuItem>Cart is empty</MenuItem>
    //               </MenuList>
    //             </Menu>
    //           </HStack>
    //           {/* // Call to action items */}
    //           <HStack>
    //             <Button>{CTA}</Button>
    //           </HStack>
    //         </Flex>
    //       ) : (
    //         <MobileDrawer />
    //       )}
    //     </HStack>
    //   </Container>
    // </Box>;