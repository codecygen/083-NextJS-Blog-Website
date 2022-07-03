const Blog = (props) => {
    return (
        <section>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <details>
                <article>
                    {props.content}
                </article>
            </details>
        </section>
    );
};

export default Blog;