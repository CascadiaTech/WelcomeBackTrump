import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeaderComponent from "../components/Header/HeaderComponent";
import "tailwindcss-elevation";
import FooterComponent from "../components/Footer/FooterComponent";
import DualCardComponent from "../components/DualCards/DualCardComponent";
import ScrollpositionAnimation from "../hooks/OnScroll";
import { useEffect, useState } from "react";
import AboutusComponent from "../components/Aboutus/AboutusComponent";
import Falls from "../assets/images/Falls.jpg";
import { SwapWidget,darkTheme, lightTheme, Theme } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider, ExternalProvider, JsonRpcFetchFunc } from "@ethersproject/providers";
import MintCardComponent from "../components/Cards/MintCard";
import trump from '../assets/trumpimages/trump.jpg'
const Home: NextPage = () => {
  //if (typeof window !== "undefined") {
  //  useEffect(() => {
  // Update the document title using the browser API
  //   ScrollpositionAnimation();
  // }, [window.scrollY]);
  /// }
  const { account } = useWeb3React();
  const showConnectAWallet = Boolean(!account);
  const context = useWeb3React();
  const { library } = context;
  const [uniswaprovider, setuniswapprivder] = useState();
  const Runeaddress = '0xc68a4c68f17fed266a5e39e7140650acadfe78f8'
  useEffect(() => {
    async function setProvider() {
      if (account) {
        const provider = new Web3Provider(
          library?.provider as ExternalProvider | JsonRpcFetchFunc
        );
        return provider;
      } else {
        return;
      }
    }
    setProvider().then((result) => setuniswapprivder(result as any));
  },[account]);

  const jsonRpcUrlMap = {
    1: ["https://mainnet.infura.io/v3/7724cb4383a249dfb4a847c90954b901"],
    3: ["https://ropsten.infura.io/v3/<YOUR_INFURA_PROJECT_ID>"],
  };

  useEffect(() => {
    async function ScrollpositionAnimation() {
      const targets = document.querySelectorAll(".js-show-on-scroll");
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
          // Is the element in the viewport?
          if (entry.isIntersecting) {
            // Add the fadeIn class:
            entry.target.classList.add("motion-safe:animate-fadeIn");
          } else {
            // Otherwise remove the fadein class
            entry.target.classList.remove("motion-safe:animate-fadeIn");
          }
        });
      });
      // Loop through each of the target
      targets.forEach(function (target) {
        // Hide the element
        target.classList.add("opacity-0");

        // Add the element to the watcher
        observer.observe(target);
      });
      ScrollpositionAnimation();
    }
  });

  return (
    <div className="">
        <main className={styles.main}>
          <header>
            {" "}
            <HeaderComponent></HeaderComponent>
          </header>
          <div         style={{
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
        }} className={'mx-auto self-center content-center items-center justify-center'}>
            <h5
             style={{ fontFamily: "Cinzel, serif" }}
             className="mt-12 text-4xl sm:text-4xl text-4xl text-center font-bold tracking-tight text-gray-100 md:text-4xl lg:text-5xl dark:text-white"
             >
             Welcome Back Trump
             </h5>
             <Image className='w-screen justify-center align-center md:w-auto' src={trump}></Image>
             <p className={'my-12'}></p>
            <div className={'flex flex col object-center justify-center'}> 
             <button type="button" className="text-gray-100 hover:text-black border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-lg px-8 py-4 text-center mr-2 mb-2">OpenSea</button>
             <button type="button" className="text-gray-100 hover:text-black border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-lg px-8 py-4 text-center mr-2 mb-2">Website</button>
             <button type="button" className="text-gray-100 hover:text-black border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-lg px-8 py-4 text-center mr-2 mb-2">Token</button>
            </div> 
         </div>
          <MintCardComponent></MintCardComponent>
          </main>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Home;
