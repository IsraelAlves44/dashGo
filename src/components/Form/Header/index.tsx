import { Box, Flex, Stack } from "@chakra-ui/layout";
import {Logo} from "./Logo"
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import {SearchBox} from "./SearchBox"
export function Header(){
    return(
        <Flex
        w="100%"
        maxWidth={1480}
        h="20"
        mt="6"
        px="15"
        align="center"
        >
            <Flex align="center" ml="auto">
                 <Logo />
                <SearchBox />
            </Flex>
                
                
            <Flex>
                <NotificationNav />
                <Profile />
            </Flex>
        </Flex>
    );
}