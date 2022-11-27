import Image from "next/image";

import profile from "@images/profile.png";
import Link from "next/link";

export default function HomeLanding() {
  return (
    <div className="flex flex-row flex-wrap w-8/12 mx-auto mt-32">
      <div className="flex-none w-[180px] mr-12">
        <Image
          width={180}
          src={profile}
          alt="Profile photo"
          className="rounded-3xl"
        />
      </div>
      <div className="flex-1 mt-1">
        <h1 className="mb-3 text-5xl font-bold">Abbas Ataie</h1>
        <h3 className="mb-2 text-lg text-zinc-600 dark:text-zinc-400">
          Software Engineer
        </h3>
        <p className="pr-20 text-[15px] text-zinc-500 dark:text-zinc-300 mb-5">
          I&apos;m a Software Engineer with over 5 years of
          professional experience <br /> in developing and implementing software
          solutions ranging from mobile applications development to architecting
          enterprise level softwares.
        </p>
        <div>
          <Link
            className="mr-4 text-sm transition text-zinc-500 dark:text-zinc-300 hover:text-zinc-600 dark:dark:text-zinc-700"
            href="https://github.com/abbasatayee"
          >
            Github
          </Link>
          <Link
            className="mr-4 text-sm transition text-zinc-500 dark:text-zinc-300 hover:text-zinc-600 dark:dark:text-zinc-700"
            href="https://www.linkedin.com/in/abbas-ataie-72a4431b9/"
          >
            Linkedin
          </Link>
          <Link
            className="mr-4 text-sm transition text-zinc-500 dark:text-zinc-300 hover:text-zinc-600 dark:dark:text-zinc-700"
            href="https://twitter.com/aata_fa"
          >
            Twitter
          </Link>
        </div>
      </div>
    </div>
  );
}
