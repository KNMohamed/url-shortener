import BodyWrapper from "@/components/BodyWrapper/BodyWrapper";
import Shortener from "@/components/Shortener/Shortener";

export default function Home() {
  return (
    <BodyWrapper>
      <div className="relative flex place-items-center before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-4xl font-bold">
          Shorten your long links.
        </h1>
      </div>
      <Shortener/>
    </BodyWrapper>
  )
}