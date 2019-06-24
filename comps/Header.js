import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Batman</a>
    </Link>
    <Link href="/vikings">
      <a style={linkStyle}>Vikings</a>
    </Link>
    <Link href="/amazing">
      <a style={linkStyle}>Amazing Race</a>
    </Link>
  </div>
);

export default Header;
