const Blog = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <details>{props.content}</details>
        </>
    );
};

export default Blog;