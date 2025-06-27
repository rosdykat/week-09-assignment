import style from "@/Components/ComponentCss/title.module.css";
import Menu from "./Menu";
import Logins from "./Logins";

export default function Title() {
  return (
    <>
      <div className={style.header}>
        <div className={`test ${style.title}`}>
          <h1>Social Media</h1>
        </div>
        <Logins />
        <div className={`test ${style.menu}`}>
          <Menu />
        </div>
      </div>
    </>
  );
}
