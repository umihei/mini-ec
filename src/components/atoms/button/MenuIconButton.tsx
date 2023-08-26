import { memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton = memo((props: Props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="menu"
      icon={<HamburgerIcon />}
      variant="unstyled"
      size="sm"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
