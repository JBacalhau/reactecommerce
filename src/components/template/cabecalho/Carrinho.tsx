import useCarrinho from "@/data/hooks/useCarrinho";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";



export default function Carrinho() {
  const { qtdeDeItens } = useCarrinho()
  return (
    <Link href="/carrinho">
      <div className="flex relative border border-transparent hover:border-white p-5">
        <IconShoppingCart size={32} stroke={1} />
        <div className="absolute top-2 right-4 md:right-[82px] w-6 h-6 bg-red-500 rounded-full
        flex justify-center items-center text-xs 
        ">{qtdeDeItens}</div>
        <div className="md:flex hidden">Carrinho</div>
      </div>
    </Link>
  )
}