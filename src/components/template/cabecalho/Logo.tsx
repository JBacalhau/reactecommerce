import { IconBrandAmazon } from '@tabler/icons-react'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/">
            <div className='flex flex-col items-center py-2 px-1 border border-transparent hover:border-white'>
                <div className='text-lg leading-4'>React</div>
                <div className='text-lg leading-3 '>e-Commerce</div>
                <IconBrandAmazon size={40} stroke={1.25} className="-mt-3 text-green-400 " />
            </div>
        </Link>
    )
}
