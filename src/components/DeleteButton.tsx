import { useTodosContext } from "../lib/hooks";

export default function DeleteButton({ id }) {
  const { deleteTodo } = useTodosContext();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        deleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
