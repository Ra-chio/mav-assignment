import HeaderLogo from "../static/header_logo.png";

export default function Header() {
    return (
        <div className="w-screen h-auto flex flex-col justify-center items-start gap-3 md:flex-row md:justify-between md:items-center px-10 py-3 shadow-sm border-b-2 border-gray">
            <img src={HeaderLogo} alt="maveric" className="min-h-max" />
            <a
                href="/"
                className="text-xl font-bold flex items-end text-blue gap-1 "
            >
                <p className="hidden md:block">Login</p>
                <i className="fa-solid fa-right-to-bracket pb-1" />
            </a>
        </div>
    );
}
