import {
    Box,
    Flex,
    Avatar,
    HStack,
    Icon,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,

} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AiOutlineHome, AiOutlinePlayCircle, AiOutlineFileText } from "react-icons/ai";


export function LogedHeader() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const router = useRouter();


    return (
        <>
            <Box 
                bg={useColorModeValue('backgroundBlack.700')}
                px={4} h="60px" borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.700')}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box ml="1rem"  cursor='pointer' onClick={() => router.push('/home-page')}>
                            <Image src="/images/eyLogo.svg" h="2rem"></Image>
                        </Box>
                        
                    </HStack>
                    <Flex alignItems={'center'}>
                        <IconButton
                            bg="gray.700"
                            size={'lg'}
                            mr='1rem'
                            aria-label={'Ranking'}
                            onClick={() => router.push('/home-page')}
                        >
                            <Icon as={AiOutlineHome} color="white"></Icon>
                        </IconButton>

                        <IconButton
                            bg="gray.700"
                            size={'lg'}
                            mr='1rem'
                            aria-label={'Propostas'}
                            onClick={() => router.push('/propostas')}
                        >
                            <Icon as={AiOutlinePlayCircle} color="white"></Icon>
                        </IconButton>

                        <IconButton
                            bg="gray.700"
                            size={'lg'}
                            mr='1rem'
                            aria-label={'Notificações'}
                            onClick={() => router.push('/minhas-vagas')}
                        >
                            <Icon as={AiOutlineFileText} color="white"></Icon>
                        </IconButton>

                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    mr="1rem"
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem
                                    onClick={() => router.push('/perfil')}
                                >
                                    Configurações
                                </MenuItem>
                                <MenuItem
                                    onClick={() => router.push('/assinatura')}
                                >
                                    Assinatura
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem onClick={() => router.push('/')}>Sair</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

