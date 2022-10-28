import React from 'react';
import { Cartcontext } from '../context/Context';
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
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Cartmenu = () => {
  const {
    state: { cart },
    dispatch,
  } = React.useContext(Cartcontext);

  return (
    <Menu>
      <MenuButton bg="teal.300" as={Button}>
        <Stack direction="row">
          <FaShoppingCart color="black" fontSize={'25px'} />
          <p>{cart.length}</p>
        </Stack>
      </MenuButton>
      <MenuList>
        {cart.length > 0 ? (
          cart.map(x => (
            <Flex minWidth="max-content" alignItems="center" gap="2" p="2">
              <Image
                // boxSize="100px"
                w="50px"
                h="50px"
                borderRadius="full"
                mr="4"
                src={x.image}
              ></Image>
              <VStack alignItems="flex-start">
                <Text>{x.name}</Text>
                <Text>₹ {x.price}</Text>
              </VStack>
              <Spacer />

              <Button
                onClick={() =>
                  dispatch({
                    type: 'remove',
                    payload: x,
                  })
                }
              >
                <DeleteIcon />
              </Button>
            </Flex>
          ))
        ) : (
          <MenuItem>Cart is empty</MenuItem>
        )}
        {cart.length > 0 ? (
          <MenuItem marginTop="3">
            <Button w="100%" colorScheme="teal">
              <Link style={{ width: '100%' }} to="/cart">
                Go to Cart
              </Link>
            </Button>
          </MenuItem>
        ) : null}
      </MenuList>
    </Menu>
  );
};

export default Cartmenu;
