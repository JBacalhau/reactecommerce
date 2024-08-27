import ItemCarrinho from "@/data/model/ItemCarrinho"
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react"
import Image from "next/image"

export interface AreaItemCarrinhoProps {
    item: ItemCarrinho
    adicionar?: (item: ItemCarrinho) => void
    remover?: (item: ItemCarrinho) => void
}

export default function AreaItemCarrinho(props: AreaItemCarrinhoProps) {
    return (
        <div className="flex lg:flex-row flex-col items-center gap-5 bg-white rounded-md overflow-hidden m-auto w-[85%] lg:w-full ">
            <div className="relative w-60 h-60 lg:w-28 lg:h-28 m-10 lg:m-0 ">
                <Image
                    src={props.item.produto.imagem}
                    alt={props.item.produto.nome}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col justify-center flex-1 px-5 lg:px-0 order-3 lg:order-2 lg:mt-0 mt-5 lg:mb-0 mb-10">
                <span className="text-xl font-blond">{props.item.produto.nome}</span>
                <span className="text-sm text-zinc-800">{props.item.produto.descricao}</span>
                <div className="flex items-center gap-2 lg:mt-2 text-zinc-800 text-sm lg:text-lg font-semibold lg:px-0 px-5 lg:justify-start justify-center mt-5">
                    <span>R$ {props.item.produto.preco.toFixed(2)}</span>
                    <IconX size={20} />
                    <span>{props.item.quantidade}</span>
                    <span>=</span>
                    <span className="text-black lg:text-xl text-base font-blond">
                        R$ {(props.item.produto.preco * props.item.quantidade).toFixed(2)}
                    </span>
                </div>
            </div>
            <div className="flex gap-2 items-center px-5 order-2 lg:order-3">
                <button onClick={() => props.remover?.(props.item)}>
                    <IconMinus />
                </button>
                <span className="flex px-4 py-2 rounded-md bg-gray-300">
                    {props.item.quantidade}
                </span>
                <button onClick={() =>  props.adicionar?.(props.item)}>
                    <IconPlus />
                </button>
            </div>
        </div>
    )
}
