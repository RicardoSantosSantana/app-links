import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Center,
    Divider,
    Text,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {

    return ( 

        <Stack spacing={4} w={'full'} maxW={'md'}> 
            
            <Stack spacing={6} direction={['column', 'row']}>
                <Button w={'full'} colorScheme='blue' variant={'outline'} leftIcon={<FcGoogle />}>
                    <Center>
                        <Text>Google</Text>
                    </Center>
                </Button>
                <Button w={'full'} colorScheme={'messenger'} leftIcon={<FaGithub />}>
                    <Center>
                        <Text>Github</Text>
                    </Center>
                </Button>
            </Stack>

            <Divider />

            <FormControl id="loginEmail">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
            </FormControl>
            <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
            </FormControl>
            <Button colorScheme={'blue'} variant={'solid'}>
                Sign in
            </Button>
            <Stack spacing={6}>
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                </Stack>
                <Center>
                    <Link color={'blue.500'}>Esqueceu a senha?</Link>
                </Center> 

            </Stack>

        </Stack> 

    );
}