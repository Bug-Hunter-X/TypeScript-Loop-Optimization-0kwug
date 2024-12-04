# Unnecessary Break Statement in TypeScript Loop

This repository demonstrates an uncommon error in TypeScript where a `break` statement unexpectedly causes a loop to terminate prematurely. The code functions correctly without the break statement, but it is present, and it's easy to overlook this problem in more complex scenarios.

The `printNumbers3` function intends to print numbers from `n` down to 1 using a `for` loop. The `break` statement is redundant, as the loop condition (`i > 0`) naturally terminates the loop when `i` reaches 1. Including the break statement does not technically cause an error, but may represent a misunderstanding of how the loop works.

## Bug

The `bug.ts` file contains the erroneous code. The `break` statement unnecessarily terminates the loop. Removing the `break` statement resolves the problem.

## Solution

The `bugSolution.ts` file provides the corrected code. The `break` statement has been removed.

This example highlights the importance of carefully reviewing loops and ensuring that `break` and `continue` statements are used only when absolutely necessary.