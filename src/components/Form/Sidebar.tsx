import Icon from "@chakra-ui/icon"
import { Box, Link, Stack, Text} from "@chakra-ui/layout"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"

export function Sidebar(){
    return(
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small" >Geral</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" alignSelf="center" color="pink.400">
                            <Icon as={RiDashboardLine} alignSelf="center" fontSize="20"></Icon>
                            <Text ml="4" fontWeight="medium" py="1">Dashboard</Text>
                        </Link>
                        <Link display="flex" alignSelf="center" color="pink.400">
                            <Icon as={RiContactsLine} alignSelf="center" fontSize="20"></Icon>
                            <Text ml="4" fontWeight="medium" py="1">Usuarios</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small" >Automacao</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" alignSelf="center" color="pink.400">
                            <Icon as={RiInputMethodLine} alignSelf="center" fontSize="20"></Icon>
                            <Text ml="4" fontWeight="medium" py="1">Formularios</Text>
                        </Link>
                        <Link display="flex" alignSelf="center" color="pink.400">
                            <Icon as={RiGitMergeLine} alignSelf="center" fontSize="20"></Icon>
                            <Text ml="4" fontWeight="medium" py="1">Automacao</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}