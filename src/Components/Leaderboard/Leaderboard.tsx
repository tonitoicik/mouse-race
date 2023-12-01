import React, { useEffect, useState } from "react";
import { ref, query, orderByChild, limitToFirst, get, DataSnapshot } from "firebase/database";
import Css from './Leaderboard.module.css'
import db from "../../Config/firebaseConfig";

interface LeaderboardEntry {
  name: string;
  time: number;
}

const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const leaderboardRef = ref(db, "leaderboard");

    const leaderboardQuery = query(
        leaderboardRef,
        orderByChild("time"),
        limitToFirst(3)
    );

    get(leaderboardQuery).then((snapshot: DataSnapshot) => {
      const leaderboardData: LeaderboardEntry[] = [];

      snapshot.forEach((childSnapshot: DataSnapshot) => {
        const entry: LeaderboardEntry = childSnapshot.val();
        leaderboardData.push(entry);
      });

      setLeaderboard(leaderboardData);
    });

  }, []);

  return (
    <div className={Css.wrapper}>
      <h2 className={Css.centered}>Leaderboard</h2>
        {leaderboard.map((entry) => (
            <p className={Css.centered}>
              {entry.name}: {entry.time} seconds
            </p>
        ))}
    </div>
  );
};

export default Leaderboard;
