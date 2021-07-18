import React, { cloneElement } from "react";

// import providers
import { CounterProvider } from "./CounterProvider";
import { ResultsErrorProvider } from "./ResultsErrorProvider";
import { ExampleProvider } from "./ExampleProvider";
import { RegisterProvider } from "./RegisterProvider";
import { RegisterShowFormProvider } from "./RegisterShowFormProvider";
import { UserProvider } from "./UserProvider";
function ProviderComposer({ contexts, children }) {
  return contexts.reduce(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children
  );
}
export default function ContextProvider({ children }) {
  return (
    <ProviderComposer
      // add providers to array of contexts
      contexts={[
        <CounterProvider />,
        <ResultsErrorProvider />,
        <ExampleProvider />,
        <RegisterProvider />,
        <RegisterShowFormProvider />,
        <UserProvider />,
      ]}
    >
      {children}
    </ProviderComposer>
  );
}
