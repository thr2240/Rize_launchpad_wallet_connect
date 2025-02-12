import Head from "next/head";
import { Product, Dependency, WalletSection } from "../components";
import { dependencies, products } from "../config";
import { useTheme } from "../contexts/theme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="max-w-5xl py-10 mx-6 lg:mx-auto">
      <Head>
        <title></title>
        <meta name="description" content="Generated by Rize team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row justify-end mb-4">
        <button
          className="inline-flex items-center justify-center w-12 h-12 text-black border rounded-lg dark:text-white hover:bg-black/10 dark:hover:bg-white/10 border-black/10 dark:border-white/10"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <MoonIcon className="w-5 h-5" />
          ) : (
            <SunIcon className="w-6 h-6" />
          )}
        </button>
      </div>
      <div className="text-center">
        <h1 className="mb-3 text-3xl font-bold sm:text-4xl md:text-5xl">
          Rize Launchpad App
        </h1>
        <h1 className="text-2xl font-bold sm:text-3xl md:text-3xl">
          Welcome to&nbsp;
          <span className="text-purple-damp">
            CosmosKit + Next.js + TailwindCSS
          </span>
        </h1>
      </div>
      <WalletSection />
      <div className="grid gap-8 mb-14 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Product key={product.title} {...product}></Product>
        ))}
      </div>
      <div className="grid gap-8 mb-20 md:grid-cols-2">
        {dependencies.map((dependency) => (
          <Dependency key={dependency.title} {...dependency}></Dependency>
        ))}
      </div>
      <div className="flex justify-center pt-6 text-sm text-center border-t border-black/10 dark:border-white/10">
        <span className="flex flex-row items-center space-x-2">
          <p>Built with</p>
          <a
            href="https://cosmology.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/cosmology.webp"
              className="w-auto h-4 transition duration-150 transform cursor-pointer hover:scale-105"
              layout="fill"
            />
          </a>
        </span>
      </div>
    </div>
  );
}
