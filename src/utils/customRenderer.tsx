// customRenderer.tsx
import React, { ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CartItemProvider } from "../../../providers/CartItemProvider"; // GlobalContextのProviderをインポート

interface AllTheProvidersProps {
    children: ReactElement;
}

const AllTheProviders: React.FC<AllTheProvidersProps> = ({ children }) => {
    return (
        <ChakraProvider>
            <Router>
                {/* <CartItemProvider> */}
                {children}
                {/* </CartItemProvider> */}
            </Router>
        </ChakraProvider>
    );
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper">,
): RenderResult => {
    return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";

export { customRender as render };
