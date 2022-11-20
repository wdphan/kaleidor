import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import Splitz from 'public/images/Splitz.png'
import Image from 'next/image'
// import Header from '@/components/Header'
import Link from 'next/link'

const Home: FC = () => {
	return (
		<div>
			<div className="flex flex-col justify-center text-center items-center pb-28 min-h-screen bg-black pt-24">
				<h1 className="bg-black text-[#42805F] text-7xl tracking-[.3em] mb-10 pl-5 font-rubik font-semibold">
					<a className="text-[#08F294] animate-flash">S</a>PLITZ
					<br />S<a className="text-[#08F294] animate-flash1">P</a>LITZ <br />
					SP<a className="text-[#08F294] animate-flash2">L</a>ITZ
					<br />
					SPL<a className="text-[#08F294] animate-flash3">I</a>TZ
					<br />
					SPLI<a className="text-[#08F294] animate-flash4">T</a>Z<br />
					SPLIT<a className="text-[#08F294] animate-flash5">Z</a>
					<br />
				</h1>
				<div className="flex items-center justify-center">
					<Link href="/splitz">
						<button className="bg-black text-[#08F294] border-2 border-[#08F294] px-5  py-1 font-normal font-Roboto hover:bg-[#08F294] hover:text-black hover:font-bold">
							ENTER APP
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
