function testee(x) {
  if (x > 0)
    console.log('hello world');
  else
    console.log('world hello');

  console.log('more lines of code')
  console.log('more...?')
}

module.exports = { testee };
