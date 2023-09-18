import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { DiscoverLink } from "./DiscoverLink";

test("DiscoverLinkを押下されると，商品一覧へ遷移するか", () => {
    // onClickProducts 関数のモックを作成
    const onClickProductsMock = jest.fn();

    // レンダリング
    const { getByText } = render(<DiscoverLink onClickProducts={onClickProductsMock} />);

    // "Discover now" リンクをクリック
    fireEvent.click(getByText("Discover now"));

    // onClickProducts 関数が正しく呼び出されたことを確認
    expect(onClickProductsMock).toHaveBeenCalledTimes(1);
});
