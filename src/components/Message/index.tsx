import s from './style.module.scss'
import {FC} from "react";
import {useNavigate} from "react-router-dom";

interface messageProps {
  date: string;
  time: string;
  text: string;
  author: string;
}

export const Message: FC<messageProps> = ({date, time, author, text}) => {
  const navigate = useNavigate();
  const handleRelocateClick = () => {
    navigate(`/${author}`)
  }
  
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <p onClick={handleRelocateClick} className={s.author}>
          {author}
        </p>
        <div className={s.dateInfo}>
          <p className={s.time}>{time}</p>
          <p className={s.date}>{date}</p>
        </div>
      </div>
      <p className={s.text}>
        {text}
      </p>
    </div>
  )
}