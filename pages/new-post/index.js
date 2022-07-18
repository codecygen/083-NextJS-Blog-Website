import BlogForm from "../../components/forms/BlogForm";
import classes from "./index.module.scss";

const NewPost = () => {
    return (
        <section className={classes["new-post"]}>
            <BlogForm />
        </section>
    );
};

export default NewPost;