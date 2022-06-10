import {useEffect, useState} from "react";
import React from "react";
import {Button} from "../Button";
import s from './style.module.scss';

interface AddNewMessageProps {
  isActive: boolean;
  onClose: () => void;
  onChange: React.Dispatch<React.SetStateAction<void>>;
}

export const AddNewMessage = ({isActive, onClose, onChange}: AddNewMessageProps) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onChange((prevState: any) => [...prevState, {
      id: prevState.length + 1,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString().slice(0,-3),
      text: text,
      author: name,
    }])
    setName('');
    setText('');
    onClose();
  }

  useEffect(() => {
    if (name.length >= 1 && text.length >= 1) {
      setDisabled(false)
    } else {
      setDisabled(true);
    }
  }, [name, text]);

  if (!isActive) {
    return null;
  }

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <p onClick={onClose} className={s.close}>Close</p>
        <input value={name} onChange={(e) => setName(e.target.value)} className={s.input} type="text" name="name" placeholder="Your name"/>
        <textarea maxLength={200} value={text} onChange={(e) => setText(e.target.value)} className={s.area} placeholder="Enter text"/>
        <Button disabled={isDisabled}>Submit</Button>
      </form>
    </div>
  )
}