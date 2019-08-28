import Link from 'next/link';

const Nav = () => {

    return (
        <>
            <Link href="/business">
                <a>Business news</a>
            </Link>
            <Link href="/tech">
                <a>Tech news</a>
            </Link>
            <Link href="/sports">
                <a>Sports news</a>
            </Link>
            <Link href="/entertainment">
                <a>Entertainment news</a>
            </Link>
            <Link href="/science">
                <a>Science news</a>
            </Link>
            <Link href="/health">
                <a>Health news</a>
            </Link>
        </>
    );
};

export default Nav;