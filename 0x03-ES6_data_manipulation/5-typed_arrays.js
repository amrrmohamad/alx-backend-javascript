/**
 * @param {Number} length - The length.
 * @param {Number} position - The positin.
 * @param {Number} value - The value stored in position.
 * @author Amr Mohamad <https://github.com/amrrmohamad>
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
