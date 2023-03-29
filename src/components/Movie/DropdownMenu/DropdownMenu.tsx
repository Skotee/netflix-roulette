import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import ModalContent from '../../ModalContent/ModalContent'
import MovieEditAddForm from '../../forms/MovieEditAddForm/MovieEditAddForm';
import MovieDeleteForm from '../../forms/MovieDeleteForm/MovieDeleteForm';

import './DropdownMenu.scss';
import closeIcon from "../../../../public/x.svg";

interface DropdownMenuProps {
	onCloseDropdownMenu: () => void;
};

enum modalTypeEnum {
  EDIT = 'edit',
  DELETE = 'delete'
}

export const DropdownMenu = ({onCloseDropdownMenu}: DropdownMenuProps) => {
	const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalType, setModalType] = useState<modalTypeEnum>();


  const handleShowModal = (title: string, type: modalTypeEnum) => {
    setModalTitle(title);
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  const generateModal = () => {
    if (modalType === modalTypeEnum.EDIT) {
      return <MovieEditAddForm onClose={() => setShowModal(false)} />
    } else if (modalType === modalTypeEnum.DELETE) {
      return <MovieDeleteForm onClose={handleCloseModal} />
    } else {
        return <p>Error</p>; 
      }
    }

	const mainContainerNode = document.getElementById('mainContainer')!;

  return (
    <>
			{showModal &&
				createPortal(
					<ModalContent title={modalTitle} onClose={handleCloseModal}>
            {generateModal()}
          </ModalContent>,
					mainContainerNode
			)}
      <ul className='dropdownMenuList'>
        <li>
          <img
            onClick={() => onCloseDropdownMenu()}
            className='closeIcon'
            src={closeIcon}
            alt='Close icon'
          />
        </li>
        <li onClick={() => handleShowModal('Edit', modalTypeEnum.EDIT)}>Edit</li>
        <li onClick={() => handleShowModal('Delete', modalTypeEnum.DELETE)}>Delete</li>
      </ul>
    </>
  );
};