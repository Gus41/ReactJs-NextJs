import { Logo } from '@/icons'

export default function Front(){
    return(
        <>
            <header className="w-full h-screen front flex flex-col items-center">
                <div className="container">
                    <nav className="p-8 flex flex-row w-full items-center justify-between border-bottom-white">
                        <div className="logo-container w-6 flex items-center gap-2 text-white">
                            <div>
                                {Logo}
                            </div>
                            <p className="text-center text-2xl">krigger</p>
                        </div>
                        <div className="social-container flex flex-row">
                            <p>Icon1</p>
                            <p>Icon2</p>
                        </div>
                    </nav>
                    <div className="links w-full flex items-center justify-around mt-4">

                        <a className="block text-2xl" href="#">Contato</a>
                        <a className="block text-2xl" href="#">Localização</a>
                        <a className="block text-2xl" href="#">Sobre nós</a>
                    </div>
                </div>
                <div className="container mt-32">
                    <div className="w-full flex items-center justify-center flex-col">
                        <h1 className="text-white title">Krigger</h1>
                        <p className="title-description">Aberto 24h por dia, 7 dias por semana</p>
                    </div>
                </div>
            </header>
        </>
    )
}