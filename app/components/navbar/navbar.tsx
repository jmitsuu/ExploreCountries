export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-white hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="/countries" className="text-white hover:underline">
            Countries
          </a>
        </li>
      </ul>
    </nav>
  );
}