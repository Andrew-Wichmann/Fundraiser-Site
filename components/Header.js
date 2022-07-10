import Link from 'next/link';

export default function Header({ title }) {
  return <div className="header">
    <div className="header-left">
      <a id="header-logo">{title}</a>
      <Link className="active" href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
    </div>
    <div class="header-right">
      <a href="#login">Log in / Sign up</a>
    </div>
  </div>
}
