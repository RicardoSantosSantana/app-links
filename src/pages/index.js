import {
  AlertDescription,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { useState } from 'react';
 
import Login from '../components/Login';
 
import WelcomeIndex from '../components/WelcomeIndex';
 

export default function Home(props) {
  
console.log(props)
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
 

  return (<>
    
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
  
      {isLargerThan1280 ? <WelcomeIndex /> : null}
     
      <Flex p={8} flex={1} align={'center'} justify={'center'}>

        <Stack spacing={4} w={'full'} maxW={'full'}>

          <Flex pb={5} flex={1} align={'center'} justify={'center'}>

            <Heading

              color={'gray.500'}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              Links {' '}
              <Text as={'span'} color={'orange.500'}>
                Úteis
              </Text>
              <Divider />
            </Heading>

          </Flex>


          <Flex p={0} flex={1} align={'center'} justify={'center'}>
            <Login />
          </Flex>



        </Stack>
      </Flex>

    </Stack>
    </>
  );
}

export async function getServerSideProps(context) { 
  
    return {
    props: { }, // will be passed to the page component as props
  }
}