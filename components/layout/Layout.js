import NavBar from "./NavBar";
import Footer from "./Footer";

import classes from './Layout.module.scss';

const Layout = (props) => {
    return (
        <div className={classes.overall}>
            <NavBar />
            <main className={classes.main}>
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;