// require("./examples/callbacks")
// require("./examples/promises")
// require("./examples/async-await")
const Rx = require("rxjs/Rx")

Rx.Observable.from([1,2,3]).subscribe((item) => console.log(item));