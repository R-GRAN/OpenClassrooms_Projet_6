import Gallery from "@/components/others/Gallery.jsx";
import Banner from "@/components/others/Banner.jsx";

function Home({ accommodations }) {
  return (

      <div>
        <Banner
          picture={"src/assets/images/cote.png"}
          text={"Chez vous, partout et ailleurs"}
        />
        <Gallery accommodations={accommodations} />
      </div>

  );
}

export default Home;
