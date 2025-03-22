import ReactIcon from "../assets/images/reactjs-icon.png";

export default function Navbar(){
    return (
        <>
            <header>
                <nav>
                    <img src={ReactIcon} alt="React Logo" />
                    <span>ReactFacts</span>
                </nav>
            </header>
        </>
    );
}