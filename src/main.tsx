import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Masonry from "@mui/lab/Masonry";
import "./index.css";

const imagesLinks = import.meta.glob("./assets/images/*");

export const GithubIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
    </svg>
  );
};

export const UpArrowIcon = () => {
  return (
    <svg
      fill="currentColor"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
    >
      <path
        id="XMLID_224_"
        d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
    l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
    C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
      />
    </svg>
  );
};

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

  return (
    <Masonry columns={{ xs: 1, md: 3, xl: 4 }}>
  {imageUrls.map((url, index) => (
    <div
      key={index}
      className="overflow-hidden border-2 rounded-md border-gray-300 dark:border-white/10 shadow hover:shadow-md transition-shadow duration-200"
    >
      {/* Image */}
      <picture className="block">
        <source srcSet={url} />
        <img
          src={url}
          alt={`image-${index}`}
          className="w-full h-auto object-cover bg-transparent"
        />
      </picture>

      {/* Footer */}
      <footer className="p-2 bg-gray-100 dark:bg-black border-t-2 border-gray-200 dark:border-white/10 flex justify-between items-center gap-2">
        <a
          href={url}
          download={`bird-image-${index}`}
          className="bg-blue-400 dark:bg-blue-800 text-white text-sm sm:text-base hover:bg-blue-500 px-3 py-1 rounded-full transition-all flex-1 text-center"
        >
          Download
        </a>
        <a
          href={url}
          className="bg-blue-400 dark:bg-blue-800 text-white text-sm sm:text-base hover:bg-blue-500 px-3 py-1 rounded-full transition-all flex-1 text-center"
        >
          Source
        </a>
      </footer>
    </div>
  ))}
</Masonry>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="flex flex-wrap w-full  dark:bg-black dark:text-white justify-center items-center ">
      {/* GitHub Link */}
  
  <p className="w-full text-center flex justify-between  items-start">
    <span className="w-full pt-4 text-center">Made with ❤️ by Frytura to his friends.</span>
    <a
    className="w-12 h-12 transition-all hover:scale-[1.15] hover:translate-y-[3px] hover:-translate-x-[4px] rounded-full rounded-tr-none bg-black dark:bg-white dark:fill-black fill-white flex items-center justify-center"
    href="https://github.com/Lmedeiros-leiman/BirdSanctuary"
    target="_blank"
    rel="noreferrer"
  >
      <GithubIcon /> 
  </a>
    </p>
      {/* Hero Section */}
  <section className="text-center px-4 mb-16 pt-16 pb-8">
    
    <strong className="text-lg block">Welcome to the</strong>
    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">
      SANCTUARY!!!!!!!
    </h1>
    <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm sm:text-base md:text-lg">
      A collection of images of the long legs bird!
    </p>
  </section>
  <div className="block w-full">
    <Images />
  </div>
</main>
    {/* Footer */}
<footer className="w-full flex justify-end px-6 py-3 border-t dark:border-blue-800 border-blue-300 bg-white dark:bg-black">
  <div
    onClick={() => {
      window.scrollTo(0, 0);
    }}
    className="w-12 h-12 p-2 rounded-full flex items-center justify-center fill-black dark:fill-white dark:bg-white/20 dark:hover:bg-white/50 cursor-pointer bg-black/20 hover:bg-black/50"
  >
    <UpArrowIcon />
  </div>
</footer>
  </StrictMode>
);
