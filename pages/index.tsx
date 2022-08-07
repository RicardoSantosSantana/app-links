import {
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
import Register from '../components/Register';
import WelcomeIndex from '../components/WelcomeIndex';

export default function SplitScreen() {

  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
  const [showRegister, setShowRegister] = useState(true);

  const toRegister = () => {
    setShowRegister(false);
  }
  const toLogin = () => {
    setShowRegister(true)
  }


  return (
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

          {showRegister ? (
            <>
              <Flex p={0} flex={1} align={'center'} justify={'center'}>
                <Login />
              </Flex>

              <Flex p={0} align={'center'} maxW={'full'} justify={'center'}>
                <Button onClick={toRegister} colorScheme={'green'} maxW={'full'} variant={'solid'}>
                  + Criar nova conta
                </Button>
              </Flex>
            </>
          ) : (
            <>
              <Flex p={0} flex={1} align={'center'} justify={'center'}>
                <Register />
              </Flex>

              <Flex p={0} align={'center'} maxW={'full'} justify={'center'}>
                <Button maxW={'full'} onClick={toLogin} variant={'solid'}>
                  Voltar para LogIn
                </Button>
              </Flex>
            </>
          )}

        </Stack>
      </Flex>

    </Stack>
  );
}