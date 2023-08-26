import { memo } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickProducts: () => void;
  onClickCart: () => void;
};

export const MenuDrawer = memo((props: Props) => {
  const { onClose, isOpen, onClickHome, onClickProducts, onClickCart } = props;
  return (
    <Drawer placement="top" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>
              HOME
            </Button>
            <Button w="100%" onClick={onClickProducts}>
              PRODUCTS
            </Button>
            <Button
              w="100%"
              onClick={onClickCart}
              rightIcon={<FaShoppingCart />}
            >
              CART
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
