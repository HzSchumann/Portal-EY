import { Heading, Flex, Avatar, Spacer, Text, Box, Divider } from "@chakra-ui/react";
import { Icon, GridItem, Stack } from '@chakra-ui/react'
import { Button, ButtonGroup, Center } from '@chakra-ui/react'
import router from "../../node_modules/next/router";
import { LogedHeader } from "../components/logedHeader/index";
import CardProposta from "../components/Notificacoes/cardProposta";
import CardVizualizou from "../components/Notificacoes/cardVizualizou";


export default function MinhasVagas() {
    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Stack  minH={'100vh'} bg="backgroundBlack.700">
                
                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center'>
                        <Heading color="white">Meus Processos Seletivos</Heading>
                    </Box >
                </Center>

                    <Center>
                        <Box border="1px" borderColor="gray.700" borderStyle={'solid'} h="100px" w="60%" bg="black"
                            borderRadius="lg" p="0.5rem" cursor="pointer">
                                
                            <Stack
                                flex={1}
                                justifyContent="Center"
                                alignItems="left"
                                direction={{ base: 'column', md: 'row' }}
                                p={1}
                                pt={2}
                                onClick={() => router.push('/formulario-vaga')}>
                                    <Box>
                                        <Heading fontSize={'2xl'} fontFamily={'body'} color="white">
                                            Estágio em Engenharia
                                        </Heading>
                                        <Text color="white">Nível: Estágio</Text>
                                    </Box>
                                    

                                        <Stack
                                            width={'300px'}
                                            mt={'2rem'}
                                            direction={'row'}
                                            justifyContent={'right'}
                                            alignItems={'center'}
                                        >
                                            <Text color="green">Enviar Informações</Text>
                                        </Stack>
                            </Stack>
                        </Box> 
                    </Center>

                    <Center>
                        <Box border="1px" borderColor="gray.700" borderStyle={'solid'} h="100px" w="60%" bg="black"
                            borderRadius="lg" p="0.5rem" cursor="pointer">
                                
                            <Stack
                                flex={1}
                                justifyContent="Center"
                                alignItems="left"
                                direction={{ base: 'column', md: 'row' }}
                                pt={2}>
                                    <Box>
                                        <Heading fontSize={'2xl'} fontFamily={'body'} color="white">
                                            Estágio em Front-End Dev
                                        </Heading>
                                        <Text color="white">Nível: Estágio</Text>
                                    </Box>
                                    

                                        <Stack
                                            width={'300px'}
                                            mt={'2rem'}
                                            direction={'row'}
                                            justifyContent={'right'}
                                            alignItems={'center'}
                                        >
                                            <Text color="yellow">Entrevista Marcada 30/11/2022 09:00</Text>
                                        </Stack>
                            </Stack>
                        </Box> 
                    </Center>

                    <Center>
                        <Box border="1px" borderColor="gray.700" borderStyle={'solid'} h="100px" w="60%" bg="black"
                            borderRadius="lg" p="0.5rem" cursor="pointer">
                                
                            <Stack
                                flex={1}
                                justifyContent="Center"
                                alignItems="left"
                                direction={{ base: 'column', md: 'row' }}
                                pt={2}>
                                    <Box>
                                        <Heading fontSize={'2xl'} fontFamily={'body'} color="white">
                                            Project Management Office
                                        </Heading>
                                        <Text color="white">Nível: Sênior</Text>
                                    </Box>
                                    

                                        <Stack
                                            width={'300px'}
                                            mt={'2rem'}
                                            direction={'row'}
                                            justifyContent={'right'}
                                            alignItems={'center'}
                                        >
                                            <Text color="red">Fechado</Text>
                                        </Stack>
                            </Stack>
                        </Box> 
                    </Center>

                    <Center >
                        <Divider w="80%" mt="2rem"/>
                    </Center>

                    <Center>
                    <Box w="60%" mr="4" rounded='md' text-align='center' mt="3rem" mb="2rem">
                        <Heading fontSize="24px" color="white">Sugestões de Vagas</Heading>
                    </Box >
                </Center>
                        
            </Stack>
                

                
                

        </>
    )
}