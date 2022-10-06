import {
    Box,
    Stack,
    Heading,
    Center,
    Icon,
    Text,
    Image,
    Button,
    Badge

} from '@chakra-ui/react';
import router from '../../node_modules/next/router';
import CardPerfil from '../components/Card/card';
import { ArrowForwardIcon} from '@chakra-ui/icons'

import { LogedHeader } from '../components/logedHeader/index';



export default function HomePage() {


    return (
        <>
            <LogedHeader>
            </LogedHeader>
            <Stack minH={'100vh'}  bg="backgroundBlack.700">

                <Box p="2rem" >
                    <Box
                        position={'relative'}
                        height={'300px'}
                        width={'full'}
                        overflow={'hidden'}
                        mb="2rem"
                        borderRadius="lg"
                        backgroundImage={"/images/pug.jpg"}
                        bgPosition={'center'}>

                    </Box>

                    <Box pb="1rem" cursor="pointer">
                        <Stack
                            bg="yellowPrimary.800"
                            borderRadius="lg"
                            w='50%'
                            height='100px'
                            direction={{ base: 'column', md: 'row' }}
                            boxShadow={'2xl'}
                            padding={4}>
                            <Stack
                                flex={1}
                                
                                justifyContent="Center"
                                alignItems="left"
                                p={1}
                                pt={2}>
                                <Heading fontSize={'2xl'} fontFamily={'body'} color="white">
                                    Ver meus processos seletivos
                                </Heading>
                            </Stack>
                                <Stack
                                    width={'300px'}
                                    mt={'2rem'}
                                    direction={'row'}
                                    justifyContent={'right'}
                                    alignItems={'center'}
                                >
                                    <Icon color="white" w={8} h={8}>
                                        <ArrowForwardIcon />
                                    </Icon>
                                </Stack>
                            </Stack>
                    </Box>

                    <Box pb="1rem" cursor="pointer">
                        <Stack
                            bg="yellowPrimary.800"
                            borderRadius="lg"
                            w='50%'
                            height='100px'
                            direction={{ base: 'column', md: 'row' }}
                            boxShadow={'2xl'}
                            padding={4}>
                            <Stack
                                flex={1}
                                
                                justifyContent="Center"
                                alignItems="left"
                                p={1}
                                pt={2}>
                                <Heading fontSize={'2xl'} fontFamily={'body'} color="white">
                                    Ver meus cursos
                                </Heading>
                            </Stack>
                                <Stack
                                    width={'300px'}
                                    mt={'2rem'}
                                    direction={'row'}
                                    justifyContent={'right'}
                                    alignItems={'center'}
                                >
                                    <Icon color="white" w={8} h={8}>
                                        <ArrowForwardIcon />
                                    </Icon>
                                </Stack>
                            </Stack>
                    </Box>

                </Box>
            </Stack>
        </>
    );
}
