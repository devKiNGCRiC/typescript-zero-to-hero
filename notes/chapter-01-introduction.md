# Chapter 01: Introduction to TypeScript

> **Started:** 2026-11-09
> **Status:** In progress (notes done; mini project and assessment still to do)
> **Folder:** `01-fundamentals/chapter-01-introduction`

---

## 1. The big idea (in one line)

**TypeScript = JavaScript + a safety system called types.**
It catches mistakes while you write code, before the program runs.

> **Analogy:** JavaScript is a kitchen where any container can hold anything.
> TypeScript is the same kitchen, but every container has a label ("Sugar", "Salt").
> If you pour salt into the sugar jar, someone stops you before the cake is ruined.

---

## 2. What is JavaScript?

- The programming language of the web. It makes pages interactive (buttons, forms, menus).
- Runs in every browser, and also on servers using **Node.js**.
- It is **flexible**: a variable can hold any kind of value at any time.

```javascript
let age = 25;
age = "twenty-five";   // JavaScript allows this. No complaint.
```

That freedom is useful in small programs, but it creates hidden bugs in big ones.

---

## 3. What is TypeScript?

| Question | Answer |
|---|---|
| Who created it? | Microsoft, led by Anders Hejlsberg (who also created C#) |
| When? | Released publicly in 2012 |
| Why? | Big JavaScript apps became hard to maintain. Bugs hid easily and nobody knew what functions expected. |
| What problem does it solve? | Finds type mistakes early, gives better editor help, makes code easier to read and change |

```typescript
let age: number = 25;   // ": number" is a type annotation
age = "twenty-five";    // ERROR: Type 'string' is not assignable to type 'number'
```

---

## 4. Relationship between JavaScript and TypeScript

- TypeScript is a **superset** of JavaScript: everything JavaScript has, plus types.
- Every valid JavaScript program is also valid TypeScript.
- Browsers **cannot** run `.ts` files. TypeScript must be **compiled** to JavaScript first.
- Types exist only while developing. They are **erased** in the final JavaScript.

---

## 5. Static typing vs dynamic typing

| | Dynamic typing (JavaScript) | Static typing (TypeScript) |
|---|---|---|
| Types checked | While the program **runs** | **Before** it runs |
| Variable can change type? | Yes | No (unless you allow it) |
| Who finds the bug? | Often the user, in production | You, in your editor |
| Feel | Flexible | Safer and more predictable |

**Real example from my own practice:**

```javascript
// JavaScript: no error, silent wrong answers
function multiply(a, b) { return a * b; }
multiply("5", 3);        // 15  (JavaScript quietly converts "5" to a number)
multiply("five", 3);     // NaN (Not a Number)
multiply(undefined, 3);  // NaN
```

```typescript
// TypeScript: errors shown before running
function multiply(a: number, b: number): number { return a * b; }
multiply("5", 3);        // ERROR
multiply("five", 3);     // ERROR
multiply(undefined, 3);  // ERROR
```

---

## 6. What is a compiler? How does TypeScript work?

A **compiler** is a translator program. It reads code in one form and converts it to another.

The TypeScript compiler is called **`tsc`**. It does two jobs:
1. **Checks** types and reports errors.
2. **Translates** `.ts` into `.js` (types removed).

```
 hello.ts
    │
    ▼
 Parse        → reads the code and understands its structure
    │
    ▼
 Type check   → finds type mistakes, shows errors
    │
    ▼
 Emit         → writes plain JavaScript (types removed)
    │
    ▼
 hello.js  ──►  runs in the browser or in Node.js
```

**Important facts I learned:**
- `tsc` **still writes the `.js` file even when it finds errors** (default behavior). Errors are warnings to me, not a stop sign.
- The compiler removes types, may drop or tidy some comments and spacing, and may add `"use strict"`.
- **Never edit generated `.js` files by hand.** They get overwritten.
- Recent TypeScript (I am using 7.0.2) has `strict` turned on by default, and the default `target` is `es2025`. (Seen in the output of `tsc --help`.)
- Newer Node versions (mine is v24) can run simple `.ts` files by just stripping types, but they **do not type-check**. `tsc` is still the safety net. *(Not tried yet: `node hello.ts`.)*

---

## 7. Advantages and disadvantages

| Advantages | Disadvantages |
|---|---|
| Catches bugs early | Extra learning curve |
| Great editor help (autocomplete, hints) | Extra setup and a build step |
| Types act as built-in documentation | A bit more code to type |
| Safer refactoring | Advanced types can get complicated |
| Works well in big teams | Does not check data at runtime (e.g. API data can still be wrong) |

## 8. Where TypeScript is used

- Frameworks and tools: Angular (written in TypeScript), React, Vue, Next.js, NestJS, Node.js back ends.
- Used by companies of all sizes, and common in front-end and Node.js job listings.

## 9. Why professionals use it

Developers read code far more than they write it. TypeScript makes code easier to **read, trust, and change safely**, especially in a team.

---

## 10. Key terms

| Term | Simple meaning |
|---|---|
| Type | A label saying what kind of value something holds (text, number, ...) |
| Type annotation | Writing the type yourself, like `: string` |
| Compiler | A translator that checks and converts code |
| `tsc` | The TypeScript compiler |
| Superset | Includes everything of another thing, plus more |
| Static typing | Types checked before running |
| Dynamic typing | Types checked while running |
| Type coercion | JavaScript automatically changing a value's type (`"5" * 3` becomes `15`) |
| `NaN` | "Not a Number": the result of math that makes no sense |
| Script vs module | A file with no `import`/`export` is a script and shares one global space with other scripts |
| `tsconfig.json` | Settings file that tells the compiler what to compile and where to put output |
| Node.js | A program that runs JavaScript outside the browser |
| npm | Node's package manager (installs tools) |

---

## 11. Code I wrote

**`js-warmup/hello.js` (hand-written JavaScript)**

```javascript
let message = "Hello, JavaScript!";
console.log(message);

message = 42;               // JavaScript allows this
console.log(message);

function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

console.log(add(5, 3));          // 8
console.log(add("5", 3));        // "53" (text joined, no error)
console.log(multiply(5, 3));     // 15
console.log(multiply("5", 3));   // 15
console.log(multiply("five", 3));     // NaN
console.log(multiply(undefined, 3));  // NaN
```

**`hello.ts` (TypeScript, with intentional errors)**

```typescript
let message: string = "Hello, TypeScript!";   // only text allowed
console.log(message);

message = 42;                // ERROR: number is not assignable to string

function add(a: number, b: number): number {   // inputs and output must be numbers
  return a + b;
}

console.log(add(5, 3));      // OK
console.log(add("5", 3));    // ERROR: string is not assignable to number
```

**`tsconfig.json` (small preview, full study in Chapter 04)**

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "strict": true
  },
  "include": ["*.ts"]
}
```

---

## 12. Commands I used

| Command | What it does |
|---|---|
| `node --version` / `npm --version` | Check Node and npm are installed |
| `tsc --version` | Check TypeScript is installed |
| `node file.js` | Run a JavaScript file |
| `tsc hello.ts` | Compile one file (ignores `tsconfig.json`) |
| `tsc` | Compile the project using `tsconfig.json` **in the current folder** |
| `tsc -p path\to\folder` | Compile the project in another folder |
| `tsc --init` | Create a `tsconfig.json` with recommended settings |
| `git status` | See what changed |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save a snapshot |
| `git push` | Upload commits to GitHub |

**Folder structure**

```
chapter-01-introduction/
├── js-warmup/
│   └── hello.js        <- hand-written JavaScript
├── hello.ts            <- my TypeScript
├── tsconfig.json       <- compiler settings
└── dist/               <- generated JavaScript (ignored by Git)
```

---

## 13. Exercises and my answers

| # | Task | My finding |
|---|---|---|
| 1 | Assign a number to a `string` variable | TypeScript errors: `message` can only hold text |
| 2 | Compare `hello.ts` with the generated `hello.js` | Types were removed, most comments kept, `"use strict"` added |
| 3 | Why can't a browser run `.ts`? | Browsers only understand JavaScript, so `.ts` must be compiled first |
| 4 | Challenge: `multiply` in JS vs TS | JS gives `15`, `15`, `NaN`, `NaN` with no warning. TS rejects 3 of the 4 calls before running. |

---

## 14. Mistakes I made and how I fixed them

1. **`tsc` overwrote my hand-written `hello.js`.**
   Fix: keep hand-written JS in `js-warmup/` and send generated JS to `dist/` with `outDir`.
2. **Red lines: "Cannot redeclare block-scoped variable" and "Duplicate function implementation".**
   Cause: `hello.js` and `hello.ts` were in the same folder, both are scripts, so they share one global space.
   Fix: add `tsconfig.json` with `outDir`, and keep JS in a separate folder.
3. **Ran `tsc` in the wrong folder.** It printed the help screen because there was no `tsconfig.json` in that folder. Then `node dist/hello.js` failed with "Cannot find module".
   Fix: `cd` into the chapter folder first, or use `tsc -p 01-fundamentals\chapter-01-introduction`.

## 15. Questions I still have

- *(write your own questions here)*
-

## 16. Quick summary

- TypeScript is JavaScript with types, made by Microsoft in 2012.
- Types are checked **before running**. JavaScript checks **while running**, and sometimes never complains.
- `tsc` checks types and turns `.ts` into `.js`. It still writes the file if there are errors.
- Browsers run only JavaScript, so TypeScript is a development-time tool.
- Keep hand-written code and generated code in separate places.

**Next:** Chapter 01 mini project and assessment, then Chapter 02 (Environment Setup).