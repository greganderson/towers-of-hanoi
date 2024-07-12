import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { discs } from "../assets/discs";
import Tower from "./Tower";
import styles from "./Game.module.css";

export default function Game() {
  const [parent, setParent] = useState(null);
  const [moves, setMoves] = useState(0);
  const [towerState, setTowerState] = useState({
    t1: [...discs],
    t2: [],
    t3: [],
  });

  // Check for the win condition, which is if the discs are all on the right tower
  useEffect(() => {
    if (towerState.t3.length === discs.length) {
      tellUserTheyWonIGuess();
    }
  }, [towerState]);

  const toastConfig = {
    position: "top-center",
    autoClose: 50000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  };
  const message = "YOU FOOL! YOU SHOULD KNOW BETTER THAN TO MOVE A BIGGER DISC ON TOP OF A SMALLER ONE!!";
  const yellAtUser = () => toast.error(message, toastConfig);
  const winMessage = `You won! It only took you...${moves} moves? Hmm... *awkward cough* Well you did great!`;
  const tellUserTheyWonIGuess = () => toast.success(winMessage, toastConfig);

  function handleDragEnd({ active, over }) {
    setParent(over ? over.id : null);

    const newT1 = towerState.t1.filter(disc => disc.id !== active.id);
    const newT2 = towerState.t2.filter(disc => disc.id !== active.id);
    const newT3 = towerState.t3.filter(disc => disc.id !== active.id);

    // Get the disc
    const disc = discs.find(disc => disc.id === active.id);

    // Get discs from target tower (the "over" tower)
    const targetDiscs = towerState[over.id];
    if (targetDiscs.length > 0) {

      // Get last disc in target tower
      const lastDisc = targetDiscs[targetDiscs.length - 1];

      // Check if the current disc we got above has a larger ID than
      // the last disc in the target tower. If it's larger, deny the
      // move, put the disc back where it came from, then yell at the user
      // for doing such a terrible thing.

      // smaller ID == bigger disc, so smaller ID shouldn't be allowed on
      // top of bigger ID.
      if (disc.id < lastDisc.id) {
        // Deny the move
        console.log("bad move");
        yellAtUser();
        return;
      }
    }

    // Add disc to the target tower

    if (over.id === "t1") newT1.push(disc);
    else if (over.id === "t2") newT2.push(disc);
    else if (over.id === "t3") newT3.push(disc);

    setMoves(prev => prev + 1);

    setTowerState({
      t1: newT1,
      t2: newT2,
      t3: newT3,
    });
  }

  return (
    <main className={styles.game}>
      <DndContext onDragEnd={handleDragEnd}>
        <Tower towerId={"t1"} discs={towerState.t1} />
        <Tower towerId={"t2"} discs={towerState.t2} />
        <Tower towerId={"t3"} discs={towerState.t3} />
      </DndContext>
    </main>
  );
}
