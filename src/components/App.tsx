import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="font-sans bg-[#f1d4b3] min-h-screen flex justify-center items-center flex-col">
      <BackgroundHeading />

      <main className="relative w-[972px] shadow-[0_4px_4px_rgb(0,0,0,0.08)] h-[636px] bg-[#fff] rounded-[8px] overflow-hidden grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]">
        <Header />
        <TodoList />
        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}

export default App;
