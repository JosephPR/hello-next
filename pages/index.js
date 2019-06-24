import Layout from '../comps/Layout'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = () => (
<Layout>
  <p>Hello, Click a link above for you favorite show</p>
  <img src="https://media0.giphy.com/media/xUPGGDNsLvqsBOhuU0/200.webp?cid=790b76115d10e8ac4f4c54574926e5be&rid=200.webp"/>
  </Layout>
);

export default Index;
