import { SignIn } from "@clerk/nextjs";

export default function SignInForm() {
  return (
    <section className="mt-[65px] flex min-h-[calc(100vh-65px)] items-center justify-center">
      <SignIn
        appearance={{
          variables: {
            borderRadius: "0"
          },
          elements: {
            // Layout & Card
            cardBox: "my-5 shadow-md border-1",
            card: "p-6 bg-white dark:bg-neutral-800 shadow-none",

            // Header
            header: "text-left",
            headerTitle:
              "text-2xl font-black text-primary dark:text-neutral-100",
            headerSubtitle: "text-neutral-700 dark:text-neutral-400",

            // Social Buttons
            socialButtonsBlockButton:
              "py-[10px] bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 outline-1 hover:outline-2 outline-neutral-300 dark:outline-neutral-700",

            // Divider
            dividerLine: "bg-neutral-300 dark:bg-neutral-700",
            dividerText: "text-neutral-700 dark:text-neutral-400",

            // Form
            formFieldLabel: "text-neutral-900 dark:text-neutral-400",
            formFieldInput:
              "py-[10px] bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 placeholder-neutral-500 shadow-none outline-1 hover:outline-2 focus:outline-2 outline-offset-0 outline-neutral-300 dark:outline-neutral-700",
            formButtonPrimary:
              "py-[10px] bg-primary hover:bg-primary text-white rounded-none shadow-none",

            // Footer
            footerAction: "w-full bg-neutral-100 dark:bg-neutral-700",
            footerActionText: "text-neutral-600 dark:text-neutral-300",
            footerActionLink: "text-primary dark:text-white"
          }
        }}
        signUpUrl="/sign-up"
      />
    </section>
  );
}
