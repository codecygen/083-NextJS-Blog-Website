import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <>
            <NavBar />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;