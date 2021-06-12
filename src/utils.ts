/**
 * create Array [0, 1, ..., count - 1]
 */
export const range = (count: number) => Array.from(new Array(count)).map((_, i) => i)
