/**
 * Advent of code day 2
 * Cube Conundrum
 * Moosee
 * 12/2/2023
 */
import { readFileSync } from 'fs';

const readFileLines = filename =>
  readFileSync(filename).toString('UTF8').split('\n');

let inputArray = readFileLines('input.txt');

function main() {
    let gameSum = 0;

    // Walk through all games
    for (let i = 0; i < inputArray.length; i++) {
        // Split this game into its individual bags
        let listOfBags = inputArray[i].split(": ")[1].split("; ")
        // Look through each bag and determine if that game is possible
        // for (let j = 0; j < listOfBags[i].length; j++) {
        //     let bag = listOfBags[i].split(", ")[j]
        //     console.log(bag)
        // }
    }
}

main()