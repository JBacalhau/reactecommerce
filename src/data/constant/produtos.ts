import Produto from '@/data/model/Produto'
//chatgpt gerou um json as imagens são trasidas do images.unsplash.com 
//é necessáio ir à configuração do next e dar premissão
const produtos: Produto[] = [
    {
        id: 1,
        nome: 'Smartphone XYZ',
        descricao: 'Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera tripla.',
        preco: 1999.9,
        imagem: 'https://images.unsplash.com/photo-1695048132832-b41495f12eb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        nome: 'Notebook ABC',
        descricao: 'Notebook com processador Intel i7, 16GB de RAM e 512GB SSD.',
        preco: 4999.9,
        imagem: 'https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 3,
        nome: 'Fone de Ouvido Bluetooth',
        descricao: 'Fone de ouvido Bluetooth com cancelamento de ruído e bateria de longa duração.',
        preco: 299.9,
        imagem: 'https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 4,
        nome: 'Smartwatch DEF',
        descricao:
            'Smartwatch com monitoramento de atividades físicas e notificações de smartphone.',
        preco: 799.9,
        imagem: 'https://images.unsplash.com/photo-1542541864-4abf21a55761?q=80&w=1903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 5,
        nome: 'Câmera Digital GHI',
        descricao: 'Câmera digital com 20MP, zoom óptico de 10x e gravação de vídeo em 4K.',
        preco: 2499.9,
        imagem: 'https://images.unsplash.com/photo-1526413494904-7a15c807b00e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
        id: 6,
        nome: 'Drone XY',
        descricao: 'Tempo Máximo de Voo: 34 Minutos, gravação vertical em HDR em 4K/60 fp e vídeos em FHD a até 20 km.',
        preco: 8347.5,
        imagem: 'https://images.unsplash.com/photo-1504890195358-94a018166410?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

export default produtos
