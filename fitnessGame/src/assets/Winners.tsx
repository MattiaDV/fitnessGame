import { useNavigate } from "react-router-dom"
import { players_results } from "./Function";

export function Winners() {
    const navigate = useNavigate();
    console.log(players_results);

    function returnHome() {
        navigate("/");
    }

    function reMatch() {
        navigate("/game");
    }

    return (
        <>
            <div className="flex flex-col w-[90%] m-[0_auto] h-[100vh] justify-center items-center text-center">
                <h1 className="text-[var(--text-secondary)] text-[60px]">I vincitori!</h1>

                <ul className="mb-[15px] text-center">
                    {players_results
                        .sort((a, b) => a.time - b.time)
                        .map((p, i) => (
                            <li key={i} className="text-[20px] text-[var(--text-main)]">{i + 1}°) {p.name} - tempo: {p.time} Secondi</li>
                        ))}
                </ul>

                <button onClick={() => returnHome()} className="mb-[10px] hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Torna alla home</button>
                <button onClick={() => reMatch()} className="hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Rigioca</button>
            </div>
        </>
    )
}