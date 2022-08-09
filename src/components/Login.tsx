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
import useAuth from '../hooks/useAuth'

export default function Login() {
    
const { signInGoogle, signInGithub, logOut, user, loading } = useAuth()

 const LogInGoogle = () =>{
     
 }

    return (

        <Stack spacing={4} w={'full'} maxW={'md'}>
            <Text>Entrar com</Text>
            <Divider />
            <Button onClick={signInGoogle} w={'full'}  colorScheme='blue' variant={'outline'} leftIcon={<FcGoogle />}>
                <Text>Google</Text>
            </Button>
            <Button w={'full'} onClick={signInGithub} colorScheme={'messenger'} leftIcon={<FaGithub />}>
                <Text>Github</Text>
            </Button> 


        </Stack>

    );
}
