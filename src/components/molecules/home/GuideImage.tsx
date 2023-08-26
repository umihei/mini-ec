import { memo } from "react";
import { Flex, Image, Skeleton } from "@chakra-ui/react";

export const GuideImage = memo(() => {
  return (
    <Flex flex="1" overflow="hidden">
      <Image
        src="https://source.unsplash.com/hgtWvsq5e2c"
        alt="Lovely Image"
        fallback={<Skeleton />}
        maxH="450px"
        minW="300px"
        objectFit="cover"
        flex="1"
      />
      <Image
        display={{ base: "none", sm: "initial" }}
        src="https://source.unsplash.com/2XcbGfYShfk"
        alt="Lovely Image"
        fallback={<Skeleton />}
        maxH="450px"
        objectFit="cover"
      />
    </Flex>
  );
});
