import { TbWriting } from "react-icons/tb";
import Button from '../ui/Button';

import classes from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <TbWriting size='80px' />
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