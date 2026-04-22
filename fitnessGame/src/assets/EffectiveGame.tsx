import { calculate_training, addPlayerResults } from "./Function";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Timer } from "./timer";

type trainInt = {
    train: string,
    player: string[],
    timer: number
}

type playerState = {
    name: string,
    done: boolean
}

export function EffectiveGame() {
    let train: trainInt = calculate_training();
    const navigate = useNavigate();

    let [playerState, setPlayerState] = useState<playerState[]>(
        train.player.map(p => ({
            name: p,
            done: false
        }))
    );

    function togglePlayer(index: number) {
        setPlayerState(prev => {
            const updated = prev.map((p, i) => 
                i === index ? { ...p, done: !p.done } : p
            );

            addPlayerResults(updated);

            return updated;
        })
    }

    function viewWinner() {
        navigate("/winners");
    }

    return <>
        <div className="w-[90%] m-[0_auto] h-[100vh] flex flex-col justify-center items-center text-[var(--text-main)] gap-[10px] text-center">
            <h1 className="text-[var(--text-main)] text-[20px]">Devi fare: <br /><p className="w-[250px]">
                {train.train}
            </p></h1>

            <h1 className="text-[var(--text-main)]">{ train.timer == 0 ? "" : <Timer time={train.timer} /> }</h1>

            <ul>
                {
                    playerState.map((pl, index) => (
                        <li key={index} className="text-[20px] p-[2px] ">
                            <input type="checkbox" checked={pl.done} onChange={() => togglePlayer(index)} /> - {pl.name}</li>
                    ))
                }
            </ul>
            <button onClick={() => viewWinner()} className="hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Winner</button>
        </div>
    </>
}