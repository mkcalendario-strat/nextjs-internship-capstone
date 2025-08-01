import { Header } from "@/components/header";
import SignInForm from "@/components/sections/sign-in/sign-in-form";
import { Fragment } from "react";

export default function SignInPage() {
  return (
    <Fragment>
      <Header />
      <SignInForm />
    </Fragment>
  );
}
