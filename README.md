# clearable-delay
Delay a promise a specified amount of time with the ability to clear the delay.

## Usage

```typescript
import { clearableDelay } from "clearable-delay";

(async () => {
  const delayedPromise = clearableDelay(1000);

  setTimeout(() => delayedPromise.clear(), 500);

  const cleared = await delayedPromise;

  console.log(cleared ?
    "Cleared before timing out" :
    "Timed out after 1000ms");
})()
```

## License

MIT © [Andrei Sedoi](https://github.com/bsnote)
