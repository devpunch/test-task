import s from './style.module.scss';
import {Message} from "../../components/Message";
import {useEffect, useMemo, useState} from "react";
import {AddNewMessage} from "../../components/AddNewMessage";
import {TMessageList} from "../../types/messages";
import {Button} from "../../components/Button";

export const MessagesBord = () => {
  const [messages, setMessages] = useState(() => {
    const messageList = localStorage.getItem('message_list')
    if (!messageList) {
      localStorage.setItem('message_list', '[]')
      return []
    }

    return JSON.parse(messageList)
  });
  const [isActiveMenu, toggleMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const handleOpenMenu = () => {
    toggleMenu(true);
  };
  const handleCloseMenu = () => {
    toggleMenu(false);
  };

  useEffect(() => {
    localStorage.setItem('message_list', JSON.stringify(messages));

  }, [messages]);

  const filteredItems = useMemo(() => {
    if (Array.isArray(messages)) {
      return messages.filter((item: TMessageList) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  }, [searchValue, messages]);


  

  return (
    <div className={s.wrapper}>
      <div>
        {
          Array.isArray(messages) && messages.length > 0 && (
            <form className={s.form}>
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className={s.input}
                type="text"
                placeholder="Search"
              />
            </form>
          )
        }
      </div>
      {
        filteredItems !== undefined && filteredItems.map((item) => (
          <Message
            key={item.id}
            date={item.date}
            time={item.time}
            text={item.text}
            author={item.author}
          />
        ))
      }
      <Button onClick={handleOpenMenu}>Add new comment</Button>
      <AddNewMessage isActive={isActiveMenu} onClose={handleCloseMenu} onChange={setMessages}/>
    </div>

  )
}