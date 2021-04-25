/**
 * Helper-function for loops, similar to that of Pythons range().
 * If only one argument is passed, {start} is 0, {step} is 1 and {stop} is the argument.
 * @param {number} start An integer number.
 * @param {number} [stop] An integer number.
 * @param {number} [step] An integer number specifying the progression.
 * @return {Array} A list of arithmetic progressions.
 */
export function range(start: number, stop?: number, step?: number): Array<number> {
  if (typeof stop == 'undefined') {
    stop = start;
    start = 0;
  }

  if (typeof step == 'undefined') {
    step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }

  return result;
};
