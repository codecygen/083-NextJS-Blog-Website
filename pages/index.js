import AllBlogs from '../components/blogs/AllBlogs';
import { MongoClient } from 'mongodb';

const HomePage = (props) => {
  
  return (
    <>
      <AllBlogs blogList={props.posts} />
    </>
  );
};

export const getStaticProps = async () => {
  const mongoAtlasConnectionLink = process.env.MONGODB_ATLAS_LINK;

  const connection = await MongoClient.connect(mongoAtlasConnectionLink);
  const db = connection.db();

  const postsCollection = db.collection('posts');
  const fetchedPosts = await postsCollection.find().toArray();
  connection.close();

  return {
      props: {
        posts: fetchedPosts.map(fetchedPost => ({
          id: fetchedPost._id.toString(),
          picture: fetchedPost.picture,
          content: fetchedPost.content,
          description: fetchedPost.description,
          title: fetchedPost.title
        }))
      }
  };
};

export default HomePage;