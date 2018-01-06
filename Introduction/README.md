### Creating new Symbol

Symbols can be created using simple `Symbol()` function like other primitives and doesn't have any literal syntax. Symbols can be given description by passing almost any kind of value `(Symbol(<String>), Symbol(<Object>))` but the value returned by a Symbol is always unique. even with exact same description. so, the smart & recommended way to use Symbol is by storing it into a variable. if you don't have reference to a symbol you just can't use it.
`var uniqueValue = Symbol('zlatan');`

As mentioned earlier, there are ways to generate same Symbol everytime based on same description value is by using `Symbol.for(<Object/String/Number>)`. this creates a symbol in Symbols' global registry and returns a reference to the same Symbol variable every time.

__*Symbols registry is same for all frames, meaning a Symbol from an iframe or service worker will be the same as one generated from your existing frame.*__
