import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine} from "react-icons/ri";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

export function SideBarNav(){
    return(
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                <NavLink icon={RiContactsLine}>Usuarios</NavLink>
            </NavSection>
            <NavSection title="AUTOMACAO">
                <NavLink icon={RiInputMethodLine}>Formularios</NavLink>
                <NavLink icon={RiGitMergeLine}>Automacao</NavLink>
            </NavSection>
        </Stack>
    );
}