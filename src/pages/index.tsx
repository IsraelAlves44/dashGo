import { Button, Flex , Stack} from "@chakra-ui/react"
import { Input } from "../components/Form/Input"

export default function Home() {
  return (
    <Flex 
    w="100"
    h="100"
    marginTop="450"
    align="center"
    justify="center"
    >
      <Flex 
        as="form"
        width = "100%"
        maxWidth = {360}
        bg = "gray.700"
        p = "8"
        borderRadius= {8}
        flexDir="column"
      >
        <Stack spacing="4" >
        <Input name="email" type="email" label="email"/>
        <Input name="password" type="password" label="password"/>
        </Stack>
        
        <Button type="submit"s  mt="6" colorScheme="pink">Entrar</Button>
        
      </Flex>
      </Flex>
  )
}
