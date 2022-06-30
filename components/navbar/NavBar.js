import Link from 'next/link';
import Button from '../ui/Button';

import classes from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <h1>Blog Website</h1>
      <div>
        <Button>
          <Link href="/">
            All Blogs
          </Link>
        </Button>

        <Button>
          <Link href="/new-post">
            Write Post
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;