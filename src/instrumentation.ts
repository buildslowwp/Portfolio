// This file runs before Next.js initializes the server.
// Bun injects a broken `localStorage` global on the server (via --localstorage-file)
// which causes `next-themes` and other libraries that check `typeof window`
// to skip their SSR guards and throw:
//   TypeError: localStorage.getItem is not a function
//
// The fix: if `localStorage` exists but its `getItem` method is not a function,
// replace it with a no-op implementation so all SSR-side code runs safely.
export async function register() {
  if (typeof globalThis.localStorage !== 'undefined') {
    const ls = globalThis.localStorage as unknown;
    const isValid =
      ls !== null &&
      typeof ls === 'object' &&
      typeof (ls as Storage).getItem === 'function' &&
      typeof (ls as Storage).setItem === 'function';

    if (!isValid) {
      // Replace broken polyfill with a safe no-op
      Object.defineProperty(globalThis, 'localStorage', {
        value: {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
          clear: () => {},
          key: () => null,
          length: 0,
        },
        writable: true,
        configurable: true,
      });
    }
  }
}
