import {
    Box,
    Button,
    Divider,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { LogedHeader } from '../components/logedHeader/index';

const options = [
    { id: 1, desc: 'Faça até 3 conexões por dia' },
];

const optionsPlus = [
    { id: 1, desc: 'Faça conexões ilimitadas' },
    { id: 2, desc: 'Saiba quem visitou seu perfil' },
    
];
interface PackageTierProps {
    title: string;
    options: Array<{ id: number; desc: string }>;
    typePlan: string;
    checked?: boolean;
}
const PackageTier = ({
    title,
    options,
    typePlan,
}: PackageTierProps) => {

    return (
        <>
        <Stack
            p={3}
            py={3}
            justifyContent={{
                base: 'flex-start',
                md: 'space-around',
            }}
            direction={{
                base: 'column',
                md: 'row',
            }}
            alignItems={{ md: 'center' }}>
                <Heading size={'md'}>{title}</Heading>
                <List spacing={3} textAlign="start">
                    {options.map((desc, id) => (
                        <ListItem key={desc.id}>
                            <ListIcon as={FaCheckCircle} color="green.500" />
                            {desc.desc}
                        </ListItem>
                    ))}
                </List>
                <Heading size={'xl'}>{typePlan}</Heading>
                <Stack>
                    <Button
                        size="md"
                        bg={'bluePrimary.500'} 
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'bluePrimary.600',
                            }}
                            _focus={{
                                bg: 'bluePrimary.600',
                            }}
                        >
                        Iniciar
                    </Button>
                </Stack>
            </Stack></>
    );
};
const ThreeTierPricingHorizontal = () => {
    return (
        <>
        <LogedHeader>
        </LogedHeader>
        <Box py={6} px={5} min={'100vh'}>
                <Stack spacing={4} width={'100%'} direction={'column'}>
                    <Stack
                        p={5}
                        alignItems={'center'}
                        justifyContent={{
                            base: 'flex-start',
                            md: 'space-around',
                        }}
                        direction={{
                            base: 'column',
                            md: 'row',
                        }}>
                        <Stack
                            width={{
                                base: '100%',
                                md: '40%',
                            }}
                            textAlign={'center'}>
                            <Heading size={'lg'}>
                                Faça novas conexões para seu <Text color="bluePrimary.500">Sucesso</Text>
                            </Heading>
                        </Stack>
                        <Stack
                            width={{
                                base: '100%',
                                md: '60%',
                            }}>
                            <Text textAlign={'center'}>
                                Turbine sua jornada
                            </Text>
                        </Stack>
                    </Stack>
                    <Divider />
                    <PackageTier title={'Starter'} typePlan="Grátis" options={options} />
                    <Divider />
                    <PackageTier
                        title={'Catch Plus'}
                        checked={true}
                        typePlan="R$16,00"
                        options={optionsPlus} />
                </Stack>
            </Box></>
    );
};

export default ThreeTierPricingHorizontal;