import { Box, Separator, Stack } from "@chakra-ui/react";
import { LadoEsquerdo } from "./lado-esquerdo";



export function Footer() {
    return (
       <Box bg="#a2a077" w="100%" bottom="0" as="footer" pos="relative" mt="40">
         <Stack align="center">
            <Stack w="70%" direction="row" justify="space-between" color="white" align="center" h="50px" pt="2">
               <h1>Quem Somos</h1>
               <h1>Fale Conosco</h1>
               <h1>Como Comprar</h1>
               </Stack>
            <Separator variant="solid" w="70%" pb="5">
            </Separator>
            
            
            <LadoEsquerdo />
            </Stack>
         
       </Box>
      )
}
