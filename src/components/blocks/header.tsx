import Image from "next/image"
import Link from "next/link"
import logo from '../../../public/logo.png'
import User from "../pieces/user"

function Header() {
    return (
        <header className="flex justify-between py-3 w-full">
                <Link href='/home' className="flex items-center gap-1">
                    <Image 
                        src={logo}
                        alt="Listly Logo"
                        className="object-cover w-9 max-[1150px]:w-8 max-[850px]:w-7 max-[700px]:w-6"
                    />
                    <h1 className="text-accent-500 text-3xl max-[1150px]:text-[27px] max-[850px]:text-2xl max-[700px]:text-[22px] font-bold tracking-wide">Listly</h1>
                </Link>

                <User />
        </header>
    )
}

export default Header