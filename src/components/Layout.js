import { Outlet } from "react-router-dom";

export default function Layout(){

    const refreshPage = () => {
        window.location.reload();
      };
    return(
        <div id="container">
        <header>
            <h1 onClick={refreshPage}>MovieSea</h1>
        </header>   
        <main>
            <Outlet/>
        </main>
        <footer>
            <span>Footerinnhold...</span>
        </footer>
        </div>
    )
}