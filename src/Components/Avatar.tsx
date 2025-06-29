import style from "@/Components/ComponentCss/avatar.module.css";
import AvatarUpdate from "./AvatarUpdate";
// import { db } from "@/utils/dbConnection";
// import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";

export default async function AvatarComponent() {
  const { userId } = await auth();
  let userName = "";
  if (userId) {
    const existing = await db.query(
      `SELECT username FROM status WHERE clerk_id = $1`,
      [userId]
    );

    userName = existing.rows[0]?.username ?? "";

    // const userId = (await db.query(`SELECT * FROM login`)).rows
    return (
      <>
        <div className={style.avatarBox}>
          <div className={`status ${style.status}`}>
            <AvatarUpdate />
          </div>
          <div className={`avatar ${style.avatar}`}>
            <h1>{userName}</h1>
          </div>
          {/* {userId.map((login) => {
          const user = userId.find(())
        }} */}
          <div>{/* <Link>Update status</Link> */}</div>
        </div>
      </>
    );
  }
}
