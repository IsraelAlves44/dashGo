import {Box, Flex, Heading, Button, Icon, Table, Tr, Th, Td,Checkbox, Thead, Tbody, Text} from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Header } from "../../components/Form/Header/index"
import { Pagination } from "../../components/Form/Pagination"
import { Sidebar } from "../../components/Form/Sidebar"


export default function UserList(){
    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} max="auto" px="5">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg='gray.700' p="8">
                <Flex mb="8" justify="space-between" align="center">
                    <Heading size="lg" fontWeight="bold">Usuário</Heading>
                    
                    <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="pink"
                    leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                    >
                    Criar novo
                    </Button>

                </Flex>

                <Table colorScheme="WhiteAlpha">
                <Thead>
                <Tr>
                    <Th px="6" color="gray.300">
                        <Checkbox colorScheme="pink" />
                    </Th>
                    <Th fontSize="15">Usuario</Th>
                    <Th>Data de Cadastro</Th>
                    <Th width="8"></Th>
                </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td px="6">
                        <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                            <Box>
                            <Text fontWeight="bold">Lenny</Text>
                            <Text fontSize="sm" color="gray.300">Lenny@gmail.com</Text>
                            </Box>
                        </Td>
                        <Td>04/08/2021</Td>
                        <Td>
                        <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}
                        >
                        Editar
                        </Button>
                        </Td>
                        </Tr>
                        <Tr>
                        <Td px="6">
                        <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                            <Box>
                            <Text fontWeight="bold">Lenny</Text>
                            <Text fontSize="sm" color="gray.300">Lenny@gmail.com</Text>
                            </Box>
                        </Td>
                        <Td>04/08/2021</Td>
                        <Td>
                        <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}
                        >
                        Editar
                        </Button>
                        </Td>
                        </Tr>
                        <Tr>
                        <Td px="6">
                        <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                            <Box>
                            <Text fontWeight="bold">Lenny</Text>
                            <Text fontSize="sm" color="gray.300">Lenny@gmail.com</Text>
                            </Box>
                        </Td>
                        <Td>04/08/2021</Td>
                        <Td>
                        <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}
                        >
                        Editar
                        </Button>
                        </Td>
                        </Tr>
                        <Tr>
                        <Td px="6">
                        <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                            <Box>
                            <Text fontWeight="bold">Lenny</Text>
                            <Text fontSize="sm" color="gray.300">Lenny@gmail.com</Text>
                            </Box>
                        </Td>
                        <Td>04/08/2021</Td>
                        <Td>
                        <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}
                        >
                        Editar
                        </Button>
                        </Td>
                        </Tr>
                        <Tr>
                        <Td px="6">
                        <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                            <Box>
                            <Text fontWeight="bold">Lenny</Text>
                            <Text fontSize="sm" color="gray.300">Lenny@gmail.com</Text>
                            </Box>
                        </Td>
                        <Td>04/08/2021</Td>
                        <Td>
                        <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}
                        >
                        Editar
                        </Button>
                        </Td>
                        </Tr>
                </Tbody>
                </Table>
                <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}