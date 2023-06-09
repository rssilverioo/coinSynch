import { useRef } from "react";
import { CarrouselHero } from "@/components/molecules/Hero";
import { Cryptocoins } from "@/services/cryptocoins";
import { NavMenu } from "@/components/molecules/MenuNav";
import { SignInForm } from "@/components/molecules/forms/SignIn";
import { SignUpForm } from "@/components/molecules/forms/SignUp";
import { Modal, ModalHandler } from "@/components/molecules/modals/Modal";


interface Props {
  assets: Cryptocoins[];
}



export function Header(props: Props) {
  const modalHandlerSignIn = useRef<ModalHandler>(null);
  const modalHandlerSignUp = useRef<ModalHandler>(null);

  function openSignIn() {
    modalHandlerSignUp.current?.close();
    modalHandlerSignIn.current?.open();
  }

  function openSignUp() {
    modalHandlerSignIn.current?.close();
    modalHandlerSignUp.current?.open();
  }
  return (
   <>
      <Modal ref={modalHandlerSignIn}>
      <SignInForm NeedAccount={openSignUp} />
      </Modal>
      <Modal ref={modalHandlerSignUp}>
      <SignUpForm HaveAccount={openSignIn} />
			</Modal>
      <NavMenu
           crypto={props.assets}
           onSignInClick={openSignIn}
           onSignUpClick={openSignUp}
      />
      <CarrouselHero onSignUpClick={openSignUp} />

   </>
  )

}
