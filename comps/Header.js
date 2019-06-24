import Link from 'next/link';
import Button from '@material-ui/core/Button';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <Button color="primary">Home</Button>
    </Link>
    <Link href="/batman">
      <Button color="primary">Batman</Button>
    </Link>
    <Link href="/vikings">
      <Button color="primary">Vikings</Button>
    </Link>
    <Link href="/amazing">
      <Button color="primary">Amazing Race</Button>
    </Link>
    <Link href="/elephants">
      <Button color="primary">elephants</Button>
    </Link>

  </div>
);

export default Header;
