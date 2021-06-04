import invariant from '../src/'

it('should not throw if condition is truthy', () => {
  const truthy: unknown[] = [1, Symbol(), true, "a", {}, []]

  truthy.forEach((v: unknown) => expect(() => invariant(v)).not.toThrow())
})

it('should throw if condition is falsy', () => {
  const falsy: unknown[] = [undefined, null, false, 0, -0, NaN, '']

  falsy.forEach((v: unknown) => expect(() => invariant(v)).toThrow())
})
