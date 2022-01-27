const inputCheck = require('../utils/inputCheck');

test('inputcheck() returns null when all properties exist', () => {
  const obj = { title: 'New note' };

  expect(inputCheck(obj, 'title')).toBe(null);
});

test('inputCheck() returns an object when a property is missing', () => {
  const obj = { title: 'New note', text: '' };

  expect(inputCheck(obj, 'title', 'text')).toEqual(
    expect.objectContaining({
      error: expect.stringContaining('No text specified'),
    })
  );
});
