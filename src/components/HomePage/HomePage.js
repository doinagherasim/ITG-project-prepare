import "./HomePage.css"
import Search from "./Search";

function HomePage() {
    return (
        <div>
            <div className="text-center">
                <a alt="Lasa un review" href="https://www.itgstore.ro/">
                    <img src="https://image.itgstore.ro/cache/data/bannere_vechi/Review_produse_header_site_web-1000x90.png.webp" data-src="https://image.itgstore.ro/cache/data/bannere_vechi/Review_produse_header_site_web-1000x90.png.webp"></img>
                </a>
            </div>
            <div className="row">
                <a alt="itg-img" href="https://www.itgstore.ro/">
                    <img src="https://www.itgstore.ro/images/logo2_original.png"></img>
                </a>
                <Search/>
            </div>
        </div>
    )
};

export default HomePage;