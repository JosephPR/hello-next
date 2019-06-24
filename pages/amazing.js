import Layout from '../comps/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

const liStyle = {
    listStyleType: 'none'
}

const Amazing = props => (
  <Layout>
    <h1>The Amzing Race</h1>
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
        color: rgb(44, 152, 77);
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);

Amazing.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=the-amazing-race');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Amazing;
