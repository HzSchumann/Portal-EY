import { Heading, Flex, Avatar, Spacer, Text, Box } from "@chakra-ui/react";
import { Progress, FormControl, Stack, Button } from '@chakra-ui/react'
import { FormLabel, Input, Center } from '@chakra-ui/react'
//import router from "../../node_modules/next/router";
import { LogedHeader } from "../components/logedHeader/index";
import CardProposta from "../components/Notificacoes/cardProposta";
import CardVizualizou from "../components/Notificacoes/cardVizualizou";
import { doc, setDoc } from "firebase/firestore";
import db from "../config/firebase";
import router from 'next/router';


export default function Curriculo() {

    async function adicionarProposta(){

        const docData = {
            area: document.getElementById("area").value,
            cursos: document.getElementById("cursos").value,
            experiencia: document.getElementById("experiencia").value,
            graduacao: document.getElementById("graduacao").value,
            name: document.getElementById("name").value
        };

        await setDoc(doc(db, "MeusCurriculos", `Curriculo do ${document.getElementById("name").value}`), docData);
        await setDoc(doc(db, "Curriculos", `Curriculo do ${document.getElementById("name").value}`), docData);
        router.push('/minhas-vagas');
    }

    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Stack minH={'100vh'} bg="backgroundBlack.700">

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center'>
                        <Heading color="white">Preencher currículo para a vaga</Heading>
                    </Box >
                </Center>

                <Center>
                    <FormControl w="60%">
                        <FormLabel color="white">Nome</FormLabel>
                        <Input type='text' id="name" color="white"/>
                    </FormControl>
                </Center>

                <Center>
                    <FormControl w="60%">
                        <FormLabel color="white">Área</FormLabel>
                        <Input type='text' id="area" color="white"/>
                    </FormControl>
                </Center>

                <Center>
                    <FormControl w="60%">
                        <FormLabel color="white">Graduação</FormLabel>
                        <Input type='text' id="graduacao" color="white"/>
                    </FormControl>
                </Center>

                <Center>
                    <FormControl w="60%">
                        <FormLabel color="white">Experiência de Trabalho</FormLabel>
                        <Input type='text' id="experiencia" color="white"/>
                    </FormControl>
                </Center>

                <Center>
                    <FormControl w="60%">
                        <FormLabel color="white">Cursos</FormLabel>
                        <Input type='text' id="cursos" color="white"/>
                    </FormControl>
                </Center>

                <Center>
                    <Button mt="2rem" w="60%" bg={'yellowPrimary.800'}
                                        color={'black'}
                                        boxShadow={
                                            '0px 1px 25px -5px rgb(247 244 30 / 48%), 0 10px 10px -5px rgb(247 244 30 / 43%)'
                                        }
                                        _hover={{
                                            bg: 'yellowPrimary.500',
                                        }}
                                        _focus={{
                                            bg: 'yellowPrimary.500',
                                        }} onClick={() => adicionarProposta()}>Enviar</Button>
                </Center>

            </Stack>

        </>
    )
}