This repo demonstrates a class of TypeScript program that appears to hang the TypeScript compiler (100% CPU usage for an extended period of time).

As a result, opening example_repro.ts in your text editor may cause it to consume a lot of resources.

## To repro

`tsc example_repro.ts --noEmit`

Or run:

```bash
npm install
npm run hang_typescript
```

A program to generate new examples of this pattern is provided at gen_repro.js.
`npm run generate` will write a new example to example_repro.ts
