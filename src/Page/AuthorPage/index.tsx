import {useLocation, useNavigate} from "react-router-dom";
import {useMemo} from "react";
import {TMessageList} from "../../types/messages";

import s from './style.module.scss';
import {Button} from "../../components/Button";

export const AuthorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const nameAuthor = useMemo(() => location?.pathname.replace('/', ''), [location]);
  const authorMessages = useMemo(() => {
    const messages = JSON.parse(localStorage.getItem('message_list') || '[]');
    if (Array.isArray(messages)) {
      return messages.filter((item: TMessageList) =>
        item.author.toLowerCase().includes(nameAuthor.toLowerCase())
      );
    }
  }, [nameAuthor]);
  
  return (
    <div className={s.wrapper}>
      <div className={s.author}>
        <p>Name author:</p>
        <p>{nameAuthor}</p>
      </div>
      <p className={s.allMessage}>All your messages</p>
      <ul className={s.list}>
        {
          authorMessages !== undefined && authorMessages.map((item, index) => (
            <li
              className={s.item}
              key={index}
            >
              {item.text}
            </li>
          ))
        }
      </ul>
      <Button onClick={() => navigate('/')}>Back to Board</Button>
    </div>
  )
}