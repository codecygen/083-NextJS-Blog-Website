import Link from 'next/link';
import Button from '../ui/Button';

import classes from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <h1>Blog Website</h1>
      <div>
        <Button buttonStyle="1" link="/">
          All Posts
        </Button>

        <Button buttonStyle="1" link="/new-post">
          Write Post
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;