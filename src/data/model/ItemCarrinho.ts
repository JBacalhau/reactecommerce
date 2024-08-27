import Produto from "./Produto";

export default interface ItemCarrinho {
    produto: Produto //ao defenir produto ele faz a importação
    quantidade: number
}