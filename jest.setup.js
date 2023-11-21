// jest.setup.js

if (typeof structuredClone === 'undefined') {
  global.structuredClone = (data) => JSON.parse(JSON.stringify(data));
}
