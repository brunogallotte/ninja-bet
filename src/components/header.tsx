import Image from 'next/image'

import logo from '../../public/logo.png'
import instaIcon from '../../public/insta.svg'
import twitterIcon from '../../public/twitter.svg'
import youtubeIcon from '../../public/youtube.svg'

export function Header() {
  return (
    <div className="flex h-[136px] w-full items-center justify-around">
      <Image src={logo} width={114} height={40} alt="" />
      <nav className="flex gap-2 text-white">
        <a className="px-4 py-3" href="#">
          Método
        </a>
        <a className="px-4 py-3" href="#">
          Depoimentos
        </a>
        <a className="px-4 py-3" href="#">
          Planos
        </a>
        <a className="px-4 py-3" href="#">
          Sobre
        </a>
        <a className="px-4 py-3" href="#">
          FAQ
        </a>
      </nav>
      <div className="flex items-center justify-center gap-[18px]">
        <Image src={instaIcon} width={32} height={32} alt="" />
        <Image src={twitterIcon} width={32} height={32} alt="" />
        <Image src={youtubeIcon} width={32} height={32} alt="" />
      </div>
    </div>
  )
}
