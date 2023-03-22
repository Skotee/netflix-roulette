import React from "react";

import { FilledButton } from "../buttons/FilledButton/FilledButton";
import { OutlinedButton } from "../buttons/OutlinedButton/OutlinedButton";
import genres from "../../../mockData/genres";
import './MovieEditAddForm.scss'

export interface MovieEditAddFormProps {
  onClose: () => void;
};

const MovieEditAddForm = ({ onClose }: MovieEditAddFormProps) => {
  const submitForm = () => {
    console.log('clicked submit')
    onClose();
  }

  const handleResetForm = () => {
    console.log('handleResetForm')
    onClose();
  }

  return(
    <form>
      <div className="formGridContainer">
        <div className="firstColumn column">
          <div>
            <label htmlFor='title'>
              Title
            </label>
            <input id="title" type="text" placeholder="Movie title" />
          </div>
        
          <div>           
            <label htmlFor='movieUrl'>
              Movie url
            </label>
            <input id="movieUrl" 
              placeholder="https://"
              pattern="https://.*" 
              size={30}
              type="url" 
            />
          </div>

          <div>
            <label htmlFor='genre'>
              Genre
            </label>
            <select id="genre">
              {Object.entries(genres).map(([key, value]) => (
                key !== "GENRE_ALL" &&
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="secondColumn column">
          <div>
            <label htmlFor='releaseDate'>
              Release Date
            </label>
            <input id="releaseDate" placeholder="Select Date" type='date' />
          </div>

          <div>
            <label htmlFor='rating'>
              Rating
            </label>
            <input id='rating' placeholder="7.8" type="number" min="1" max="10" step={0.1} />
          </div>
          
          <div>
            <label htmlFor='runtime'>
              Runtime
            </label>
            <input id="runtime" placeholder="minutes" type="number" min="1" />
          </div>
        </div>

        <div className="overviewContainer">
          <label htmlFor='overview'>
            Overview
          </label>
          <textarea id="overview" placeholder="Movie description" rows={8} spellCheck />
        </div>

      </div>
      <div className="buttonContainer">
        <OutlinedButton onClick={() => handleResetForm()}>Reset</OutlinedButton>
        <FilledButton onClick={() => submitForm()}>Submit</FilledButton>
      </div>
    </form>
  )
}
export default MovieEditAddForm;