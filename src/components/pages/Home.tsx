import { memo, useCallback } from "react";
import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { GuidePanel } from "../molecules/home/GuidePanel";
import { GuideImage } from "../molecules/home/GuideImage";

export const Home = memo(() => {
  const navigate = useNavigate();
  const onClickProducts = useCallback(() => navigate("/products"), [navigate]);

  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "0", lg: "12" }}
      py={{ base: "0", lg: "12" }}
    >
      <Stack
        direction={{ base: "column-reverse", lg: "row" }}
        spacing={{ base: "0", lg: "20" }}
      >
        <Box
          width={{ lg: "sm" }}
          transform={{ base: "translateY(-50%)", lg: "none" }}
          bg={{
            base: useColorModeValue("red.50", "gray.700"),
            lg: "transparent"
          }}
          mx={{ base: "6", md: "8", lg: "0" }}
          px={{ base: "6", md: "8", lg: "0" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <GuidePanel onClickProducts={onClickProducts} />
        </Box>
        <GuideImage />
      </Stack>
    </Box>
  );
});
