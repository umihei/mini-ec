import React from "react";
import { Header } from "./Header";

import { render, screen, fireEvent } from "../../../utils/customRenderer"; // カスタムレンダラーをインポート

test("Headerの正常性確認", () => {

    // レンダリング
    const { getByText, getByRole } = render(<Header />);

    // "HOME" リンクを押して，ホームに戻る
    fireEvent.click(getByText("Home"));

    // HOMEに戻っているかを確認
    expect(window.location.pathname).toBe("/home");

    // Productsリンクを押す
    fireEvent.click(getByText("Products"));

    // 商品一覧画面に遷移していることを確認
    expect(window.location.pathname).toBe("/products")

    // Cartリンクを押す
    fireEvent.click(getByText("Cart"))

    // cart画面に遷移していることを確認
    expect(window.location.pathname).toBe("/cart")

    // Mini EC(title)を押下
    fireEvent.click(getByRole("heading", { name: "Mini EC" }))

    // Homeに遷移することを確認
    expect(window.location.pathname).toBe("/home")

});
