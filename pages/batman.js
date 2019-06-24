import Layout from '../comps/Layout'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


const liStyle = {
    listStyleType: 'none'
}


const Batman = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li style={liStyle} key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: rgb(13, 27, 23);
      }

      a:hover {
        color: rgb(201, 200, 50);
        opacity: 0.6;
      }
    `}</style>

  </Layout>
);

Batman.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Batman;
