import { Heading, Flex, Avatar, Badge, Text, Box } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, ButtonGroup, Center } from '@chakra-ui/react'
import CardRanking from "../components/CardRanking/cardRanking";
import { LogedHeader } from "../components/logedHeader/index";


export default function Propostas() {
    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Grid
                pl="2rem"
                pr="2rem"
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                mt="2rem"
            >
                <GridItem rowSpan={2}>
                    <Center h='200px' mr="4" boxShadow='xs' rounded='md' bg='white' text-align='center'>
                        <Heading >Ranking</Heading>
                    </Center >
                </GridItem>

                <GridItem colSpan={4}>
                    <CardRanking></CardRanking>
                    <CardRanking></CardRanking>
                </GridItem>
            </Grid>

        </>
    )
}