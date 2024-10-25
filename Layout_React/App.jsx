import Header from "./components/Header";
import Container from "./components/Container";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

const links = [
    { name: "home", path: "./Home"},
    { name: "explore", path: "./Explore"},
    { name: "marketplace", path: "./Marketplace"},
    { name: "artits", path: "./Artits"},
    { name: "news", path: "./News"},
]

const App = () => {
    return (
        <>
            <Header links={links} />
            <Container />
            <Carousel />
            <Footer />
        </>
    )
}

export default App;