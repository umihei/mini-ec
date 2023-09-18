import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { OrderSummary } from "./OrderSummary";

test("OrderSummary正常性確認", () => {

    // onClickProducts 関数のモックを作成
    const onClickProductsMock = jest.fn();
    const totalPrice = 2000

    // レンダリング
    const { getByText } = render(<OrderSummary onClickProducts={onClickProductsMock} totalPrice={totalPrice} />);

    // 適切にフォーマットされた価格表記を取得
    const formattedPrice = getByText("￥2,000");

    // フォーマットされた価格表記がDocumentに存在していることを確認
    expect(formattedPrice).toBeInTheDocument;

    //お買い物を続けるリンクを押下
    fireEvent.click(getByText("お買い物を続ける"))

    //onClickProductsMock関数がコールされていることを確認
    expect(onClickProductsMock).toHaveBeenCalledTimes(1)

});
