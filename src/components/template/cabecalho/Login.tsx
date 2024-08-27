import { IconLogin } from '@tabler/icons-react'
import Link from 'next/link'

export default function Login() {
    return (
        <Link href="/login">
            <div className='flex items-center'>
                <div className='flex flex-col items-center py-4 px-2 border border-transparent hover:border-white'>
                    <div className='text-base leading-4 hidden md:flex'>Olá, faça seu login</div>
                    <div className='text-base leading-6 hidden md:flex'>Contas e Listas</div>
            <IconLogin size={40} stroke={1.25} className=" text-white md:hidden" />
                </div>
            </div>

        </Link>
    )
}