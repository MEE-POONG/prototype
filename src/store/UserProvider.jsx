import React, { createContext } from "react";
import { useImmerReducer } from "use-immer";
export const UserContext = createContext({});

const initialState = {
  user: {
    id: "",
    adviser: "",
    AGID: "",
    usernameAG: "",
    passwordAG: "",
    username: "",
    status: "",
    firstname: "",
    lastname: "",
    bankName: "",
    bankAccount: "",
    tel: "",
    line: "",
    statusFlag: "",
    createdAt: "",
    updatedAt: "",
  },
};

const userReducer = (draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case "NEW_USER": {
      draft.user = {
        id: action.payload.id,
        adviser: action.payload.adviser,
        status: action.payload.status,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        line: action.payload.line,
        bankName: action.payload.bankName,
        bankAccount: action.payload.bankAccount,
        tel: action.payload.tel,
        statusFlag: action.payload.statusFlag,
        username: action.payload.username,
        usernameAG: action.payload.usernameAG,
        passwordAG: action.payload.passwordAG,
        AGID: action.payload.AGID,
        createdAt: action.payload.createdAt,
        updatedAt: action.payload.updatedAt,
      };
      return;
    }
  }
};

export const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useImmerReducer(userReducer, initialState);

  const { user } = userState;

  const newUser = (payload) => userDispatch({ type: "NEW_USER", payload }); // ส่ง type SUB_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

  return (
    <UserContext.Provider value={{ user, newUser }}>
      {children}
    </UserContext.Provider>
  );
};
