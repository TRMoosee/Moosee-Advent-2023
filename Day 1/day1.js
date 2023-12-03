/**
 * Advent of code day 1
 * Trebuchet?!
 * Moosee
 * 12/1/2023
 */
import { readFileSync } from 'fs';

const readFileLines = filename =>
  readFileSync(filename).toString('UTF8').split('\n');

let inputArray = readFileLines('input.txt');
let regex = /\d{1}/g;

function part1() {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        let matches = inputArray[i].match(regex);  // creates array from matches
        let combination = matches[0] + matches[matches.length - 1]
        sum += Number(combination)
    }

    console.log(sum)
}

function part2() {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i].replace(/one/g, "o1e");
        inputArray[i] = inputArray[i].replace(/two/g, "t2o");
        inputArray[i] = inputArray[i].replace(/three/g, "t3e");
        inputArray[i] = inputArray[i].replace(/four/g, "f4r");
        inputArray[i] = inputArray[i].replace(/five/g, "f5e");
        inputArray[i] = inputArray[i].replace(/six/g, "s6x");
        inputArray[i] = inputArray[i].replace(/seven/g, "s7n");
        inputArray[i] = inputArray[i].replace(/eight/g, "e8t");
        inputArray[i] = inputArray[i].replace(/nine/g, "n9e");

        let matches = inputArray[i].match(regex);  // creates array from matches
        let combination = matches[0] + matches[matches.length - 1]

        sum += Number(combination)
    }

    console.log(sum)
}

part2()