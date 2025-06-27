import style from "@/Components/ComponentCss/avatar.module.css";
// import { db } from "@/utils/dbConnection";
// import Link from "next/link";

export default async function AvatarComponent() {
  // const userId = (await db.query(`SELECT * FROM login`)).rows
  return (
    <>
      <div className={style.avatarBox}>
        <div className={`test ${style.status}`}>
          <h1>Status update here</h1>
        </div>
        <div className={`test ${style.avatar}`}>
          <h1>Avatar</h1>
        </div>
        {/* {userId.map((login) => {
          const user = userId.find(())
        }} */}
        <div>{/* <Link>Update status</Link> */}</div>
      </div>
    </>
  );
}
