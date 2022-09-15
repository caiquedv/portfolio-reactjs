export const Footer = () => {
    return (
        <footer className="h-40 flex place-items-center justify-center text-slate-700 opacity-75">
            <address className="shadow-xl text-center w-96 rounded-xl">
                <nav>
                    <div className="mb-2">
                        Mais projetos com outras tecnologias
                        <a className="text-cyan-700 font-bold ml-1 pr-1
                            transition hover:bg-slate-600 hover:text-white rounded-full"
                            href="https://caiquedv.github.io/"
                            target="_blanck"
                        > aqui</a>
                    </div>

                    <div>
                        Developed with 💛 by
                        <a className="text-cyan-700 font-bold ml-1 pr-1
                            transition hover:bg-slate-600 hover:text-white rounded-full"
                            href="https://www.linkedin.com/in/caique-andrade-front-end/"
                            target="_blanck"
                        > Caique Andrade</a>
                    </div>
                </nav>
            </address>
        </footer>
    );
}