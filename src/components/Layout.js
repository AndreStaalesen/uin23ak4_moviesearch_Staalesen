export default function Layout({children}){
    return(
        <div className="container">
        <header>
            <h1>Moviesearch</h1>
            <nav>
                <li>Populære nå</li>
                <li>Nye filmer</li>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <span>Footerinnhold...</span>
        </footer>
        </div>
    )
}