import BlogForm from "../../components/forms/BlogForm";
import { useRouter } from "next/router";
import classes from "./index.module.scss";

const NewPost = () => {
    const router = useRouter();

    const addArticleHandler = (enteredData) => {
        console.log(enteredData);

        router.replace('/');
    };

    return (
        <section className={classes["new-post"]}>
            <BlogForm onAddArticle={addArticleHandler} />
        </section>
    );
};

export default NewPost;