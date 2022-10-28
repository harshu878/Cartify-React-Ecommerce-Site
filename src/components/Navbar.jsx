import { Image, Flex, Button, HStack, chakra } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import aba from '../images/aba.png'
import React from 'react';
import MobileDrawer from './MobileDrawer';
const CTA = 'Get Started';
export default function NavBar() {
  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        {/* //Logo */}
        <Image src={aba} h="50px" />
        {/* // Nav Items */}
        <HStack as="nav" spacing="5">
          <Link to="/">
            <h3 data-testid="home-link">Home</h3>
          </Link>
          <Link to="/about">
            <h3 data-testid="login-link"> about</h3>
          </Link>
        </HStack>
        {/* // Call to action items */}
        <HStack>
          <Button>{CTA}</Button>
          <MobileDrawer/>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
