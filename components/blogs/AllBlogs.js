import BlogCart from './BlogCart';

const AllBlogs = (props) => {
  console.log(props.blogList);

  const allBlogs = props.blogList.map(blog => (
    <BlogCart 
      key={blog.id}
      picture={blog.picture}
      content={blog.content}
      description={blog.description}
      title={blog.title}
    />
  ));


  return (
    <>
      <h1>All Blogs</h1>
      {allBlogs}
    </>

  );
};

export default AllBlogs;