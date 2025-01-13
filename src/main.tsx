import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Masonry from "@mui/lab/Masonry";
import "./index.css";

const imagesLinks = import.meta.glob("./assets/images/*");

export const Images = () => {
  const [imageUrls, setImagesUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const links: string[] = [];

      const promises = Object.values(imagesLinks).map(async (image) => {
        links.push(((await image()) as { default: string }).default);
      });

      await Promise.all(promises);

      setImagesUrls(links);
    };

    fetchImages();
  }, []);

  console.log(imageUrls);
  return (
    <Masonry>
      {imageUrls.map((url, index) => {
        return (
          <picture key={index}>
            <source srcSet={url} />
            <img src={url} alt={`bird-${index}`} className="flex" />
          </picture>
        );
      })}
    </Masonry>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="flex flex-wrap w-full  dark:bg-black dark:text-white justify-center items-center pt-16 pb-8">
      <section className=" mb-16">
        <strong>Welcome to the</strong>
        <h1 className=" font-bold text-6xl">SANCTUARY!!!!!!!</h1>
        <p className=" text-slate-600 dark:text-slate-400">
          a collection of images of the long legs bird!
        </p>
      </section>

      <Images />

      <footer>
        <p className="text-center text-slate-600 dark:text-slate-400 mt-12 mb-4">
          Made with ❤️ by frytura to his friends :3{" "}
        </p>
      </footer>
    </main>
  </StrictMode>,
);
