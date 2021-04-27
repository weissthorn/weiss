import Link from 'next/link';

export default function Sidebar({ title }) {
  return (
    <div className="sidebar">
      <div className="title">{title}</div>
      <Link href="/">
        <a className="menu">Site Meta</a>
      </Link>
      <Link href="/">
        <a className="menu">Users</a>
      </Link>
      <Link href="/">
        <a className="menu">Communities</a>
      </Link>
      <Link href="/">
        <a className="menu">Coins</a>
      </Link>
      <Link href="/">
        <a className="menu">Analytics</a>
      </Link>
    </div>
  );
}
