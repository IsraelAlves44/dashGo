import { Button } from "@chakra-ui/button";

interface PaginationItemPops{
    isCurrent?: boolean;
    number: number;
}
export function PaginationItem({
    isCurrent = false,
    number
}: PaginationItemPops){
    if (isCurrent) {
         return(
        <Button
            size="sm"
            border= "0"
            fontSize="xs"
            width="4" 
            colorScheme="pink"
            disabled _disabled={{
                bgColor:"pink.500",
                cursor:"default",
            }}
            >
            {number}
        </Button>
         )
    }
    return(
    <Button 
        size="sm"
        fontSize="xs"
        width="4"
        border= "0" 
        bg="gray.500"
        _hover={{
            bg: 'pink.500'
        }}
        >
        {number}
    </Button>
    )
}