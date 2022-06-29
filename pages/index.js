import GetAllBlogs from '../components/blogs/GetAllBlogs';
import { MongoClient } from 'mongodb';

const HomePage = (props) => {
  return (
    <>
      <h1>Home Page</h1>
      <GetAllBlogs />
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

  console.log(fetchedPosts);

  return {
      props: {
        posts: 'aras' 
      }
  };
};

export default HomePage;