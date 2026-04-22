import { useEffect, useRef, useState } from "react";

type TimerProps = {
    time: number;
};

export function Timer({ time }: TimerProps) {
    const [seconds, setSeconds] = useState(time * 60);
    const [isRunning, setIsRunning] = useState(false);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const intervalRef = useRef<number | null>(null);

    function start() {
        if (intervalRef.current !== null) return;

        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setSeconds(prev => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current!);
                    intervalRef.current = null;
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
        }
        setIsRunning(false);
    }

    function reset() {
        stop();
        setSeconds(time * 60);
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