
import Link from "next/link";
import { RodapeLogin } from "../template/login/RodapeLogin";



export function AreaLogin() {

    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='max-w-[350px] h-auto bg-white p-8 rounded-lg border border-zinc-400'>

                    <h4 className="text-3xl font-semibold mb-5 ">Fazer login</h4>
                    <form className="flex flex-col gap-y-4 text-xs font-semibold ">
                        <label>
                            E-mail ou número de telefone celular
                            <input type="text" name="name" className="border border-zinc-800 text-base w-full font-normal rounded-md mt-1 px-2 py-1" />
                        </label>
                        <input type="submit" value="Continuar" className='bg-green-400 hover:bg-green-500 rounded-full py-2 mb-5 cursor-pointer' />
                    </form>
                    <p className="text-xs">Ao continuar, você concorda com as  Condições de Uso do React e-Commerce. Por favor verifique a Notificação de Privacidade, Notificação de Cookies e a Notificação de Anúncios Baseados em Interesse. </p>

                </div>
                <div className='max-w-[350px] mt-6'>
                    <div className="flex justify-center items-center">
                        <div className="h-px w-20 bg-zinc-400"></div>
                        <div className="mx-2 text-xs text-zinc-800">Novo no React e-commerce?</div>
                        <div className="h-px w-20 bg-zinc-400"></div>

                    </div>
                </div>
                <Link className='text-xs border border-zinc-400 bg-white hover:bg-slate-200 rounded-lg px-[70px] py-2 my-5' href="/registar">Cria a sua conta do React e-Commerce</Link>
            </div>
            <RodapeLogin />
        </>
    )
}