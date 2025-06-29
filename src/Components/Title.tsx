import style from "@/Components/ComponentCss/title.module.css";
import Menu from "./Menu";
import SignIn from "@/Components/SignIn";
import SignUp from "@/Components/SignUp";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { SignedIn } from "@clerk/nextjs";

export default async function Title() {
  const { userId } = await auth();
  return (
    <>
      <div className={style.header}>
        <Link href="/" className="font-bold">
          mood.
        </Link>
        <div>
          <SignedIn>
            <Link href={`/user/${userId}`}>Update Status</Link>
          </SignedIn>
        </div>
        <div>
          <Link href="/allusers">All Users</Link>
        </div>
        <SignIn />
        <SignUp />
        <Menu />
      </div>
    </>
  );
}
