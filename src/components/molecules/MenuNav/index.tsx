import { Button } from "@/components/atoms/Button";
import { CoinCarrousel } from "@/components/molecules/CoinCarrousel";
import { useWindowSize } from "@/hooks/useWindowSize";
import Image from "next/image";
import { Cryptocoins } from "@/services/cryptocoins";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { Logo } from "@/components/atoms/Logo";
import { useState } from "react";

interface Props {
  crypto: Cryptocoins[];
  onSignInClick: () => void;
  onSignUpClick: () => void;
}

export function NavMenu(props: Props) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("abriu o menu")
  };

  const { width, height } = useWindowSize();

  const isDesktop = (width || 0) > 768;
  const isMobile = (width || 0) > 425;



  const router = useRouter();

  const pathAndSlug= router.asPath.split('#')[0];

  const hashAboutUs = "about-us";
  const newPathAboutUs = `${pathAndSlug}#${hashAboutUs}`;

  const hashTopCripts = "top-cryptos";
  const newPathTopCripts = `${pathAndSlug}#${hashTopCripts}`;



  return (
    <div className={styles.background}>
      {isMobile ? (
        <span></span>
      ) : <span></span>}
      <nav className={styles.wrapper}>
        <div className={styles.left_wrapper}>
          <div className={styles.logo_container}>
              <Logo/>
          </div>
            {isMobile ? (
                 <div className={styles.links}>
                    <Button  onClick={() => {  window.location.replace(newPathAboutUs)}} design="ghost">
                            About us
                    </Button>
                    <Button onClick={() => {  window.location.replace(newPathTopCripts)}} design="ghost">
                            Top Cryptos
                     </Button>
                  </div>
            ): undefined}

        </div>

        <div className={styles.right_wrapper}>
          {isDesktop ? (
            <div className={styles.timeline_constraint}>
              <CoinCarrousel crypto={props.crypto} />
            </div>
          ) : undefined}
          {isMobile ? (
          <div className={styles.buttons_container}>
            <Button design="ghost" onClick={props.onSignInClick}>
              Sign in
            </Button>
            <Button design="primary" onClick={props.onSignUpClick}>
              Sign up
            </Button>
          </div>) : undefined}
          {!isMobile ? (

            <Button design="ghost" onClick={handleClick} >
              <Image
                src="/svgs/menu-hamburger.svg"
                width={24}
                height={24}
                alt="menu button"
              />
            </Button>

        ) : undefined}
        </div>
      </nav>
      {isOpen && (
            <div className={styles.menuItems}>
            <Button className={styles.link_button} onClick={() => {  window.location.replace(newPathAboutUs)}} design="ghost">
                 About us
            </Button>
             <Button className={styles.link_button} onClick={() => {  window.location.replace(newPathTopCripts)}} design="ghost">
                  Top Cryptos
              </Button>
              <Button className={styles.arrow_button} onClick={handleClick} design="ghost">
              <Image
                  src="/svgs/arrow-back.svg"
                  width={40}
                  height={40}
                  alt=""
              />
              </Button>

          </div>
      )}

      <div className={styles.timelineResponsive}>
      {!isDesktop ? (
        <div className={styles.timeline}>
          <CoinCarrousel crypto={props.crypto} />
        </div>
      ) : undefined}
      </div>

    </div>
  );
}
