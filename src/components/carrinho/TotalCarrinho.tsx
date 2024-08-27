import ItemCarrinho from '@/data/model/ItemCarrinho'

export interface TotalCarrinhoProps {
    itens: ItemCarrinho[]
}

export default function TotalCarrinho(props: TotalCarrinhoProps) {
    const total = props.itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0)
    return (
        <div className="flex items-center justify-between bg-white rounded-md p-7 m-auto w-[85%] lg:w-full">
            <div className="flex flex-col justify-between">
                <span className=" text-zinc-800">Total</span>
                <span className="lg:text-3xl text-xl font-bold">R$ {total.toFixed(2)}</span>
            </div>
            <button className="bg-green-400  hover:bg-green-500 px-4 py-2 rounded-full ">Finalizar</button>
        </div>
    )
}
