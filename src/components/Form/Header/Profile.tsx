import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile(){
    return(
    <Flex align="center">
        <Box mr="4">
            <Text>Israel</Text>
            <Text color="gray.300">
                israelalves45155@gmail.co
            </Text>
        </Box>
        <Avatar size="md" name="israel"/>
    </Flex>
);
}