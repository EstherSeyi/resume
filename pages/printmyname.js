import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import HomeIcon from "../components/icons/home";
import MailIcon from "../components/icons/mail";
import PhoneIcon from "../components/icons/phone";
import GlobeIcon from "../components/icons/globe";
import CaretRight from "../components/icons/caret-right";

import zuriLogo from "../assets/zuri-logo.svg";

export default function Home() {
  const printName = (name) => {
    console.log(name);
    return name;
  };

  return (
    <>
      <Head>
        <title>Esther Ogundijo's Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen  relative z-10 border-b border-grey">
        <p>My Name is {printName("Esther")}</p>
      </main>
      <footer className="text-center text-xs py-2 sticky right-0 left-0 bottom-0 ">
        Created with ❤️ by Esther Ogundijo at{" "}
        <a href="https://internship.zuri.team/" target="_blank">
          <span className="hover:underline cursor-pointer text-blue">
            Zuri Internship
          </span>
        </a>
        .
      </footer>
    </>
  );
}
