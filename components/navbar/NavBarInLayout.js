import NavBar from "./NavBar";

const NavBarInLayout = (props) => {
    return (
        <>
            <NavBar />
            <main>
                {props.children}
            </main>
        </>
    );
};

export default NavBarInLayout;