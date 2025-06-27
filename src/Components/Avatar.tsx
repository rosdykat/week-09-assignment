import style from "@/Components/ComponentCss/avatar.module.css";
// import Link from "next/link";

export default function AvatarComponent() {
  return (
    <>
      <div className={style.avatarBox}>
        <div className={`test ${style.status}`}>
          <h1>Status update here</h1>
        </div>
        <div className={`test ${style.avatar}`}>
          <h1>Avatar</h1>
        </div>
        <div>{/* <Link>Update status</Link> */}</div>
      </div>
    </>
  );
}
