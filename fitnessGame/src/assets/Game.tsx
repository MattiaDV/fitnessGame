import { setDataGame } from "./Function"
import { useNavigate } from "react-router-dom";

export function Game() {
    const navigate = useNavigate();

    function redirectToGame(data: string) {
        setDataGame(data)
        navigate("/game-type");
    }

    return <>
        <div className="w-[90%] m-[0_auto] h-[100vh] flex flex-col justify-center items-center text-[var(--text-main)] gap-[10px] text-center">
            <h1 className="text-[50px]">Scegli la difficoltà</h1>
            <button onClick={() => redirectToGame("facile")} className="hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Facile</button>
            <button onClick={() => redirectToGame("intermedio")} className="hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Intermedio</button>
            <button onClick={() => redirectToGame("difficile")} className="hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Difficile</button>
        </div>
    </>
}