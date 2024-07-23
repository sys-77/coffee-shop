import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 dark:text-white">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/contact" className="text-gray-500 dark:text-white hover:text-green-500 transition duration-300">Contact</Link>
            <Link href="/privacy" className="text-gray-500 dark:text-white hover:text-green-500 transition duration-300">Privacy</Link>
            <Link href="/security" className="text-gray-500 dark:text-white hover:text-green-500 transition duration-300">Security</Link>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 dark:text-white hover:text-blue-500"><span className="sr-only">Facebook</span>FB</a>
            <a href="#" className="text-gray-500 dark:text-white hover:text-blue-400"><span className="sr-only">Twitter</span>TW</a>
            <a href="#" className="text-gray-500 dark:text-white hover:text-pink-500"><span className="sr-only">Instagram</span>IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
