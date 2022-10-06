import { Heading, Flex, Avatar, Spacer, Text, Box } from "@chakra-ui/react";
import { Progress, Image, Stack, Button } from '@chakra-ui/react'
import { FormLabel, Input, Center } from '@chakra-ui/react'
import router from "../../node_modules/next/router";
import { LogedHeader } from "../components/logedHeader/index";
import CardProposta from "../components/Notificacoes/cardProposta";
import CardVizualizou from "../components/Notificacoes/cardVizualizou";


export default function MinhasVagas() {
    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Stack minH={'100vh'} bg="backgroundBlack.700">

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center'>
                        <Heading color="white">Parabéns! Você conseguiu!</Heading>
                    </Box >
                </Center>



                <Center>
                    <Progress w="60%" value={100} size='xs' colorScheme="yellow" mb="2rem" />
                </Center>

                <Center>
                    <Box>
                        <Image 
                            alt={'Login Image'}
                        objectFit={'cover'}
                        src="/images/verified.svg">

                        </Image>
                    </Box>
                </Center>

                <Center>
                    <Heading color="white">Seja Bem-Vindo!</Heading>
                </Center>

                <Center>
                    <Text color="white">Estamos felizes por contar com você!</Text>
                </Center>

                <Center>
                    <Button mt="2rem" w="60%" bg="yellowPrimary.800" color="white" onClick={() => router.push('/home-page')}>Continuar</Button>
                </Center>


            </Stack>

        </>
    )
}