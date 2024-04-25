import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Films from "./components/films";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const RootComponent = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Route path="/films" component={Films} />
    </BrowserRouter>
  </QueryClientProvider>
);

export default RootComponent;
