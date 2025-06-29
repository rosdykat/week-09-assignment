"use client";

import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Logins() {
  return (
    <div>
      <SignedOut>
        <div className="Logins">
          <Link href="/sign-in">Sign In</Link>
        </div>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
}
