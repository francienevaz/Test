import { Carousel as Slide } from "./react-boostrap/Carousel";
import "boostrap/dist/css/boostrap.css";
import img from "./urlimage.jpg";

const Carousel = () => {
    return(
        <Slide>
            <Slide.Item>
                <img src={img} alt="ImagemI" />
            </Slide.Item>
            <Slide.Item>
                <img src={img} alt="ImagemII" />
            </Slide.Item>
            <Slide.Item>
                <img src={img} alt="ImagemIII" />
            </Slide.Item>
            <Slide.Item>
                <img src={img} alt="ImagemIV" />
            </Slide.Item>
        </Slide>
    )
}

export default Carousel;