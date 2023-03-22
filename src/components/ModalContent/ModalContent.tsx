import React from "react";

import './ModalContent.scss'
import closeIcon from '../../../public/x.svg'

export interface ModalContentProps {
	title: string;
  children: React.ReactNode;
  onClose: () => void;
};

const ModalContent = ({title, children, onClose}: ModalContentProps) => {
	return (
    <div className="modalContainer">
      <div className="modalContent">
        <input type="image" onClick={onClose} src={closeIcon}></input>
        <p className='modalTitle'>{title} movie</p>
        {children}
      </div>
    </div>
)}

export default ModalContent;