
import Carrinho from "./Carrinho";
import Login from "./Login";
import Logo from "./Logo";



export default function Cabecalho() {
    return (
        <header
            className="
                flex justify-between items-center
                bg-zinc-800 h-20 px-10
                text-white
            "
        >

            <Logo />
            <div className="flex items-center">
                <Login />
                <Carrinho />
            </div>
        </header>
    )
}