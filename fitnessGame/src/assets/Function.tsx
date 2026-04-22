type playerState = {
    name: string,
    done: boolean
}

let training = {
    "squat": [10, 30, 80],
    "piegamenti": [2, 10, 30],
    "trazioni": [1, 5, 15]
};

let players: string[] = [];
export let players_results: playerState[] = [];

export function addPlayerResults(datas: playerState[]) {
    players_results = [...datas];
}

export function setPlayersTotals(datas: string[]) {
    players = [...datas];
}

export let data_game = {
    "difficoltà": "",
    "tipologia": ""
};

export function setDataGameType(data: string) {
    data_game.tipologia = data;
    console.log(data_game);
}

export function setDataGame(data: string) {
    data_game.difficoltà = data;
    console.log(data_game);
}

export function calculate_training() {
    let train = [];
    if (data_game.difficoltà.includes("facile")) {
        train[0] = training.squat[0];
        train[1] = training.piegamenti[0];
        train[2] = training.trazioni[0];
    } else if (data_game.difficoltà.includes("intermedio")) {
        train[0] = training.squat[1];
        train[1] = training.piegamenti[1];
        train[2] = training.trazioni[1];
    } else if (data_game.difficoltà.includes("difficile")) {
        train[0] = training.squat[2];
        train[1] = training.piegamenti[2];
        train[2] = training.trazioni[2];
    }

    if (data_game.tipologia.includes("trazioni") && data_game.difficoltà.includes("facile")) {
        return {
            "train": train[2] + " trazioni",
            "player": players,
            "timer": 0
        };
    } else if (data_game.tipologia.includes("trazioni") && data_game.difficoltà.includes("intermedio")) {
        return {
            "train": train[2] + " trazioni",
            "player": players,
            "timer": 3
        };
    } else if (data_game.tipologia.includes("trazioni") && data_game.difficoltà.includes("difficile")) {
        return {
            "train": train[2] + " trazioni",
            "player": players,
            "timer": 3
        };
    } else if (data_game.tipologia.includes("squat") && data_game.difficoltà.includes("facile")) {
        return {
            "train": train[0] + " squat",
            "player": players,
            "timer": 0
        };
    } else if (data_game.tipologia.includes("squat") && data_game.difficoltà.includes("intermedio")) {
        return {
            "train": train[0] + " squat",
            "player": players,
            "timer": 5
        };
    } else if (data_game.tipologia.includes("squat") && data_game.difficoltà.includes("difficile")) {
        return {
            "train": train[0] + " squat",
            "player": players,
            "timer": 7
        };
    } else if (data_game.tipologia.includes("piegamenti") && data_game.difficoltà.includes("facile")) {
        return {
            "train": train[1] + " piegamenti", 
            "player": players,
            "timer": 0
        };
    } else if (data_game.tipologia.includes("piegamenti") && data_game.difficoltà.includes("intermedio")) {
        return {
            "train": train[1] + " piegamenti", 
            "player": players,
            "timer": 3
        };
    } else if (data_game.tipologia.includes("piegamenti") && data_game.difficoltà.includes("difficile")) {
        return {
            "train": train[1] + " piegamenti", 
            "player": players,
            "timer": 5
        };
    } else if (data_game.tipologia.includes("full") && data_game.difficoltà.includes("facile")) {
        return {
            "train": train[0] + " squat | " + train[1] + " piegamenti | " + train[2] + " trazioni",
            "player": players,
            "timer": 5
        };
    } else if (data_game.tipologia.includes("full") && data_game.difficoltà.includes("intermedio")) {
        return {
            "train": train[0] + " squat | " + train[1] + " piegamenti | " + train[2] + " trazioni",
            "player": players,
            "timer": 8
        };
    } else if (data_game.tipologia.includes("full") && data_game.difficoltà.includes("difficile")) {
        return {
            "train": train[0] + " squat | " + train[1] + " piegamenti | " + train[2] + " trazioni",
            "player": players,
            "timer": 10
        };
    }

    return {
        "train": "none",
        "player": ["none"],
        "timer": 0
    }
}