import { Box, Flex, HStack, Link, Stack, Strong } from "@chakra-ui/react"
import { LuPhoneForwarded } from "react-icons/lu"
import { MdOutlineEmail } from "react-icons/md"
import { SiInstagram, SiWhatsapp } from "react-icons/si"



export function LadoEsquerdo() {
   return (
      <Box color="white" w="70%">
            <Stack color="white">
             <Strong>Contato</Strong>
                
        <Stack direction="row" align="center" p="2">
            <LuPhoneForwarded size="15px"/>

            <h1>(99) 9999-9999</h1>
        </Stack>


        <Stack direction="row" align="center" p="2">
            <SiWhatsapp size="15px"/>

            <h1>(99) 9999-9999</h1>
        </Stack>

        <Stack direction="row" align="center" p="2">
            <MdOutlineEmail size="17px"/>
            email@email.com
    
        </Stack>


            </Stack>
        </Box>

   )
}
