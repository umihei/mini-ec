import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MenuIconButton } from "./MenuIconButton";

test("MenuIconButton calls onOpen when clicked", () => {
    // onOpen 関数のモックを作成
    const onOpenMock = jest.fn();

    // レンダリング
    const { getByLabelText } = render(<MenuIconButton onOpen={onOpenMock} />);

    // メニューアイコンボタンをクリック
    fireEvent.click(getByLabelText("menu"));

    // onOpen 関数が正しく呼び出されたことを確認
    expect(onOpenMock).toHaveBeenCalledTimes(1);
});
