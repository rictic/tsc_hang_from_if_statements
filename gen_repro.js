/*
Generates programs that hang the typescript compiler.

This is a minimized repro of an issue that was discovered in the output of the
PEG.js parser generator.
*/

const fs = require("fs");
const path = require("path");

/** Return an identifier like s0, s1, s2, etc.*/
function genIdent() {
  return `s${Math.floor(Math.random() * 10)}`;
}

/** Generate a total of `count` if statements, randomly nested. */
function genIfs(count) {
  let output = `if (${genIdent()} === ${genIdent()}) {`;
  count--;
  while (count > 0) {
    const innerCount = Math.ceil(Math.random() * count);
    output += genIfs(innerCount);
    count -= innerCount;
  }
  return output + `}`;
}

const generatedProgram = `
let s0 = Boolean(Math.random()), s1 = Boolean(Math.random()),
    s2 = Boolean(Math.random()), s3 = Boolean(Math.random()),
    s4 = Boolean(Math.random()), s5 = Boolean(Math.random()),
    s6 = Boolean(Math.random()), s7 = Boolean(Math.random()),
    s8 = Boolean(Math.random()), s9 = Boolean(Math.random());


${genIfs(100)}
`.trimLeft();

fs.writeFileSync(path.join(__dirname, "example_repro.ts"), generatedProgram);

console.log(`Wrote a new example repro of the bug to example_repro.ts`);
