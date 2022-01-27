const inputCheck = require('../utils/inputCheck');

test('inputcheck() returns null when all properties exist', () => {
  const obj = { name: 'Nic' };

  expect(inputCheck(obj, 'name')).toBe(null);
});

test('inputCheck() returns an object when a property is missing', () => {
  const obj = { name: 'Nic', ooccupation: '' };

  expect(inputCheck(obj, 'name', 'occupation')).toEqual(
    expect.objectContaining({
      error: expect.stringContaining('No occupation specified'),
    })
  );
});
