import Image from 'next/image';
import logo from '../../../public/Logo.png';
import submit from '../../../public/submit.png';
import Coolicon from '../../../public/coolicon.png';
import vector from '../../../public/Vector.png';
const Footer = () => {
  return (
    <footer className="container mx-auto   bg-white mt-20 mb-10  max-w-[1160px]">
      <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        <div className="mb-6 md:mb-0">
          <a href="https://flowbite.com/" className="flex items-center">
            <Image src={logo} width="80" height="30" alt="logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <p className="mt-5">
            Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non,
            fugit totam vel laboriosam vitae.
          </p>
          <div className="flex gap-2">
            <a
              href="#"
              className="text-gray-50y0 p-3 bg-slate-200 rounded hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="#"
              className="text-gray-500 p-3 bg-slate-200 rounded hover:text-gray-900 dark:hover:text-white"
            >
              <Image src={Coolicon} width="18" height="10" alt="coolicon" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 p-3 bg-slate-200 rounded hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 p-3 bg-slate-200 rounded hover:text-gray-900 dark:hover:text-white"
            >
              <Image src={vector} width="18" height="18" alt="vector" />
              <span className="sr-only">Dribbbel account</span>
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text font-bold text-gray-900 uppercase dark:text-white">
            My Account
          </h2>
          <ul className="text-gray-600 dark:text-gray-400">
            <li className="mb-4">
              <a href="https://flowbite.com/" className="hover:underline">
                Authors
              </a>
            </li>
            <li className="mb-4">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Collection
              </a>
            </li>
            <li className="mb-4">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Author Profile
              </a>
            </li>
            <li className="mb-4">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Create Collection
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 font-bold text-gray-900 uppercase dark:text-white">
            Resources
          </h2>
          <ul className="text-gray-600 dark:text-gray-400">
            <li className="mb-4">
              <a
                href="https://github.com/themesberg/flowbite"
                className="hover:underline "
              >
                Help & Support
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://github.com/themesberg/flowbite"
                className="hover:underline "
              >
                Live Auctions
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://github.com/themesberg/flowbite"
                className="hover:underline "
              >
                Item Details
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://github.com/themesberg/flowbite"
                className="hover:underline "
              >
                Activity
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 font-bold text-gray-900 uppercase dark:text-white">
            Company
          </h2>
          <ul className="text-gray-600 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Our Blog
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Discover
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 font-bold text-gray-900 uppercase dark:text-white">
            Subsribe Us
          </h2>
          <p>Signup for our newsletter to get the latest news in your inbox.</p>

          <div className="relative w-full mt-5">
            <input
              type="search"
              className="block p-3 w-full z-20 px-8 text text-gray-900 bg-gray-100 rounded-l   border border-slate-300 focus:ring-blue-500 focus:border-blue-500    dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Info@yourgmail.com"
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-1 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Image
                className="p-2 rounded-r bg-blue-700"
                src={submit}
                width="37"
                height="0"
                alt="submit"
              />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
