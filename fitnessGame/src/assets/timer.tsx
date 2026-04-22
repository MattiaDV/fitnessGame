import { useEffect, useRef, useState } from "react";

type TimerProps = {
    time: number,
    onEnd?: (elapsed: number) => void,
    onTick?: (elapsed: number) => void
};

export function Timer({ time, onEnd, onTick }: TimerProps) {
    const [seconds, setSeconds] = useState(time * 60);
    const [isRunning, setIsRunning] = useState(false);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const startTime = useRef<number | null>(null);
    const elapsedBeforePause = useRef(0);

    const intervalRef = useRef<number | null>(null);

    function start() {
        if (intervalRef.current !== null) return;

        startTime.current = Date.now();
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setSeconds(prev => {
                const currentElapsed = elapsedBeforePause.current + Math.floor((Date.now() - startTime.current!) / 1000);
                onTick?.(currentElapsed);

                if (prev <= 1) {
                    clearInterval(intervalRef.current!);
                    intervalRef.current = null;
                    setIsRunning(false);
                    onEnd?.(currentElapsed);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }

    function stop() {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;

            elapsedBeforePause.current += Math.floor((Date.now() - startTime.current!) / 1000);
        }
        setIsRunning(false);
    }

    function reset() {
        stop();
        setSeconds(time * 60);
        startTime.current = null;
    }

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="flex flex-col items-center gap-[10px] bg-[var(--primary)] p-[20px] border border-[var(--bg-main)] rounded-[10px]">

            <h1 className="text-[40px]">
                {minutes}:{secs.toString().padStart(2, "0")}
            </h1>

            <div className="flex gap-[10px]">
                <button className="bg-[var(--bg-main)] p-[10px] border border-[var(--bg-main)] rounded-[10px]" onClick={start}>Start</button>
                <button className="bg-[var(--bg-main)] p-[10px] border border-[var(--bg-main)] rounded-[10px]" onClick={stop}>Stop</button>
                <button className="bg-[var(--bg-main)] p-[10px] border border-[var(--bg-main)] rounded-[10px]" onClick={reset}>Reset</button>
            </div>

            <p className="text-[var(--bg-main)]">{isRunning ? "In corso..." : "Fermo"}</p>

        </div>
    );
}