//Components
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Banner from "../Banner/banner";
import Title from "../Title/title";
import Carousel from "../Carousel/carousel";
import EditorialBanner from "../EditorialBanner/editorialBanner";
import Quote from "../Quote/quote";
import Gallery from "../Gallery/gallery";

//Utils
import { useWindowSize } from "../../utils/useWindowSize";

//Assets
import banner_top from "../../assets/images/banner-top.png";
import carousel_top_1 from "../../assets/images/carousel-1-1.png";
import carousel_top_2 from "../../assets/images/carousel-1-2.png";
import carousel_top_3 from "../../assets/images/carousel-1-3.png";
import carousel_top_4 from "../../assets/images/carousel-1-4.png";
import editorial from "../../assets/images/editorial.png";
import carousel_bottom_1 from "../../assets/images/carousel-2-1.png";
import carousel_bottom_2 from "../../assets/images/carousel-2-2.png";
import carousel_bottom_3 from "../../assets/images/carousel-2-3.png";
import carousel_bottom_4 from "../../assets/images/carousel-2-4.png";
import product from "../../assets/images/product.png";
import banner_bottom from "../../assets/images/banner-bottom.png";

function Main() {
  const windowSize = useWindowSize();
  const isMobile = windowSize.innerWidth < 960;

  return (
    <>
      {/* <Header /> */}
      <div className={`${!isMobile ? "uk-container" : ""}`}>
        <Banner image={banner_top} image_alt="Fendi Banner Top" />
        <Title
          align="center"
          title="The Debut Collection by kim jones"
          subtitle="A bold and daring vision driven by the energy and passion for beauty and all forms of creative expression. The first Fendi ready to wear collection by Kim Jones pays homage to the extraordinary Italian elegance, the brand’s storied heritage, and the women who have enshrined its legacy. Discover the iconic silhouettes and style signatures reinterpreted from a new perspective – at once luxurious, versatile, and supremely feminine."
          button_cta="Discover the collection"
        />
        <Carousel
          carousel={CAROUSEL_TOP}
          autoplay={true}
          description="Experience the mood of the collection"
        />
        <EditorialBanner
          title="Kim Jones’ universe"
          quote="“Here, I am surrounded by strong, powerful women who I love and respect, and want to bring their energy into what I do.”"
          author="KIM JONES"
          image={editorial}
          image_alt="Fendi Editorial Banner"
        />
        <Carousel
          carousel={CAROUSEL_BOTTOM}
          arrow={true}
          fullSlider={true}
          title="Explore the looks"
        />
        <Gallery items={PRODUCTS} />
        <Banner image={banner_bottom} image_alt="Fendi Banner Bottom" />
        <Quote
          quote="“Fun isn't always just about bright colours, it can be about really luxurious self-indulgence, which pleases the person wearing it more than anyone else”"
          author="KIM JONES"
        />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Main;

const CAROUSEL_TOP = [
  {
    id: 1,
    image: carousel_top_1,
    name: "Fendi carousel top 1",
  },
  {
    id: 2,
    image: carousel_top_2,
    name: "Fendi carousel top 2",
  },
  {
    id: 3,
    image: carousel_top_3,
    name: "Fendi carousel top 3",
  },
  {
    id: 4,
    image: carousel_top_4,
    name: "Fendi carousel top 4",
  },
];

const CAROUSEL_BOTTOM = [
  {
    id: 1,
    image: carousel_bottom_1,
    name: "Fendi carousel bottom 1",
  },
  {
    id: 2,
    image: carousel_bottom_2,
    name: "Fendi carousel bottom 2",
  },
  {
    id: 3,
    image: carousel_bottom_3,
    name: "Fendi carousel bottom 3",
  },
  {
    id: 4,
    image: carousel_bottom_4,
    name: "Fendi carousel bottom 4",
  },
];

const PRODUCTS = [
  {
    id: 1,
    image: product,
    name: "PRODUCT NAME",
    description: "Short description",
    price: "€ 9.999,00",
    soldOut: true,
  },
  {
    id: 2,
    image: product,
    name: "PRODUCT NAME",
    description: "Short description",
    price: "€ 9.999,00",
    soldOut: true,
  },
  {
    id: 3,
    image: product,
    name: "PRODUCT NAME",
    description: "Short description",
    price: "€ 9.999,00",
    soldOut: true,
  },
  {
    id: 4,
    image: product,
    name: "PRODUCT NAME",
    description: "Short description",
    price: "€ 9.999,00",
    soldOut: true,
  },
  {
    id: 5,
    image: product,
    name: "PRODUCT NAME",
    description: "Short description",
    price: "€ 9.999,00",
    soldOut: true,
  },
  {
    id: 6,
    image: product,
    name: "PRODUCT NAME",
    description: "Short description",
    price: "€ 9.999,00",
    soldOut: true,
  },
  {
    id: 7,
    image: product,
    name: "PRODUCT NAME",
    description: "Short description",
    price: "€ 9.999,00",
    soldOut: true,
  },
  {
    id: 8,
    image: product,
    name: "PRODUCT NAME",
    description: "Short description",
    price: "€ 9.999,00",
    soldOut: true,
  },
];
