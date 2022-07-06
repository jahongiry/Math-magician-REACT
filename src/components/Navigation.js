import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

function Navigation() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/">
        Math Magicians
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="calculator">Calculator</Link>
          </li>
          <li>
            <Link to="quote">Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
