import { memo, useCallback } from "react";
import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { MenuIconButton } from "../../../components/atoms/button/MenuIconButton";
import { MenuDrawer } from "../../../components/molecules/MenuDrawer";

export const Header = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/home"), [navigate]);
  const onClickProducts = useCallback(() => navigate("/products"), [navigate]);
  const onClickCart = useCallback(() => navigate("/cart"), [navigate]);

  return (
    <>
      <Flex
        as="nav"
        bg="orange.300"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            Mini EC
          </Heading>
        </Flex>

        <Flex
          align="center"
          fontSize="sm"
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickHome}>Home</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickProducts}>Products</Link>
          </Box>
          <Link onClick={onClickCart}>Cart</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickProducts={onClickProducts}
        onClickCart={onClickCart}
      />
    </>
  );
});
