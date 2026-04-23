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
    done: boolean,
    time: number
}

export function EffectiveGame() {
    const [train] = useState<trainInt>(() => calculate_training());
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const navigate = useNavigate();
    const [elapsed, setElapsed] = useState(0);

    const [playerState, setPlayerState] = useState<playerState[]>(
        train.player.map(p => ({
            name: p,
            done: false,
            time: 0
        }))
    );

    const currentPlayer = playerState[currentPlayerIndex];

    function completeTurn(elapsed?: number) {
        if (currentPlayer.done) return;

        const updated = playerState.map((p, i) =>
            i === currentPlayerIndex ? { ...p, done: true, time: elapsed ?? train.timer * 60} : p
        );

        setPlayerState(updated);
        addPlayerResults(updated);

        if (currentPlayerIndex + 1 >= playerState.length) {
            navigate("/winners");
            return;
        }
        setCurrentPlayerIndex(prev => prev + 1);
    }

    return <>
        <div className="w-[90%] m-[0_auto] h-[100vh] flex flex-col justify-center items-center text-[var(--text-main)] gap-[10px] text-center">
            <h2 className="text-[25px] fixed top-[0px] left-[50%] translate-x-[-50%] w-[100%] p-[20px] bg-[var(--primary)] text-[var(--bg-main)]">
                Turno di: {currentPlayer.name}
            </h2>

            <h1 className="text-[var(--text-main)] text-[20px]">Devi fare: <br /><p className="w-[250px]">
                {train.train}
            </p></h1>

            <h1 className="text-[var(--text-main)] mb-[30%] md:mb-[5%]">{ train.timer !== 0 && (
                <Timer
                    key={currentPlayerIndex}
                    time={train.timer}
                    onTick={(e) => setElapsed(e)}
                    onEnd={(e) => completeTurn(e)}
                />
            )}</h1>

            <button 
                className="hover:bg-[var(--primary)] text-[50px] fixed bottom-[0px] left-[0px] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full h-[30%] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]"
                onClick={() => completeTurn(elapsed)}
                disabled={currentPlayer.done}
            >
                Ho finito
            </button>
        </div>
    </>
}