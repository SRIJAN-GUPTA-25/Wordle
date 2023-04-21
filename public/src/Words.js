import wordBank from "./wordle-bank.txt";

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const generateWordset = async () => {
    let wordSet;
    let today;
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            const wordArr = result.split("\n");
            today = wordArr[Math.floor(Math.random() * wordArr.length)];
            wordSet = new Set(wordArr);
        });
    // const newSet=new Set()
    return { wordSet, today };
};