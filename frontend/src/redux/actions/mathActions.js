import { MATH_ADD, MATH_SUBTRACT } from "./types";

export function addNumber(number) {
  return {
    type: MATH_ADD,
    payload: number
  };
}

export function subtractNumber(number) {
  return {
    type: MATH_SUBTRACT,
    payload: number
  };
}
