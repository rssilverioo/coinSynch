import Image from 'next/image';
import Link from 'next/link';


export function Logo() {
  return (
    <>
        <Link href="/">
            <Image src="/images/logo.png"  alt="CoinSynch logo"
              width={124}
              height={21}/>
        </Link>
    </>
  )
}
