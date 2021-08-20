import Head from "next/head";
import Image from "next/image";

import HomeIcon from "../components/icons/home";
import MailIcon from "../components/icons/mail";
import PhoneIcon from "../components/icons/phone";
import GlobeIcon from "../components/icons/globe";
import CaretRight from "../components/icons/caret-right";

import zuriLogo from "../assets/zuri-logo.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Seyi Ogundijo's Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen  relative z-10 border-b border-grey">
        <div className="max-w-6xl mx-auto">
          <section className="bg-grey pt-1 mb-3 ">
            <div className="border-8 border-white border-b-0 w-11/12 sm:w-[98%] max-w-6xl mx-auto mt-2 px-2 pb-2">
              <div className="flex justify-center items-center mt-5">
                <div className="flex sm:w-3/6">
                  <div className="hidden sm:block border-b border-black p-0.5 w-[25%] relative bottom-5"></div>
                  <div className="sm:w-3/6 text-center border border-black py-2 bg-white">
                    <p className="uppercase font-raleway px-2">
                      Frontend Engineer
                    </p>
                  </div>
                  <div className="hidden sm:block border-b border-black p-0.5 w-[25%] relative bottom-5"></div>
                </div>
              </div>
              <h1 className="font-playfair text-center my-5 text-5xl">
                Seyi Ogundijo
              </h1>
            </div>
          </section>
          <section className="bg-grey mb-3">
            <div className="border-8 border-white border-t-0 border-b-0 w-11/12 sm:w-[98%] max-w-6xl mx-auto mt-2 px-2 py-4 flex flex-col lg:flex-row">
              <div className="flex-38 md:px-4 mb-4 lg:mb-0">
                <h3 className="font-dancing text-4xl text-center border-b border-black pb-1 mb-1.5">
                  Hello!
                </h3>
                <p>
                  Meticulous Frontend Engineer with over 2 years frontend
                  experience and passion for responsive website design and a
                  firm believer in the mobile first approach. Implemented new
                  responsive website approach which increased mobile traffic by
                  20%.{" "}
                  <span className="text-xs mr-4 italic">
                    {" "}
                    credit: zeti.com.
                  </span>
                </p>
              </div>
              <div className="flex-33 bg-white lg:mx-2  mb-4 lg:mb-0 p-2 lg:px-8">
                <div className="w-4/6 mx-auto mt-2.5 mb-4">
                  <p className="uppercase text-center border border-black py-2.5">
                    Contact
                  </p>
                </div>
                <div className="flex mb-2">
                  <PhoneIcon className="mr-4 w-5 h-5" />
                  <a className="hover:text-blue" href="tel:+2348000000000">
                    +2348000000000
                  </a>
                </div>
                <div className="flex mb-2">
                  <MailIcon className="mr-4 w-5 h-5" />
                  <a
                    className="hover:text-blue truncate"
                    href="mailto:sheyiogundijo@gmail.com?subject=Important Email&body=Hi Esther,"
                  >
                    sheyiogundijo@gmail.com
                  </a>
                </div>
                <div className="flex mb-2">
                  <HomeIcon className="mr-4 w-5 h-5" />
                  <p>Lagos, Nigeria.</p>
                </div>
                <div className="flex">
                  <GlobeIcon className="mr-4 w-5 h-5" />
                  <a
                    className="hover:text-blue truncate"
                    href="https://www.estherogundijo.rocks"
                    target="_blank"
                  >
                    https://www.estherogundijo.rocks
                  </a>
                </div>
              </div>
              <div className="flex-29 lg:mx-4 ">
                <div className="mx-auto w-max h-full flex items-center">
                  <Image
                    src={zuriLogo}
                    width={200}
                    height={50}
                    objectFit="fill"
                    alt="zuri internship"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-grey mb-3 ">
            <div className="border border-white border-t-0 border-b-0 w-11/12 sm:w-[98%] max-w-6xl mx-auto mt-2 px-2 flex flex-col sm:flex-row bg-white">
              <div className="sm:flex-38 bg-grey mb-4 sm:mb-0 sm:mr-4 p-4">
                <h3 className="font-playfair mt-2 mb-4 text-center text-2xl uppercase">
                  Expertise
                </h3>
                <ul>
                  <li className="mb-2 flex">
                    <CaretRight />
                    <span>JavaScript</span>
                  </li>
                  <li className="mb-2 flex">
                    <CaretRight />
                    <span>HTML</span>
                  </li>
                  <li className="mb-2 flex">
                    <CaretRight />
                    <span>CSS</span>
                  </li>
                  <li className="mb-2 flex">
                    <CaretRight />
                    <span>ReactJS</span>
                  </li>
                </ul>
              </div>
              <div className="sm:flex-62 bg-grey p-4">
                <h3 className="text-center font-playfair text-2xl uppercase mt-2 mb-4">
                  Education
                </h3>
                <ul>
                  <li className="flex mb-4">
                    <CaretRight />
                    <div>
                      <p className="mb-1.5 font-bold">
                        <span>Economics</span>
                        <span className="mx-1">/</span>
                        <span>University of Lagos</span>
                      </p>
                      <p>
                        <span>Masters</span>
                        <span className="mx-1">/</span>
                        <span>2016 -2017</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex ">
                    <CaretRight />
                    <div>
                      <p className="mb-1.5 font-bold">
                        <span>Economics</span>
                        <span className="mx-1">/</span>
                        <span>Bowen University</span>
                      </p>
                      <p>
                        <span>Bachelors</span>
                        <span className="mx-1">/</span>
                        <span>2011 -2015</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h3 className="text-center font-playfair text-2xl uppercase">
              Experience
            </h3>
            <div className="bg-grey pb-4">
              <div className="border-8 border-white border-t-0 border-b-0 w-11/12 sm:w-[98%]  mx-auto mt-2 px-2 bg-white">
                <div className="flex">
                  <div className="bg-grey hidden sm:block flex-38 mr-4 pt-6 px-4">
                    <p className="w-4/6 mx-auto text-center border border-black py-1.5 bg-white mb-8">
                      Kudy Financials
                    </p>
                    <div className="text-center font-bold">
                      <p>2020 - present</p>
                      <p>Luxemburg</p>
                    </div>
                  </div>
                  <div className="flex-62 pt-6">
                    <div className="sm:hidden">
                      <p className="font-bold">
                        <span className="mr-2">Kudy Financials</span>
                        <span>(Luxemburg)</span>
                      </p>
                      <p>2020 - present</p>
                    </div>
                    <p className="font-bold">Frontend Engineer</p>
                    <p>
                      Worked on revamping our old web user application on a
                      remote team of fellow engineers, product designers,
                      software testers. This led to the automation of certain
                      user processes, enabling our users to better monitor and
                      manage their investments and also improving productivity
                      within the business. Tools: ReactJS, Redux, TailwindCSS..{" "}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-grey hidden sm:block  sm:flex-38 mr-4 pt-6 px-4">
                    <p className="w-4/6 mx-auto text-center border border-black py-1.5 bg-white mb-8">
                      BabyBliss
                    </p>
                    <div className="text-center font-bold">
                      <p>2019 - 2020</p>
                      <p>Lagos</p>
                    </div>
                  </div>
                  <div className="flex-62 pt-6">
                    <div className="sm:hidden">
                      <p className="font-bold">
                        <span className="mr-2">BabyBliss</span>
                        <span>(Lagos)</span>
                      </p>
                      <p>2019 - 2020</p>
                    </div>
                    <p className="font-bold">Frontend Engineer</p>
                    <p>
                      Worked on a team to build a custom online fulfillment
                      platform that will ensure robust monitoring of sales from
                      order to delivery and put an end to issues of orders
                      getting lost somewhere in the process. Tools: ReactJS,
                      CSS, HTML, ExpressJS, MongoDB.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="text-center text-xs py-2 sticky right-0 left-0 bottom-0 ">
        Created with ❤️ by Seyi Ogundijo at{" "}
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
