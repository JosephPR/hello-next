import Layout from '../comps/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

// const liStyle = {
//     listStyleType: 'none'
// }
//
const Elephant = props => (
  <Layout>
   <h1>The Elephant Race</h1>
</Layout>
);

//     <ul>
//       {props.elephants.map(elephant => (
//         <li key={elephant.index}>
//           <Link as={`/e/${elephant.index}`} href={`/elephants?index=${elephant.index}`}>
//             <a>{elephant.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//     <style jsx>{`
//    h1,
//    a {
//      font-family: 'Arial';
//    }
//
//    ul {
//      padding: 0;
//    }
//
//    li {
//      list-style: none;
//      margin: 5px 0;
//    }
//
//    a {
//      text-decoration: none;
//      color: rgb(44, 152, 77);
//    }
//
//    a:hover {
//      opacity: 0.6;
//    }
//  `}</style>
//
// Elephant.getInitialProps = async function() {
//   const res = await fetch('https://elephant-api.herokuapp.com/elephants');
//   const data = await res.json();
//   console.log(`Show data fetched. Count: ${data.length}`);
//
//   return {
//     elephants: data.map(entry => entry.elephant)
//   };
// };
//
export default Elephant;
