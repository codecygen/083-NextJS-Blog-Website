import { useRef } from 'react';

import Button from '../ui/Button';

import classes from './BlogForm.module.scss';

const BlogForm = (props) => {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const pictureRef = useRef();
    const contentRef = useRef();

    const blogSubmitHandler = event => {
        event.preventDefault();

        const enteredData = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            picture: pictureRef.current.value,
            content: contentRef.current.value
        };

        props.onAddArticle(enteredData);
    }

    return (
        <section className={classes['form-card']} id='blog'>
            <div>
                <form onSubmit={blogSubmitHandler}>
                    <h3>Write a New Blog</h3>
                    <div className={classes['input-div']}>
                        <label htmlFor='title'>Title</label>
                        <input
                            type='text'
                            id='title'
                            placeholder='Blog Title...'
                            ref={titleRef}
                        />
                    </div>

                    <div className={classes['input-div']}>
                        <label htmlFor='description'>Description</label>
                        <input
                            type='text'
                            id='description'
                            placeholder='Blog Description...'
                            ref={descriptionRef}
                        />
                    </div>

                    <div className={classes['input-div']}>
                        <label htmlFor='picture'>Picture</label>
                        <input
                            type='text'
                            id='picture'
                            placeholder='Picture Path...'
                            ref={pictureRef}
                        />
                    </div>

                    <div className={classes['input-div']}>
                        <label htmlFor='content'>Content</label>
                        <textarea
                            type='text'
                            id='content'
                            placeholder='Blog Content...'
                            ref={contentRef}
                        />
                    </div>

                    <Button buttonStyle="2">
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default BlogForm;