import React, {useState} from "react";
import submitScoreToLeaderboard from "../../Utils/submitScoreToLeaderboard";
import Css from './WinForm.module.css'

interface WinFormProps {
  finalTime: number;
}
const WinForm: React.FC<WinFormProps> = ({finalTime}) => {
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Please enter your name.");
    } else {
      await submitScoreToLeaderboard(name, finalTime)
      setIsVisible(false);
      setName("");
    }
  };

  return (
    <div>
      <p className={Css.centered}>Your time is: {finalTime} seconds</p>
      <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          className={`${isVisible ? "" : Css.invisible} ${Css.input_field}`}
      />
      <button
          onClick={handleSubmit}
          className={isVisible ? "" : Css.invisible}
      >
        Submit
      </button>
    </div>
  )
}

export default WinForm;