import Link from 'next/link';
import PhoneNavbar from './phone-navbar';

const Navbar = () => {

    return (
        <nav className="bg-gray-50 dark:bg-gray-900 w-full z-20">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLogo />
                <div>
                    <NavLinks />
                    <NavIcons />
                </div>

            </div>
        </nav>
    );
};

const NavLogo = () => {
    return (
        <Link
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
        >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Logo
            </span>
        </Link>
    )
}

const NavLinks = () => {
    return (
        <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
        >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 font-semibold">
                <li>
                    <Link
                        href="/"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        aria-current="page"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/product"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Products
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        href="/auth/register"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Register
                    </Link>
                </li>
                <li>
                    <Link
                        href="/auth/login"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const NavIcons = () => {
    return (
        <div className="flex gap-2 md:gap-0 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <PhoneNavbar />
        </div>
    )
}

export default Navbar;
