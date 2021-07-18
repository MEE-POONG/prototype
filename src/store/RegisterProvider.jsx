import React, { createContext } from "react";
import { useImmerReducer } from "use-immer";
export const RegisterContext = createContext({});

const initialState = {
  register: {
    adviser: "ufh27oa1",
    firstname: "",
    lastname: "",
    line: "",
    bankname: "",
    bankaccount: "",
    phone: "",
    otp: "",
    username: "",
    password: "",
    password2: "",
  },
};

const registerReducer = (draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case "NEW_REGISTER": {
      draft.register = {
        adviser: action.payload.adviser,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        line: action.payload.line,
        bankname: action.payload.bankname,
        bankaccount: action.payload.bankaccount,
        phone: action.payload.phone,
        otp: action.payload.otp,
        username: action.payload.username,
        password: action.payload.password,
        password2: action.payload.password2,
      };
      return;
    }
  }
};

export const RegisterProvider = ({ children }) => {
  const [registerState, registerDispatch] = useImmerReducer(
    registerReducer,
    initialState
  );

  const { register } = registerState;

  const newRegister = (payload) =>
    registerDispatch({ type: "NEW_REGISTER", payload }); // ส่ง type SUB_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

  return (
    <RegisterContext.Provider value={{ register, newRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};
