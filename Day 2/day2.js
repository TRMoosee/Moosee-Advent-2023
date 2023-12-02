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
        let isValid = true;

        // Look through each bag and determine if that game is possible
        for (let j = 0; j < listOfBags.length; j++) {
            let elementsInBag = listOfBags[j].split(", ")

            let violation = false;
            for (let k = 0; k < elementsInBag.length; k++) {
              let number = elementsInBag[k].split(" ")[0]
              let text = elementsInBag[k].split(" ")[1]

              switch(text) {
                case "red": if (number > 12) {violation = true; break}
                case "green": if (number > 13) {violation = true; break}
                case "blue": if (number > 14) {violation = true; break}
              }
            }

            if (violation) {
                isValid = false
                break
            }
        }

        if (isValid) {
          gameSum += i + 1;
        }
    }

    console.log(gameSum);
}

main()