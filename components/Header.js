import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="container">
        <div className="flex items-center justify-between py-6 w-full">
          <div>Logo</div>
          <ul className="flex items-center gap-3">
            <li>
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
