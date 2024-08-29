// index.js
// This example focuses on converting text data to uppercase in a straightforward pipeline demonstrating
// the use of NodeJS streams to process and transform a stream of data.

const { Readable, Transform, Writable, pipeline } = require("stream");

// A simple Readable stream that simulates a stream of text data
class TextSource extends Readable {
  constructor(options) {
    super(options);
    this.texts = [
      "hello world",
      "this is a test",
      "node.js streams are powerful",
      "goodbye",
    ];
    this.index = 0;
  }

  _read(size) {
    if (this.index < this.texts.length) {
      this.push(this.texts[this.index++] + "\n"); // Push each line followed by a newline
    } else {
      this.push(null); // End of stream
    }
  }
}

// A Transform stream that converts text to uppercase
class UppercaseTransformer extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase()); // Convert the chunk to uppercase
    callback();
  }
}

// A Writable stream that outputs text to the console
class ConsoleLogger extends Writable {
  _write(chunk, encoding, callback) {
    process.stdout.write(chunk); // Write the chunk to the console
    callback();
  }
}

// Create instances of the streams
const textSource = new TextSource();
const uppercaseTransformer = new UppercaseTransformer();
const consoleLogger = new ConsoleLogger();

// Pipe the streams together
pipeline(textSource, uppercaseTransformer, consoleLogger, (err) => {
  if (err) {
    console.error("Pipeline failed:", err);
  } else {
    console.log("Pipeline succeeded");
  }
});

/** Output:
 *  HELLO WORLD
    THIS IS A TEST
    NODE.JS STREAMS ARE POWERFUL
    GOODBYE
    Pipeline succeeded
 */

/*
Explanation:

- Readable Stream (TextSource): This stream simulates a stream of text lines. The _read method pushes each line of text into the stream and ends the stream when all lines have been pushed.
- Transform Stream (UppercaseTransformer): This stream takes each chunk of text and transforms it to uppercase.
- Writable Stream (ConsoleLogger): This stream outputs the transformed text to the console.
- Pipeline: The pipeline function connects the source, transformer, and logger streams together, allowing data to flow through the pipeline, be transformed, and then be outputted.

*/
