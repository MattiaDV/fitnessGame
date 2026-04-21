export function Home() {
    return (
        <>
            <div className="flex flex-wrap flex-col gap-[10px] items-center justify-center w-[90%] m-[0_auto] text-[var(--text-main)]">
                <div className="w-[100%] h-[100vh] flex flex-col gap-[10px] text-center items-center justify-center">
                    <h1 className="text-[60px] font-light">Fitness<span className="text-[var(--text-secondary)]">Game</span></h1>
                    <p className="text-[30px] text-[var(--text-muted)]">Sfida i tuoi amici in challenge da palestrati!</p>
                </div>

                <div className="mb-[20px] text-center flex flex-col justify-center items-center gap-[10px]">
                    <h1 className="text-[30px] text-[var(--text-main)]">Non hai ancora sfidato i tuoi amici?</h1>
                    <p className="text-[20px] text-[var(--text-muted)]">è arrivato il momento di metterti alla prova da una singola app, sarete tu contro il tuo amico in una sfida di piegamenti, trazioni o squat!<br /><span className="text-[var(--text-main)]">Sei sicuro di poter vincere tu?</span></p>
                    <svg className="mt-[20px]" width="200px" height="200px" fill="#22c55e" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.942,6.837,20.76,4.654l.947-.947a1,1,0,1,0-1.414-1.414l-.947.947L17.163,1.058a3.7,3.7,0,0,0-5.105,0,3.609,3.609,0,0,0,0,5.106L14.24,8.346,8.346,14.24,6.163,12.058a3.7,3.7,0,0,0-5.105,0,3.609,3.609,0,0,0,0,5.106L3.24,19.346l-.947.947a1,1,0,1,0,1.414,1.414l.947-.947,2.183,2.182a3.609,3.609,0,0,0,5.105,0h0a3.608,3.608,0,0,0,0-5.105L9.76,15.655l5.9-5.895,2.182,2.182a3.609,3.609,0,0,0,5.105,0h0a3.608,3.608,0,0,0,0-5.105ZM11,20.39a1.6,1.6,0,0,1-.472,1.138,1.647,1.647,0,0,1-2.277,0L2.472,15.749a1.61,1.61,0,1,1,2.277-2.277l5.779,5.779A1.6,1.6,0,0,1,11,20.39Zm10.528-9.862a1.647,1.647,0,0,1-2.277,0L13.472,4.749a1.61,1.61,0,1,1,2.277-2.277l5.779,5.779a1.609,1.609,0,0,1,0,2.277Z"></path></g></svg>
                    <button className="text-[20px] text-[var(--bg-main)] bg-[var(--text-secondary)] p-[10px] border-[1px] border-[var(--text-secondary)] rounded-[10px] hover:bg-[var(--bg-main)] hover:text-[var(--text-secondary)] duration-[400ms] transition-all mt-[20px]">Accedi ora all'App</button>
                </div>
            </div>
        </>
    )
}