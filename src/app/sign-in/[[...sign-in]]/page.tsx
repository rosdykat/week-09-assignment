//I am going to use the SignIn component from clerk

import { SignIn } from "@clerk/nextjs";
export default function SignInPage() {
  return (
    <div className="backgroundBox">
      {/* You can customise this page further */}
      <SignIn />
    </div>
  );
}
