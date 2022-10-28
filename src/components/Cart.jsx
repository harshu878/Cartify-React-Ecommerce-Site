import React, { useContext, useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  SimpleGrid,
  GridItem,
  Text,
  Box,
  HStack,
  Image,
  Button,
  Select,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { Cartcontext } from '../context/Context';
import Rating from './Rating';
import { DeleteIcon } from '@chakra-ui/icons';
const Cart = () => {
 const {state, dispatch}= useContext(Cartcontext)
 const {products, cart} = state
 const [total, setTotal] = useState()
   useEffect(() => {
     setTotal(
       cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
     );
   }, [cart]);

  return (
    <SimpleGrid columns={[2, null, 7]} spacing="4">
      <GridItem colSpan={5} rowSpan={50}>
        {cart.length > 0 ? (
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Product</Th>
                  <Th>Price</Th>
                  <Th>Rating</Th>
                  <Th>Quantity</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {cart && cart.length > 0
                  ? cart.map(x => (
                      <Tr>
                        <Td>
                          <HStack>
                            <Image
                              w="50px"
                              h="50px"
                              borderRadius="full"
                              mr="4"
                              src={x.image}
                            ></Image>
                            <Text>{x.name}</Text>
                          </HStack>
                        </Td>
                        <Td>₹ {x.price}</Td>
                        <Td>
                          <HStack
                            spacing="1"
                            w="10%"
                            margin="auto"
                            justifyContent="center"
                          >
                            <Rating rating={x.ratings} />
                          </HStack>
                        </Td>
                        <Td>
                          <Select
                            value={x.qty}
                            onChange={e =>
                              dispatch({
                                type: 'CHANGE_CART_QTY',
                                payload: {
                                  id: x.id,
                                  qty: e.target.value,
                                },
                              })
                            }
                            placeholder="Select"
                          >
                            {[...Array(x.inStock).keys()].map(c => (
                              <option key={c + 1}>{c + 1}</option>
                            ))}
                          </Select>
                        </Td>
                        <Td>
                          <Button
                            marginTop="3"
                            w="100%"
                            colorScheme="red"
                            onClick={() =>
                              dispatch({
                                type: 'remove',
                                payload: x,
                              })
                            }
                          >
                            <DeleteIcon />
                          </Button>
                        </Td>
                      </Tr>
                    ))
                  : null}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Text fontSize='4xl'>Cart is empty...</Text>
        )}
      </GridItem>
      <GridItem colSpan={2} rowSpan={50}>
        <Flex bg="#31363c" color="white" p="6" h="80vh" direction="column">
          <Text fontSize="xl">Subtotal ({cart.length}) items</Text>

          <Text fontSize="xl">Total: ₹ {total}</Text>

          <Button
            color="black"
            w="100%"
            marginTop="8"
            //   onClick={() =>
            //     productDispatch({
            //       type: 'CLEAR_FILTERS',
            //     })
            //   }
          >
            Proceed to Checkout
          </Button>
        </Flex>
      </GridItem>
    </SimpleGrid>
  );
}

export default Cart