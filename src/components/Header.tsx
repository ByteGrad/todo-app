import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-b-[rgba(0,0,0,0.04)] flex justify-between items-center px-[28px] py-[0]">
      <Logo />

      <Counter />
    </header>
  );
}
