import Link from "next/link";
import { RodapeLogin } from "../template/login/RodapeLogin";



export function CriarLogin() {

    return (
        <>
            <div className='flex flex-col items-center px-4'>
                <div className='max-w-[350px] h-auto bg-white p-8 rounded-lg border border-zinc-400  mb-6'>

                    <h4 className="text-3xl font-semibold mb-5 ">Criar conta</h4>
                    <form className="flex flex-col gap-y-4 text-xs font-semibold ">
                        <label>
                            Seu nome
                            <input type="text" name="name" placeholder="Nome e sobrenome" className="border border-zinc-800 text-xs w-full font-normal rounded-md mt-1 p-2" />
                        </label>
                        <label>
                            E-mail
                            <input type="text" name="e-mail" className="border border-zinc-800 text-xs w-full font-normal rounded-md mt-1 p-2" />
                        </label>
                        <label>
                            Senha
                            <input type="text" name="nuber" placeholder="Pelo menos 6 caracteres" className="border border-zinc-800 text-xs w-full font-normal rounded-md mt-1 p-2" />
                        </label>
                        <label>
                            Insira a senha nova mais uma vez
                            <input type="text" name="nuber" placeholder="Nome e sobrenome" className="border border-zinc-800 text-xs w-full font-normal rounded-md mt-1 p-2" />
                        </label>
                        <input type="submit" value="Continuar" className='bg-green-400 hover:bg-green-500 rounded-full px-4 py-2 mb-5 cursor-pointer' />
                    </form>

                    <p className="text-xs">Ao criar uma conta, você concorda com as Condições de Uso do React e-Commerce. Por favor verifique a Notificação de Privacidade, Notificação de Cookies e a Notificação de Anúncios Baseados em Interesse.</p>

                    <div className="h-px max-w-72 my-6 bg-gradient-to-r from-zinc-200 via-zinc-800 to-zinc-200"></div>

                    <p className="text-xs">Você já tem uma conta? <Link className="text-blue-700 hover:text-green-500 hover:underline" href="/login">Fazer login</Link></p>

                </div>



            </div>
            <RodapeLogin />
        </>
    )
}