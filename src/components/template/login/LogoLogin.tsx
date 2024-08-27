import { IconBrandAmazon } from '@tabler/icons-react'
import Link from 'next/link'

export default function LogoLogin() {
    return (
        <Link href="/">
            <div className='flex flex-col mt-5 items-center'>
                <div className='text-3xl leading-7 font-bold'>React</div>
                <div className='text-3xl leading-3 font-bold'>e-Commerce</div>
                <IconBrandAmazon size={70} stroke={1.5} className="-mt-4 text-green-400" />
            </div>
        </Link>
    )
}
