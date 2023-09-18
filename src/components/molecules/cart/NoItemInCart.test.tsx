import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { NoItemInCart } from "./NoItemInCart";

test("お買い物に戻るボタンを押下して商品一覧に戻る", () => {

    // onClickProducts 関数のモックを作成
    const onClickProductsMock = jest.fn();

    // レンダリング
    const { getByText } = render(<NoItemInCart onClickProducts={onClickProductsMock} />);

    // "Discover now" リンクをクリック
    fireEvent.click(getByText("お買い物に戻る"));

    // onClickProducts 関数が正しく呼び出されたことを確認
    expect(onClickProductsMock).toHaveBeenCalledTimes(1);
});
