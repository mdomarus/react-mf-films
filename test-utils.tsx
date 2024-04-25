import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RenderOptions, render } from "@testing-library/react";
import React, { JSXElementConstructor, ReactElement, ReactNode } from "react";

const AllProviders = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });

    return (<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>)
}

const customRender = (ui: ReactElement<any, string | JSXElementConstructor<any>>, options?: RenderOptions) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
