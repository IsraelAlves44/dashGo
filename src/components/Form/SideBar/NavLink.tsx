import { Link, Icon , Text , LinkProps as ChakraLinkProp } from "@chakra-ui/react";
import { ElementType } from "toasted-notes/node_modules/@types/react";

interface NavLinkProps extends ChakraLinkProp {
    icon: ElementType;
    children: string;
}
export function NavLink({icon, children, ...rest}: NavLinkProps ){
    return(
        <Link display="flex" alignSelf="center" color="pink.400">
            <Icon as={icon} alignSelf="center" fontSize="20"></Icon>
             <Text ml="4" fontWeight="medium" py="1">{children}</Text>
        </Link>
    );
}
