import React from "react";
import { fireEvent } from "@testing-library/react";
import { AddCartButton } from "./AddCartButton"; // テスト対象のコンポーネントをインポート
import { render, screen } from "../../../utils/customRenderer"; // カスタムレンダラーをインポート
import '@testing-library/jest-dom'

import { CartItemProvider } from "../../../providers/CartItemProvider";


test("AddCartButton correctly adds an item to the cart", () => {
    // レンダリング
    const { getByRole } = render(
        <CartItemProvider>
            <AddCartButton id={1} />
        </CartItemProvider>);

    // ボタン要素を取得して，ボタンが存在することを確認
    const cartButton = getByRole("button")
    expect(cartButton).toBeInTheDocument();

    // カートに入れるボタンをクリック    
    fireEvent.click(cartButton);

    // ナビゲーションが正しく実行されたかを確認
    expect(window.location.pathname).toBe("/cart");

});


