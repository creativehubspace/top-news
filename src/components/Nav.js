import Link from 'next/link';
import CartStyles from './styles/NavStyles';

const Nav = () => {
    return (
        <CartStyles>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/business">
                    <a>Business news</a>
                </Link>
            </li>
            <li>
                <Link href="/tech">
                    <a>Tech news</a>
                </Link>
            </li>
            <li>
                <Link href="/sports">
                    <a>Sports news</a>
                </Link>
            </li>
            <li>
                <Link href="/entertainment">
                    <a>Entertainment news</a>
                </Link>
            </li>
            <li>
                <Link href="/science">
                    <a>Science news</a>
                </Link>
            </li>
            <li>
                <Link href="/health">
                    <a>Health news</a>
                </Link>
            </li>
        </CartStyles>
    );
};

export default Nav;