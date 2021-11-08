import { Flex, Input , Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
export function Header(){
    return(
        <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            alignSelf="center"
            color="gray.500"
            position="relative"
            bg="gray.700"
            borderRadius="full"
            >
                <Input
                color="gray.50"
                variant="unstyled"
                px="4"
                mr="4"
                border="0"
                placeholder="Buscar na plataforma"
                _placeholder={{color: 'gray.400'}}
                />
                <Icon as={RiSearchLine} />
            </Flex>
    );
}