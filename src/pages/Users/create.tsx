import {Box, Flex} from "@chakra-ui/react"
import { Header } from "../../components/Form/Header"
import { Sidebar } from "../../components/Form/Sidebar"


export default function UserList(){
    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} max="auto" px="5">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg='gray.700' p="8" />
                </Flex>
        </Box>
    )
}