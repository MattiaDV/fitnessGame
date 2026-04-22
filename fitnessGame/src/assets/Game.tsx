import { setDataGame } from "./Function"
import { useNavigate } from "react-router-dom";
import { setPlayersTotals } from "./Function";
import { useState } from "react";

export function Game() {
    const navigate = useNavigate();
    let [player, setPlayers] = useState<string[]>([]);
    let [name, setName] = useState("");

    function addPlayer(name: string) {
        if (!name.trim()) return;

        setPlayers(prev => [...prev, name]);
        setName("");
    }

    function redirectToGame(data: string) {
        if (player.length > 0) {
            setPlayersTotals(player)
            setDataGame(data)
            navigate("/game-type");
        }
    }

    return <>
        <div className="w-[90%] m-[0_auto] h-[100vh] flex flex-col justify-center items-center text-[var(--text-main)] gap-[10px] text-center">
            <h1 className="text-[50px]">Chi gioca?</h1>
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-[200px] p-[10px] mr-[10px] border border-[var(--bg-main)] rounded-[10px] outline-none text-[var(--bg-main)]" type="text" placeholder="name"></input>
                <button onClick={() => addPlayer(name)} className="w-[40px] h-[40px] border border-[var(--bg-main)] rounded-[50%] bg-[var(--primary)] text-center text-[20px]">+</button>
            </div>
            <ul>
                {
                    player.map((pl, index) => (
                        <li key={index} className="text-[20px] p-[2px] ">- {pl}</li>
                    ))
                }
            </ul>
            <h1 className="text-[50px]">Scegli la difficoltà</h1>
            <button onClick={() => redirectToGame("facile")} className="hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Facile</button>
            <button onClick={() => redirectToGame("intermedio")} className="hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Intermedio</button>
            <button onClick={() => redirectToGame("difficile")} className="hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Difficile</button>
        </div>
    </>
}