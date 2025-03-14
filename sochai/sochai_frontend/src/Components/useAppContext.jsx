import { createContext, useContext } from "react";

export const AppContext = createContext(); // ✅ Export AppContext

export function useAppContext() {
  return useContext(AppContext);
}
