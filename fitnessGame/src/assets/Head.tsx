import squat from '../img/squat.png';
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    function redirectToGame() {
        navigate("/game");
    }

    return (
        <>
            <div className="flex flex-wrap flex-col gap-[20px] items-center justify-center w-[90%] m-[0_auto] text-[var(--text-main)]">
                <div className="w-[100%] h-[100vh] flex flex-col gap-[10px] text-center items-center justify-center">
                    <h1 className="text-[60px] font-light">Fitness<span className="text-[var(--primary)]">Game</span></h1>
                    <p className="text-[30px] text-[var(--text-muted)]">Sfida i tuoi amici in challenge da palestrati!</p>
                    <button onClick={redirectToGame} className="w-[100%] md:w-[300px] text-[20px] text-[var(--primary)] bg-[var(--bg-main)] p-[10px] border-[1px] border-[var(--primary)] rounded-[10px] hover:bg-[var(--primary)] hover:text-[var(--bg-main)] duration-[400ms] transition-all mt-[20px]">Gioca ora!</button>
                </div>

                <div className="mb-[20px] text-center flex flex-col justify-center items-center gap-[10px] w-full">
                    <h1 className="text-[30px] text-[var(--text-main)]">Non hai ancora sfidato i tuoi amici?</h1>
                    <p className="text-[20px] text-[var(--text-muted)] w-full md:w-[50%]">è arrivato il momento di metterti alla prova da una singola app, sarete tu contro il tuo amico in una sfida di piegamenti, trazioni o squat!<br /><span className="text-[var(--primary)]">Sei sicuro di poter vincere tu?</span></p>
                    <svg className="mt-[20px]" width="200px" height="200px" fill="#22c55e" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.942,6.837,20.76,4.654l.947-.947a1,1,0,1,0-1.414-1.414l-.947.947L17.163,1.058a3.7,3.7,0,0,0-5.105,0,3.609,3.609,0,0,0,0,5.106L14.24,8.346,8.346,14.24,6.163,12.058a3.7,3.7,0,0,0-5.105,0,3.609,3.609,0,0,0,0,5.106L3.24,19.346l-.947.947a1,1,0,1,0,1.414,1.414l.947-.947,2.183,2.182a3.609,3.609,0,0,0,5.105,0h0a3.608,3.608,0,0,0,0-5.105L9.76,15.655l5.9-5.895,2.182,2.182a3.609,3.609,0,0,0,5.105,0h0a3.608,3.608,0,0,0,0-5.105ZM11,20.39a1.6,1.6,0,0,1-.472,1.138,1.647,1.647,0,0,1-2.277,0L2.472,15.749a1.61,1.61,0,1,1,2.277-2.277l5.779,5.779A1.6,1.6,0,0,1,11,20.39Zm10.528-9.862a1.647,1.647,0,0,1-2.277,0L13.472,4.749a1.61,1.61,0,1,1,2.277-2.277l5.779,5.779a1.609,1.609,0,0,1,0,2.277Z"></path></g></svg>
                    <button onClick={redirectToGame} className="w-[100%] md:w-[300px] text-[20px] text-[var(--primary)] bg-[var(--bg-main)] p-[10px] border-[1px] border-[var(--primary)] rounded-[10px] hover:bg-[var(--primary)] hover:text-[var(--bg-main)] duration-[400ms] transition-all mt-[20px]">Sfidati ora!</button>
                </div>

                <div className="mb-[20px] text-center flex flex-col justify-center items-center gap-[10px] w-full">
                    <div className="flex flex-col justify-center items-center w-[100%] gap-[20px] md:flex-row">
                        <div className="font-bold text-center w-[200px] h-[200px] border rounded-[50%] bg-[var(--primary)] border-[var(--primary)] flex flex-col justify-center items-center text-[30px]">10+<span className="font-light mt-[-10px] text-[15px]">Anni di esperienza IT</span></div>
                        <div className="font-bold text-center w-[200px] h-[200px] border rounded-[50%] bg-[var(--primary)] border-[var(--primary)] flex flex-col justify-center items-center text-[30px]">4+<span className="font-light mt-[-10px] text-[15px]">Anni di esperienza nella palestra</span></div>
                        <div className="font-bold text-center w-[200px] h-[200px] border rounded-[50%] bg-[var(--primary)] border-[var(--primary)] flex flex-col justify-center items-center text-[30px]">100+<span className="font-light mt-[-10px] text-[15px]">Amici da sfidare</span></div>
                    </div>
                </div>

                <div className="mb-[20px] text-center flex flex-col justify-center items-center gap-[10px] w-full">
                    <h1 className="text-[30px] text-[var(--text-main)]">Chi siamo?</h1>
                    <p className="text-[20px] text-[var(--text-muted)] w-full md:w-[50%]">Sono una singola persona a dire la verità, mi presento! Sono Mattia De Vincentis, ho 21 anni e sono appassionato sia di informatica che di palestra, così ho deciso di fondere le due cose assieme e creare una webapp che potesse farmi e farvi divertire con i vostri amici!</p>
                    <img src={squat} className='w-[400px] h-[auto]' />
                </div>

                <div className="mb-[20px] text-center flex flex-col justify-center items-center gap-[10px] w-full">
                    <h1 className="text-[30px] text-[var(--text-main)]">Perché fitness game?</h1>
                    <p className="text-[20px] text-[var(--text-muted)] w-full md:w-[50%]">Beh semplice no? la palestra farla singolarmente si ti sprona ma ti diverte tanto quanto farla con un tuo amico? e diciamoci la verità, alla fine cerchi sempre di essere il migliore quindi ecco fuse le due realtà!</p>
                </div>

                <div className="w-[100%] mb-[20px] text-center flex flex-col justify-center items-center gap-[10px]">
                    <h1 className="text-[30px] text-[var(--text-main)]">Ecco come funziona</h1>
                    <div className='w-[100%] md:w-[500px] bg-[var(--primary)] text-[var(--bg-main)] p-[10px] border border-[var(--primary)] rounded-[10px]'>
                        <h1 className='text-[30px] text-[var(--bg-main)] font-bold'>STEP 1</h1>
                        <p className='text-[18px]'>Scegli il livello di difficoltà</p>
                    </div>
                    <div className='w-[100%] md:w-[500px] bg-[var(--primary)] text-[var(--bg-main)] p-[10px] border border-[var(--primary)] rounded-[10px]'>
                        <h1 className='text-[30px] text-[var(--bg-main)] font-bold'>STEP 2</h1>
                        <p className='text-[18px]'>Scegli il tipo di sfida da fare</p>
                    </div>
                    <div className='w-[100%] md:w-[500px] bg-[var(--primary)] text-[var(--bg-main)] p-[10px] border border-[var(--primary)] rounded-[10px]'>
                        <h1 className='text-[30px] text-[var(--bg-main)] font-bold'>STEP 3</h1>
                        <p className='text-[18px]'>Competi con i tuoi amici!</p>
                    </div>
                </div>

                <div className="mb-[20px] text-center flex flex-col justify-center items-center gap-[10px] w-full">
                    <h1 className="text-[30px] text-[var(--text-main)]">Cosa non ti ha ancora convinto?</h1>
                    <p className="text-[20px] text-[var(--text-muted)] w-full md:w-[50%]">Forse sono sembrato troppo cattivo e frettoloso mannaggia! e se te lo chiedessi tipo perfavore? sennò mi licenzio da solo uff :(</p>
                    <button onClick={redirectToGame} className="w-[100%] md:w-[300px] text-[20px] text-[var(--primary)] bg-[var(--bg-main)] p-[10px] border-[1px] border-[var(--primary)] rounded-[10px] hover:bg-[var(--primary)] hover:text-[var(--bg-main)] duration-[400ms] transition-all mt-[20px]">Dai clicca qui perfavore :(</button>
                </div>

                <footer className='bg-[var(--primary)] w-[100%] p-[20px] flex flex-col justify-center items-center'>
                    <p className='text-[var(--bg-main)]'>@Developed by Mattia De Vincentis</p>
                </footer>
            </div>
        </>
    )
}