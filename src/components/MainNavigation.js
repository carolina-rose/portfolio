import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/homepage">Strona Główna</NavLink>
          </li>
          <li>
            <NavLink to="/about">O mnie</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projekty</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Kontakt</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
