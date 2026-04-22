import { setDataGameType } from "./Function"
import { useNavigate } from "react-router-dom"

export function TrainTypes() {
    const navigate = useNavigate();

    function redirectToGame(data: string) {
        setDataGameType(data)
        navigate("/effective-game");
    }
    
    return <>
        <div className="w-[90%] m-[0_auto] h-[100vh] flex flex-col justify-center items-center text-[var(--text-main)] gap-[10px] text-center">
            <h1 className="text-[40px]">Scegli l'allenamento</h1>
            <button onClick={() => redirectToGame("piegamenti")} className="hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Piegamenti</button>
            <button onClick={() => redirectToGame("squat")} className="hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Squat</button>
            <button onClick={() => redirectToGame("trazioni")} className="hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Trazioni</button>
            <button onClick={() => redirectToGame("full")} className="hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Full Demon</button>
        </div>
    </>
}