import {
  Box,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';

import { Cartcontext } from '../context/Context';
import Filters from './Filters';

import SingleProduct from './SingleProduct';

const Home = () => {
  //  fastDelivery: false;
  //  id: '7df47cc6-d445-4611-8bef-84cb5902dd03';
  //  image: 'https://loremflickr.com/640/480/fashion';
  //  inStock: 3;
  //  name: 'Licensed Concrete Tuna';
  //  price: '434';
  //  ratings: 3;
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = useContext(Cartcontext);

  let data = products;
  //  console.log(data)
  const filtered = () => {
    let arr = products;
    if (byFastDelivery) {
      arr = arr.filter(x => x.fastDelivery);
    }
    if (!byStock) {
      arr = arr.filter(x => x.inStock !== 0);
    }
    if (sort === 'lowToHigh') {
      arr = arr.sort((a, b) => a.price - b.price);
    }
    if (sort === 'highToLow') {
      arr = arr.sort((a, b) => b.price - a.price);
    }
    if (byRating) {
      arr = arr.filter(
        (prod) => prod.ratings >= byRating
      );
    }
    
    if (searchQuery) {
      arr = arr.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
    return arr;
  };

  return (
    <SimpleGrid columns={[2, null, 5]} spacing="4">
      <GridItem colSpan={1} rowSpan={50}>
        <Filters />
      </GridItem>

      {filtered().map(prod => (
        <SingleProduct key={prod.id} prod={prod} />
      ))}
    </SimpleGrid>
  );
};

export default Home;
// <Stack

//   direction={['column', 'row']}
//   spacing={10}
//   p={10}
//   alignItems="flex-start"
//  bg="gray.50"
// >
//   <SimpleGrid columns={2} spacing={4}>
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//   </SimpleGrid>

//   <SimpleGrid columns={[2, null, 3]} spacing="40px">
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//     <Box height="80px" bg="tomato">
//       hello
//     </Box>
//   </SimpleGrid>
// </Stack>
