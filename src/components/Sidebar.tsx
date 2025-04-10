
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="fixed left-0 top-0 h-full w-[250px] bg-[#0f0f0f] p-5"
    >
      <h2 className="text-white text-lg font-bold mb-6">Dashboard</h2>
      <nav>
        <ul>
          <li className="py-2">
            <Link href="/" className="text-white">
              Overview
            </Link>
          </li>
          <li className="py-2">
            <Link href="/budget" className="text-white">
              Budget
            </Link>
          </li>
          <li className="py-2">
            <Link href="/transactions" className="text-white">
              Transactions
            </Link>
          </li>
          <li className="py-2">
            <Link href="/chatbot" className="text-white">
              Chatbot
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}