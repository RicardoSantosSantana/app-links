import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Center,
    Avatar,
    AvatarBadge,
    useColorModeValue,
    IconButton,
    Divider,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

export default function Register() {
    return (
        
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}


                p={0}
                my={1}>
                <Heading fontSize={'2xl'} >Registre-se</Heading>
                <Divider />
                <FormControl id="userName" isRequired>
                    <FormLabel>User name</FormLabel>
                    <Input
                        placeholder="UserName"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                    />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        placeholder="your-email@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                    />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                        placeholder="password"
                        _placeholder={{ color: 'gray.500' }}
                        type="password"
                    />
                </FormControl>
                <Stack spacing={6}>
                    <Button colorScheme={'blue'} variant={'solid'}>
                        Registrar
                    </Button>
                </Stack>
            </Stack>

        
    )
}