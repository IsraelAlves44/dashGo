import {Text} from "@chakra-ui/layout";

export function Logo(){
    return(
        <Text 
            fontsize={["2xl","3xl"]}
            fontWeight="bold" 
            letterSpacing="tight" 
            w="64"
            >
            DashGo
            <Text as="span" marginLeft="1" color="pink.500">.</Text>
        </Text>
    );
}