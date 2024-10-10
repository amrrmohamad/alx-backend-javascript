/**
 * A weak map of calls made.
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of calls.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * @param {{protocol: String,name: String,
 * }} endpoint - The endpoint to make a request to.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
