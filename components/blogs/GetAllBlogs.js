import fetchLink from '../../data/dummy-database.json';

const GetAllBlogs = (props) => {
  return (
    <div>{props.data}</div>
  );
};

export const getStaticProps = async () => {
    console.log('aras');
    const data = fetchLink.json();
    console.log(data);
    console.log('aras');

    return {
        props: {
          data: data  
        }
    };
};

export default GetAllBlogs;