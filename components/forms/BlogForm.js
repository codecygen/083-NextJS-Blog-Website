import classes from './BlogForm.module.scss';

const BlogForm = () => {
  return (
    <section className={classes['form-card']} id='blog'>
            <div>
                <form>
                    <h3>Write a New Blog</h3>
                    <div className={classes['input-div']}>
                        <label htmlFor='title'>Title</label>
                        <input
                            type='text'
                            id='title'
                            placeholder='Blog Title...'
                        />
                    </div>

                    <div className={classes['input-div']}>
                        <label htmlFor='description'>Description</label>
                        <input
                            type='text'
                            id='description'
                            placeholder='Blog Description...'
                        />
                    </div>

                    <div className={classes['input-div']}>
                        <label htmlFor='content'>Content</label>
                        <textarea
                            type='text'
                            id='content'
                            placeholder='Blog Content...'
                        />
                    </div>

                    {/* <Button><a href>Shoot!</a></Button> */}
                </form>
            </div>
        </section>
  );
};

export default BlogForm;