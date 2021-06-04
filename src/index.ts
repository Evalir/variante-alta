const prefix: string = 'Invariant failed'

// Throws if the condition fails, with the specified error.
// Doesn't strip error messages for production, unlike tiny-invariant.
// Mainly useful for checking for invariants that are interpolated from user data.
export default function invariant(
  condition: any,
  message?: string,
): asserts condition {
  if (condition) {
    return
  }

  throw new Error(`${prefix}${message ? `: ${message}` : ''}`)
}
