import React, { createContext } from "react";
import { useImmerReducer } from "use-immer";
export const RegisterShowFormContext = createContext({});

const initialState = {
  registerShowForm: 0,
};

const registerShowFormReducer = (draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case "NEW_REGISTERSHOWFORM": {
      draft.registerShowForm = action.payload;
      return;
    }
  }
};

export const RegisterShowFormProvider = ({ children }) => {
  const [registerShowFormState, registerShowFormDispatch] = useImmerReducer(
    registerShowFormReducer,
    initialState
  );

  const { registerShowForm } = registerShowFormState;

  const newRegisterShowForm = (payload) =>
    registerShowFormDispatch({ type: "NEW_REGISTERSHOWFORM", payload }); // ส่ง type SUB_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

  return (
    <RegisterShowFormContext.Provider
      value={{ registerShowForm, newRegisterShowForm }}
    >
      {children}
    </RegisterShowFormContext.Provider>
  );
};
