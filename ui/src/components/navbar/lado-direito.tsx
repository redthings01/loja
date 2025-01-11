import { Box, Flex, HStack, IconButton, Link, Stack, Strong, Text } from "@chakra-ui/react"
import { CgShoppingCart } from "react-icons/cg"
import { HoverCardArrow, HoverCardContent, HoverCardRoot, HoverCardTrigger } from "../ui/hover-card"
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneForwarded } from "react-icons/lu";

export function LadoDireito() {
    return (
    <Flex align="center" gap="4">    
    <HoverCardRoot size ="sm" openDelay={100} closeDelay={100}>
    <HoverCardTrigger asChild>
                    <Box color="white">
                        <Text _hover={{color: "#FFE1B0"}}>Atendimento</Text>
                    </Box>
        </HoverCardTrigger>
    <HoverCardContent maxW="240px">
    <HoverCardArrow />

        <Stack pb="2">
            <Strong>Contato</Strong>
        </Stack>
        <Stack direction="row" align="center" p="2">
            <LuPhoneForwarded size="15px"/>

            <h1>(99) 9999-9999</h1>
        </Stack>
        <Stack direction="row" align="center" p="2">
            <SiWhatsapp size="15px"/>

            <h1>(99) 9999-9999</h1>
        </Stack>
        <Stack direction="row" align="center" p="2" pb="4">
            <MdOutlineEmail size="17px"/>
            email@email.com
    
        </Stack>
        <Stack pb="2" pt="3">
           <Strong>Redes Sociais</Strong>
        </Stack>
        <Stack direction="row" align="center">
        <Link href="#">
        <HStack align="center" p="2" _hover={{color: "#FFE1B0"}}> 
        <SiWhatsapp size="15px"/>
        </HStack>
        </Link>
            <Link href="#">
        <HStack align="center" p="2" _hover={{color: "#FFE1B0"}}> 
            <SiInstagram size="15px" />
        </HStack>
            </Link>
        </Stack>

    </HoverCardContent>
    </HoverCardRoot>

 <IconButton aria-label="SCart" bg="none" _hover={{color: "#FFE1B0"}}>
      <CgShoppingCart />
    </IconButton>
    </Flex>
    )
}
