import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <>
      <div className="relative flex flex-row justify-end ">
        <span
          className="flex flex-row justify-end gap-5
        dark:text-textDark text-textLight font-bold
        items-center font-good fixed dark:bg-backgroundDark bg-backgroundLight w-full pt-12 -mt-12"
        >
          <a href="/">Home</a>
          <a href="/login">About</a>
          <a href="/login">Contact us</a>
          <a href="/login">Login</a>
          <ThemeSwitcher />
        </span>
      </div>
    </>
  );
};
export default Navbar;
