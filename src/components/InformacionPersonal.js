// import styles from "./styles/InformacionPersonal.module.css"
import backImg from "../assets/imgs/fondo.jpg";
import userImg from "../assets/imgs/avatar.png";

export default function InformacionPersonal() {
  return (
    <div className="w-full bg-slate-500 relative">
      <img
        className="object-cover w-full h-[300px]"
        src={backImg}
        alt="Fondo de Programacion"
      />
      <div className="w-full flex justify-center absolute -bottom-12">
        <div>
          <div className="rounded-full h-[200px] w-[200px] bg-white flex items-center justify-center">
            <img
              className="object-cover h-[180px] w-[180px] rounded-full"
              src={userImg}
              alt="Willian Cueva"
            />
          </div>
          <div className="bg-red-200">info</div>
        </div>
      </div>
    </div>
  );
}
