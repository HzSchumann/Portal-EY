import { Heading, Flex, Avatar, Spacer, Text, Box } from "@chakra-ui/react";
import { Progress, FormControl, Stack, Button } from '@chakra-ui/react'
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
                        <Heading color="white">Preencher formulário para prosseguir no processo!</Heading>
                    </Box >
                </Center>



                <Center>
                    <Progress w="60%" value={20} size='xs' colorScheme="yellow" mb="2rem" />
                </Center>

                <Center>
                    <FormControl w="60%">
                        <FormLabel color="white">Endereço</FormLabel>
                        <Input type='email' color="white"/>
                    </FormControl>
                </Center>

                <Center>
                    <FormControl w="60%">
                        <FormLabel color="white">Agência</FormLabel>
                        <Input type='email' color="white"/>
                    </FormControl>
                </Center>

                <Center>
                    <FormControl w="60%">
                        <FormLabel color="white">Conta</FormLabel>
                        <Input type='email' color="white"/>
                    </FormControl>
                </Center>

                <Center>
                    <FormControl w="60%">
                        <FormLabel color="white">Carteira de Trabalho</FormLabel>
                        <Input type='email' color="white"/>
                    </FormControl>
                </Center>

                <Center>
                    <Button mt="2rem" w="60%" bg="yellowPrimary.800" color="white" onClick={() => router.push('/documentos-vaga')}>Continuar</Button>
                </Center>

            </Stack>

        </>
    )
}