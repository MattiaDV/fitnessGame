import { useNavigate } from "react-router-dom";
import { calculate_training } from "./Function";

export function EffectiveGame() {
    const navigate = useNavigate();
    let train = calculate_training();

    function returnToHome() {
        navigate("/");
    }

    function reGame() {
        navigate("/game")
    }

    return <>
        <div className="w-[90%] m-[0_auto] h-[100vh] flex flex-col justify-center items-center text-[var(--text-main)] gap-[10px] text-center">
            <h1 className="text-[50px]">La tua sfida!</h1>
            <h1 className="text-[var(--text-main)] text-[20px]">Devi fare: <br /><p className="w-[250px]">{train}</p></h1>
            <button onClick={() => reGame()} className="hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Rigioca</button>
            <button onClick={() => returnToHome()} className="hover:bg-[var(--primary)] hover:text-[var(--bg-main)] transition-all duration-[400ms] w-full md:w-[300px] bg-[var(--bg-main)] border border-[var(--primary)] p-[10px] text-[20px] rounded-[10px] text-[var(--primary)]">Home</button>
        </div>
    </>
}