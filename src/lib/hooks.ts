import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";

export function useTodosContext() {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error(
      "TodosContext must be used within a TodosContextProvider component"
    );
  }

  return context;
}
