'use client'

import CartaoProduto from "@/components/produto/CartaoProduto"
import Pagina from "@/components/template/cabecalho/Pagina"
import produtos from "@/data/constant/produtos"




export default function Home() {
    
    return (
        <Pagina>
            <div className='flex gap-5 flex-wrap justify-center'>
            {produtos.map(produto => (
                <CartaoProduto key={produto.id} produto={produto} />
            ))}
                
            </div>
        </Pagina>
    )
}
