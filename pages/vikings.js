import Layout from '../comps/Layout'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const liStyle = {
    listStyleType: 'none'
}

const About = props => (
  <Layout>
    <h1>Vikings TV Shows</h1>
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
        color: maroon;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);

About.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=vikings');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default About;
