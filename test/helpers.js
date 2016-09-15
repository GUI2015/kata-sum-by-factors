function createTestCase(executor) {
  return (orig, dest, opts = { focus: false }) => {
    const text = `${JSON.stringify(orig)} => ${JSON.stringify(dest)}`
    const fn = () => {
      expect(executor(orig)).toEqual(dest)
    }
    opts.focus ? it.only(text, fn) : it(text, fn)
  }
}

module.exports = {
  createTestCase,
}
