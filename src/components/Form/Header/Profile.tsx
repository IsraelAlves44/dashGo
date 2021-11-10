import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
interface ProfileProps{
    showProfileData?: boolean;
}
export function Profile({showProfileData = true}: ProfileProps ){
    return(
    <Flex align="center">
        { showProfileData && (
            <Box mr="4">
            <Text>Israel</Text>
            <Text color="gray.300">
                israelalves45155@gmail.com
            </Text>
        </Box>
        )}
        <Avatar size="md" name="israel"/>
    </Flex>
);
}