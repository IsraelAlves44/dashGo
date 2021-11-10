import { Button, Flex , Stack} from "@chakra-ui/react"
import { Input } from "../components/Form/Input"

export default function Home() {
  return (
    <Flex 
    w="100%"
    h="100%"
    marginTop="300"
    align="center"
    justify="center"
    >
      <Flex 
        as="form"
        width = "100%"
        maxWidth = {360}
        bg="gray.700"
        p="10"
        borderRadius= {8}
        flexDir="column"
      >
        <Flex alignSelf="start" mb="10" fontSize="x-large" fontWeight="bold">Página de Cadastro</Flex>
        <Stack  mr="9" spacing="4">
        <Input name="email" type="email" label="Email"/>
        <Input name="password" type="password" label="Password"/>
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink">Entrar</Button>
      </Flex>
      </Flex>
  )
}
