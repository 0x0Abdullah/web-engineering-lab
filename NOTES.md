# NOTES - Lab 04

## Task 10: Event loop prediction (Part B, Runtime)

Snippet:

```js
console.log("1 start");
setTimeout(() => console.log("2 timeout"), 0);
Promise.resolve().then(() => console.log("3 promise"));
console.log("4 end");
```

### Prediction (written before running)

```
1 start
4 end
3 promise
2 timeout
```

### Explanation

- `console.log("1 start")` runs first because it is **synchronous** - it goes
  straight onto the call stack and finishes immediately.
- `setTimeout(...)` hands its callback to the **browser timer API**. Even with
  a delay of `0`, the callback cannot run yet; it is queued in the **task
  queue** and must wait until the stack is empty.
- `Promise.resolve().then(...)` queues its callback in the **microtask queue**.
  Microtasks always run *before* the next task.
- `console.log("4 end")` is the second synchronous statement, so it prints
  before anything queued.
- The stack is now empty, so the **event loop** first drains the **microtask
  queue** (`3 promise`), and only then picks up the next **task** from the task
  queue (`2 timeout`).

Result order: `1 start`, `4 end`, `3 promise`, `2 timeout`.

Verified by pasting the snippet into the DevTools Console; the output matched
the prediction exactly.
