/**
 * @param {Map<String, number>} map - A map of grocery.
 * @author Amr Mohamad <https://github.com/amrrmohamad>
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
