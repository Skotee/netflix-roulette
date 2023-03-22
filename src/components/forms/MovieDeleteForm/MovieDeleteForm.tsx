import React from "react";
import { FilledButton } from "../buttons/FilledButton/FilledButton";

import './MovieDeleteForm.scss'

export interface MovieEditAddFormProps {
  onClose: () => void;
};

const MovieDeleteForm = ({ onClose }: MovieEditAddFormProps) => {
  return(
    <>
      <p>Are you sure you want to delete this movie?</p>
      <div className="buttonContainer">
        <FilledButton onClick={onClose}>Confirm</FilledButton>
      </div>
    </>
  )
}

export default MovieDeleteForm;