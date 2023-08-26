import { memo } from "react";
import { Box, Stack, Text, Button, Center } from "@chakra-ui/react";

type Props = {
  onClickProducts: () => void;
};

export const NoItemInCart = memo((props: Props) => {
  const { onClickProducts } = props;
  return (
    <Center h="300px">
      <Box p={4} borderWidth="1px" borderRadius="md">
        <Stack spacing={10}>
          <Text>カートに商品がありません</Text>
          <Button colorScheme="yellow" onClick={onClickProducts}>
            お買い物に戻る
          </Button>
        </Stack>
      </Box>
    </Center>
  );
});
