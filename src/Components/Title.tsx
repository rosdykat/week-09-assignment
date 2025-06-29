import style from "@/Components/ComponentCss/title.module.css";
import Menu from "./Menu";
import Logins from "./Logins";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function Title() {
  const { userId } = await auth();
  return (
    <>
      <div className={style.header}>
        <div className={`test ${style.title}`}>
          <h1>Social Media</h1>
          <div>
            <Link href={`/user/${userId}`}>Profile</Link>
          </div>
        </div>
        <Logins />
        <div className={`test ${style.menu}`}>
          <Menu />
        </div>
      </div>
    </>
  );
}
