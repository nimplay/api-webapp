const comments = [
  {
    name: 'hi',
    date: '2022-07-12',
    comment: 'hello',
  },
  {
    name: 'hi',
    date: '2022-07-12',
    comment: 'hello',
  },
  {
    name: 'hi',
    date: '2022-07-12',
    comment: 'hello',
  },
  {
    name: 'hi',
    date: '2022-07-12',
    comment: 'hello',
  },
];
let numComments = 0;
test('countnum comments into the popup', () => {
  numComments = comments.length;
  expect(numComments).toBe(4);
});
