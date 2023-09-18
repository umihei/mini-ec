import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MenuDrawer } from "./MenuDrawer";

test("MenuDrawerの正常性確認", () => {

    // 関数のモックを作成
    const onCloseMock = jest.fn()
    const isOpen = true
    const onClickHomeMock = jest.fn()
    const onClickProductsMock = jest.fn();
    const onClickCartMock = jest.fn()

    // レンダリング
    const { getByText } = render(<MenuDrawer onClickProducts={onClickProductsMock} onClose={onCloseMock} isOpen={isOpen} onClickHome={onClickHomeMock} onClickCart={onClickCartMock} />);

    // "HOME" ボタンを押して，ホームに戻る
    fireEvent.click(getByText("HOME"));

    // onClickProducts 関数が正しく呼び出されたことを確認
    expect(onClickHomeMock).toHaveBeenCalledTimes(1);

    fireEvent.click(getByText("PRODUCTS"));

    // onClickProducts 関数が正しく呼び出されたことを確認
    expect(onClickProductsMock).toHaveBeenCalledTimes(1);

    //CARTボタンを押す
    fireEvent.click(getByText("CART"))

    // onClickCart関数が呼び出されたことを確認
    expect(onClickCartMock).toHaveBeenCalledTimes(1)

});
