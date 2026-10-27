declare module 'vitest/globals' {
  export const describe: any;
  export const it: any;
  export const expect: any;
  export const beforeEach: any;
  export const afterEach: any;
}

declare module '@testing-library/jest-dom' {
  export {};
}
