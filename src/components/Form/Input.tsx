import { FormControl, FormLabel , Input as  ChackaInput, InputProps as ChackaInputProps } from "@chakra-ui/react";

interface InputProps extends ChackaInputProps {
    name: string;
    label?:string;
}


export function Input({name, label, ...rest}:InputProps){
    

    return(
        <FormControl>
        { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChackaInput 
        name = {name}
        id= {name}
        type="email" 
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor:"gray.900"
        }}
        size="lg"
        {... rest}
        />
        </FormControl>
    )
}