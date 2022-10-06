import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Image,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Header } from '../components/Header/index';

export default function Login() {
    const router = useRouter();

    return (
        <>
        <Header>
        </Header>
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            backgroundImage={"/images/loginbg.jpg"}
            bgPosition={'center'}
            bgRepeat="no-repeat"
        >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} color={'white'}>Login</Heading>
                        {/* <Text fontSize={'lg'} color={'white'}>
        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
    </Text> */}
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Senha</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Lembrar de mim</Checkbox>
                                    <Link color={'blue.400'} onClick={() => router.push('/cadastro')}>Esqueceu a senha?</Link>
                                </Stack>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    onClick={() => router.push('/home-page')}
                                >
                                    Entrar
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex></>
    );
}