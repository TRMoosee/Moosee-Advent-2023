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

function part1() {
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
              let number = Number(elementsInBag[k].split(" ")[0])
              let text = elementsInBag[k].split(" ")[1]

              if (text.includes("red")) {
                if (number > 12) {violation = true; break}
              }
              else if (text.includes("green")) {
                if (number > 13) {violation = true; break}
              }
              else if (text.includes("blue")) {
                if (number > 14) {violation = true; break}
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

function part2() {
  let gameSum = 0;

  // Walk through all games
  for (let i = 0; i < inputArray.length; i++) {
      // Split this game into its individual bags
      let listOfBags = inputArray[i].split(": ")[1].split("; ")
      let redHighest = 0;
      let greenHighest = 0;
      let blueHighest = 0;

      // Look through each bag and determine if that game is possible
      for (let j = 0; j < listOfBags.length; j++) {
          let elementsInBag = listOfBags[j].split(", ")

          for (let k = 0; k < elementsInBag.length; k++) {
            let number = Number(elementsInBag[k].split(" ")[0])
            let text = elementsInBag[k].split(" ")[1]

            if (text.includes("red")) {
              if (number > redHighest) {redHighest = number; continue;}
            }
            else if (text.includes("green")) {
              if (number > greenHighest) {greenHighest = number; continue;}
            }
            else if (text.includes("blue")) {
              if (number > blueHighest) {blueHighest = number; continue;}
            }
          }
      }

      gameSum += redHighest * greenHighest * blueHighest
  }

  console.log(gameSum);
}

part2()