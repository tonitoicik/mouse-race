import { ref, push, set } from "firebase/database";
import db from "../Config/firebaseConfig";

const submitScoreToLeaderboard = async (name: string, time: number) => {
  const leaderboardRef = ref(db, "leaderboard");

  try {
    const newScoreRef = push(leaderboardRef);
    await set(newScoreRef, {
      name: name,
      time: time,
    });
  } catch (error) {
    console.error("Error submitting score:", error);
  }
};

export default submitScoreToLeaderboard;
