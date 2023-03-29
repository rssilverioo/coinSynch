import Image from 'next/image';
import Link from 'next/link';


export function Logo() {
  return (
    <>
        <Link href="/">
            <Image src="/images/logo.png" fill alt="CoinSynch logo" />
        </Link>
    </>
  )
}
