import React, {createContext} from "react";
import {useImmerReducer} from "use-immer";
export const ExampleContext = createContext({});

const initialState = {
  example: 1,
};

const exampleReducer = (draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case "NEW_EXAMPLE": {
      draft.example = action.payload;
      return;
    }
  }
};

export const ExampleProvider = ({children}) => {
  const [exampleState, exampleDispatch] = useImmerReducer(exampleReducer, initialState);

  const {example} = exampleState;

  const newExample = (payload) => exampleDispatch({type: "NEW_EXAMPLE", payload}); // ส่ง type SUB_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

  return (
    <ExampleContext.Provider value={{example, newExample}}>
      {children}
    </ExampleContext.Provider>
  );
};
