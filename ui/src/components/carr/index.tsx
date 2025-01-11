import { Badge, Box, Flex, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { HiStar } from "react-icons/hi";


export function Carr() {
    return (
    <Flex gap="8" justify="space-between" align="center">
 <Box maxW="18em">
      <Image src={data.imageUrl} alt={data.imageAlt} />

      <Box p="4">
        <HStack>
          <Badge colorPalette="teal" variant="solid">
            Novidade
          </Badge>
          <HStack gap="1" fontWeight="medium">
            <Icon color="orange.400">
              <HiStar />
            </Icon>
          </HStack>
        </HStack>
          <Stack>
        <Text fontWeight="medium" color="fg">
          {data.title}
        </Text>
        </Stack>
      </Box>
          <Stack pos="relative" align="center">
          
          <Text fontWeight="medium" color="fg.muted">{data.formattedPrice}</Text>
        </Stack>
    </Box>

 <Box maxW="18em" pos="relative">
      <Image src={data2.imageUrl} alt={data2.imageAlt} />

      <Box p="4">
        <HStack>
          <Badge colorPalette="teal" variant="solid">
            Novidade
          </Badge>
          <HStack gap="1" fontWeight="medium">
            <Icon color="orange.400">
              <HiStar />
            </Icon>
          </HStack>
        </HStack>
          <Stack>
        <Text fontWeight="medium" color="fg">
          {data2.title}
        </Text>
        </Stack>
      </Box>
        <Stack pos="relative" align="center">
        <Text fontWeight="medium" color="fg.muted">{data2.formattedPrice}</Text>
        </Stack>
    </Box>
 <Box maxW="18em">
      <Image src={data.imageUrl} alt={data.imageAlt} />

      <Box p="4">
        <HStack>
          <Badge colorPalette="teal" variant="solid">
            Novidade
          </Badge>
          <HStack gap="1" fontWeight="medium">
            <Icon color="orange.400">
              <HiStar />
            </Icon>
          </HStack>
        </HStack>
          <Stack>
        <Text fontWeight="medium" color="fg">
          {data.title}
        </Text>
        </Stack>
      </Box>
          <Stack pos="relative" align="center">
          
          <Text fontWeight="medium" color="fg.muted">{data.formattedPrice}</Text>
        </Stack>
    </Box>

 <Box maxW="18em" pos="relative">
      <Image src={data2.imageUrl} alt={data2.imageAlt} />

      <Box p="4">
        <HStack>
          <Badge colorPalette="teal" variant="solid">
            Novidade
          </Badge>
          <HStack gap="1" fontWeight="medium">
            <Icon color="orange.400">
              <HiStar />
            </Icon>
          </HStack>
        </HStack>
          <Stack>
        <Text fontWeight="medium" color="fg">
          {data2.title}
        </Text>
        </Stack>
      </Box>
        <Stack pos="relative" align="center">
        <Text fontWeight="medium" color="fg.muted">{data2.formattedPrice}</Text>
        </Stack>
    </Box>
        </Flex>
    ) 
}

const data = {
  imageUrl: "/bag1.jpg",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  title: "Bolsa",
  formattedPrice: "R$ 200,00",
  reviewCount: 34,
  rating: 4.5,
}


const data2 = {
  imageUrl: "/bag2.jpg",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  title: "Bolsa",
  formattedPrice: "R$ 50.000,00",
  reviewCount: 34,
  rating: 4.5,
}
const data3 = {
  imageUrl: "/bag3.jpg",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  title: "Bolsa",
  formattedPrice: "$435",
  reviewCount: 34,
  rating: 4.5,
}
const data4 = {
  imageUrl: "/bag4.jpg",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  title: "Bolsa",
  formattedPrice: "$435",
  reviewCount: 34,
  rating: 4.5,
}
