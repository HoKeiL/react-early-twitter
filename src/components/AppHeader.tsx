import NavItem from "./NavItem";

function AppHeader(): JSX.Element {
  return (
    <header>
      <h2>twitter</h2>
      <nav>
        <NavItem label={"updates"} />
        <span> | </span>
        <NavItem label={"archive"} />
        <span> | </span>
        <NavItem label={"preferences"} />
        <span> | </span>
        <NavItem label={"help"} />
        <span> | </span>
        <NavItem label={"sign-out"} />
      </nav>
    </header>
  );
}

export default AppHeader;
