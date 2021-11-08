import {Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button} from "@chakra-ui/react"
import { Header } from "../../components/Form/Header"
import { Sidebar } from "../../components/Form/Sidebar"
import { Input } from "../../components/Form/Input"


export default function CreateUser(){
    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} max="auto" px="5">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg='gray.700' p="8">
                <Heading size="lg" fontWeight="normal">Criar novo usuario</Heading>

                <Divider my="10" borderColor="gray.700"/>

                <VStack spacing="8">
                    <SimpleGrid minChildWidth="240px" spacing="10" w="90%">
                        <Input name="name"  label="Nome Completo"></Input>
                        <Input name="email" type="email" label="E-mail"></Input>
                    </SimpleGrid>
                    <SimpleGrid minChildWidth="240px" spacing="10" w="90%">
                        <Input name="password" type="password" label="Senha"></Input>
                        <Input name="password_confirmation" type="password" label="Confirmacao de Senha"></Input>
                    </SimpleGrid>
                </VStack>
                <Flex mt="8" justify="flex-end">
                    <HStack spacing="4">
                        <Button colorScheme="WhiteAlpha">Cancelar</Button>
                        <Button bg="pink.500">Salvar</Button>
                    </HStack>
                </Flex>
                </Box>
                </Flex>
        </Box>
    )
}