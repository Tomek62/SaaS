import Image from "next/image";
import Link from "next/link";



export default function Header({ name,logo }: { name: string; logo: string }) {
    return (
        <div className="left-0 w-full z-10 fixed py-6  bg-white transition-all text-black">
        <div className="mx-auto flex h-full max-w-screen-xl  space-x-5">
          <Link href="/" className="flex items-center ">
            <div className=" ">
              <Image
                alt={name || ""}
                height={80}
                src={logo || ""}
                width={80}
              />
            </div>
            <span className="ml-3 font-appPrimary text-lg">
              {name}
            </span>
          </Link>
        </div>
      </div>
    );
}
