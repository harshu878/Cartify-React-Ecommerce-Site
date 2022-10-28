import React, { useContext } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  RadioGroup,
  VStack,
  Radio,
  Box,
  Button,
  Checkbox,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { Cartcontext } from '../context/Context';
import Rating from './Rating';
const Filters = () => {
  const {
    dispatch,
  state,
  productState,
  productDispatch
  } = useContext(Cartcontext);
 const { sort, byStock,
    byFastDelivery,
    byRating,
    searchQuery } = productState;
 console.log(
   '🚀 ~ file: Filters.jsx ~ line 23 ~ Filters ~ filterobj',
   productState
 );

   
  return (
    <Box bg="#31363c" color="white" p="2" h="80vh">
      <FormControl as="fieldset">
        <FormLabel fontSize="2xl" marginBottom="6" as="legend">
          Filter Products
        </FormLabel>

          <VStack alignItems="flex-start" spacing="5" marginBottom="5">
            <Radio
              isChecked={sort == 'lowToHigh'}
              onClick={() =>
                productDispatch({
                  type: 'SORT_BY_PRICE',
                  payload: 'lowToHigh',
                })
              }
              value="lowToHigh"
            >
              Ascending
            </Radio>
            <Radio
              isChecked={sort == 'highToLow'}
              onClick={() =>
                productDispatch({
                  type: 'SORT_BY_PRICE',
                  payload: 'highToLow',
                })
              }
              value="highToLow"
            >
              Descending
            </Radio>
          </VStack>
    
      </FormControl>
      <VStack alignItems="flex-start" spacing="5">
        <Radio
          colorScheme="green"
          onClick={() =>
            productDispatch({
              type: 'FILTER_BY_STOCK',
              payload: !byStock,
            })
          }
          isChecked={byStock}
        >
          Include Out of Stock
        </Radio>
        <Radio
          colorScheme="green"
          onClick={() =>
            productDispatch({
              type: 'FILTER_BY_DELIVERY',
              payload: !byFastDelivery,
            })
          }
          isChecked={byFastDelivery}
        >
          Fast Delivery Only
        </Radio>
      </VStack>
      <HStack mt="6" spacing="1">
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
            rating={byRating}
            onClick={(i) =>
              productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              })
            }
            style={{ cursor: "pointer" }}
        />
      </HStack>
      <Button
        color="black"
        w="100%"
        marginTop="8"
        onClick={() =>
          productDispatch({
            type: 'CLEAR_FILTERS',
          })
        }
      >
        Clear Filters
      </Button>
    </Box>
  );
};

export default Filters;
