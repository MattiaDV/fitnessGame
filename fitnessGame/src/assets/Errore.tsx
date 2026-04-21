export function Error404() {
    return (
        <>
            <div className="flex flex-col w-[90%] m-[0_auto] h-[100vh] justify-center items-center text-center">
                <h1 className="text-[var(--text-secondary)] text-[60px]">Errore 404</h1>
                <a href="/" className="text-[var(--text-muted)] text-[30px]">Torna alla home</a>
            </div>
        </>
    )
}