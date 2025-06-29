import { db } from "@/utils/dbConnection";
import style from "@/Components/ComponentCss/avatar.module.css";

export default async function AllUsers() {
  const allUsers = await db.query(`SELECT * FROM status`);

  //   const userName = allUsers.rows[0]?.username ?? "";
  //   const userStatus = allUsers.rows[0]?.status ?? "";

  return (
    <div className={style.allUsersBox}>
      {allUsers.rows.map((user, index) => (
        <div key={index} className={style.allUsers}>
          <p className={`status ${style.status}`}>{user.status}</p>
          <h2 className={`avatar ${style.avatar}`}>{user.username}</h2>
        </div>
      ))}
    </div>
  );
}
