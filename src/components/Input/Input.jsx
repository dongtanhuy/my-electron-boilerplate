import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodoAction } from '../../actions/todoAction';

import './Input.scss';

const Input = ({ placeholder }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      dispatch(addTodoAction({ text: value, id: uuidv4() }));
      setValue('');
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <input type="text" placeholder={placeholder} value={value} onChange={onChange} onKeyDown={onKeyDown} />
  );
};

export default Input;
