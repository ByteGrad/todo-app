import DeleteButton from "./DeleteButton";
import { useTodosContext } from "../lib/hooks";

export default function TodoList() {
  const { todos, toggleTodo, isLoading } = useTodosContext();

  return (
    <ul className="col-[1/2] row-[2/3] bg-[#fff] [scrollbar-width:thin] relative">
      {isLoading && (
        <li className="h-full flex justify-center items-center font-semibold">
          Loading todos...
        </li>
      )}

      {todos.length === 0 ? (
        <li className="h-full flex justify-center items-center font-semibold">
          Start by adding a todo
        </li>
      ) : null}

      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className={`flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-b-[rgba(0,0,0,0.08)]`}
            onClick={() => {
              toggleTodo(todo.id);
            }}
          >
            <span
              className={`${todo.completed ? "line-through text-[#ccc]" : ""}`}
            >
              {todo.content}
            </span>

            <DeleteButton id={todo.id} />
          </li>
        );
      })}
    </ul>
  );
}
