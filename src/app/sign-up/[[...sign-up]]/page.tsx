import { SignUp } from "@clerk/nextjs";
import Form from "@/Components/SignUpForm";

export default function SignUpPage() {
  const clerkSignUpUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL;
  return (
    <>
      <h1>This is the sign up page!</h1>
      <SignUp />
      <Form clerkId={clerkSignUpUrl ?? ""} />
    </>
  );
}
