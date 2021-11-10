import {useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, } from "react";

interface SideBarDrawerProps{
    children: ReactNode;
}
type SideBarDrawerContextData = UseDisclosureReturn

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData);

export function SideBarDrawerProvider({children}:SideBarDrawerProps){
    const disclosure = useDisclosure()
    const router = useRouter()
    return(
        <SideBarDrawerContext.Provider value={disclosure}>
            {children}
        </SideBarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SideBarDrawerContext)