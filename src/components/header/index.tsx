import ThemeToggler from "./items/theme-toggler";

export default function Header() {
  return (
    <header>
      <div className="container flex flex-row justify-between py-10 mx-auto">
        <div>{/* Left Side */}</div>
        <div>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}
