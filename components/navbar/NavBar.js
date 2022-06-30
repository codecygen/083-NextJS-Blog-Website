import Button from '../ui/Button';

import classes from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <h1>Blog Website</h1>
      <Button>Write Blog</Button>
    </nav>
  );
};

export default NavBar;