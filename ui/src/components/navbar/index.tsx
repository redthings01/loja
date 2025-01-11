import { Box, Stack } from "@chakra-ui/react";
import { LadoDireito } from "./lado-direito";
import { LadoEsquerdo } from "./lado-esquerdo";
import { Meio } from "./meio";
import { Meio2 } from "./meio2";
import { Meio3 } from "./meio3";
import { Meio4 } from "./meio4";

//#958865
//#a2a077
export function Navbar() {
    return (
        <Box bg="#a2a077" w="100%" overflow="hidden" zIndex="sticky" pos="fixed" top="0" as="header">
        <Stack align="center">
        <Stack w="70%" direction="row" justify="space-between" color="white" align="center">
        
                <LadoEsquerdo/>
                <Meio/>
                <Meio2/>
                <Meio3/>
                <Meio4/>
                <LadoDireito/>


        </Stack>
        </Stack>

        </Box>

    )
}
