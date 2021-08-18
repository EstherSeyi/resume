import Head from "next/head";

export default function Home() {
  const printName = (name) => {
    console.log(name);
    return name;
  };

  return (
    <>
      <Head>
        <title>Print Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen  relative z-10 border-b border-grey flex items-center justify-center">
        <p>My Name is {printName("Esther")}.</p>
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
