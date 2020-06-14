import type {testFn, Entries} from './_types';

/**
 * Discards entries which pass a test.
 * @param x entries
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function* reject<T, U>(x: Entries<T, U>, fn: testFn<T, U>, ths: object=null): Entries<T, U> {
  for(var [k, v] of x)
    if(!fn.call(ths, v, k, x)) yield [k, v];
}
export default reject;