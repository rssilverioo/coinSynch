import Image from "next/image";

import { Button } from "@/components/atoms/Button";
import { CoinCarrousel } from "@/components/molecules/CoinCarrousel";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Cryptocoins } from "@/services/cryptocoins";
import { useRouter } from "next/router";


import styles from "./styles.module.scss";
import { Logo } from "@/components/atoms/Logo";

interface Props {
  crypto: Cryptocoins[];
  onSignInClick: () => void;
  onSignUpClick: () => void;
}

export function NavMenu(props: Props) {
  const { width, height } = useWindowSize();

  const isDesktop = (width || 0) > 768;

  const router = useRouter();

  const hashNewsLetters = "news-letters";
  const pathAndSlug= router.asPath.split('#')[0];
  const newPathNewsLetters = `${pathAndSlug}#${hashNewsLetters}`;

  const hashAboutUs = "about-us";
  const newPathAboutUs = `${pathAndSlug}#${hashAboutUs}`;

  const hashTopCripts = "top-cryptos";
  const newPathTopCripts = `${pathAndSlug}#${hashTopCripts}`;



  return (
    <div className={styles.background}>
      <nav className={styles.wrapper}>
        <div className={styles.left_wrapper}>
          <div className={styles.logo_container}>
          <Logo/>
          </div>

          <div className={styles.links}>
            <Button  onClick={() => {  window.location.replace(newPathAboutUs)}} design="ghost">
              About us
            </Button>
            <Button onClick={() => {  window.location.replace(newPathTopCripts)}} design="ghost">
              Top Cryptos
            </Button>
          </div>
        </div>

        <div className={styles.right_wrapper}>
          {isDesktop ? (
            <div className={styles.timeline_constraint}>
              <CoinCarrousel crypto={props.crypto} />
            </div>
          ) : undefined}
          <div className={styles.buttons_container}>
            <Button design="ghost" onClick={props.onSignInClick}>
              Sign in
            </Button>
            <Button design="primary" onClick={props.onSignUpClick}>
              Sign up
            </Button>
          </div>
        </div>
      </nav>
      {!isDesktop ? (
        <div className={styles.timeline_constraint}>
          <CoinCarrousel crypto={props.crypto} />
        </div>
      ) : undefined}
    </div>
  );
}
