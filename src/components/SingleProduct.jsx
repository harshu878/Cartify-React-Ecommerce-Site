import React, { useContext } from 'react';
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import Rating from './Rating';
import { Cartcontext } from '../context/Context';

function SingleProduct({ prod }) {
  //  fastDelivery: false;
  //  id: '12737e3a-752e-42ab-a2d6-03c8e266ab62';
  //  image: 'https://loremflickr.com/640/480/fashion';
  //  inStock: 3;
  //  name: 'Refined Rubber Keyboard';
  //  price: '258.00';
  //  ratings: 5;
  const {
    state: { cart },
    dispatch,
  } = useContext(Cartcontext);
  const { image, name, price, ratings, inStock, fastDelivery } = prod;
  let fd = '';
  if (fastDelivery) {
    fd = 'Fast delivery available';
  } else {
    fd = '4 days delivery';
  }

  return (
    <Flex
      maxW="250"
      borderRadius="8"
      boxShadow="lg"
      backgroundColor="#fff"
      textAlign="center"
      direction="column"
    >
      <Image
        src={image}
        alt="card-img"
        objectFit="cover"
        borderRadius="5"
      ></Image>
      <Box marginTop="0.8em" marginBottom="0.8em" padding="4">
        <Text fontSize="1em" fontWeight="600" marginBottom="0.5em">
          {name}
        </Text>
        <Text fontSize="0.8em">₹ {price}</Text>
        <Text fontSize="0.8em" color="#737373" marginBottom="3">
          {fd}
        </Text>

        <HStack spacing="1" w="10%" margin="auto" justifyContent="center">
          <Rating rating={ratings} />
        </HStack>
      </Box>
      <Spacer />
      <Box  padding="3">
        {cart.some(p => p.id === prod.id) ? (
          <Button
            marginTop="3"
            w="100%"
            colorScheme="red"
            onClick={() =>
              dispatch({
                type: 'remove',
                payload: prod,
              })
            }
          >
            Remove from cart
          </Button>
        ) : (
          <Button
            marginTop="3"
            w="100%"
            disabled={inStock == 0}
            colorScheme="teal"
            onClick={() =>
              dispatch({
                type: 'add',
                payload: prod,
              })
            }
          >
            {inStock == 0 ? 'Out of stock' : 'Add to cart'}
          </Button>
        )}
      </Box>
    </Flex>
  );
}

export default SingleProduct;
