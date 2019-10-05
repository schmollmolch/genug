import debug from "debug";

const BASE = "genug";
// const COLOURS = {
//     trace: 'lightblue',
//     info: 'blue',
//     warn: 'pink',
//     error: 'red'
// }; // choose better colours :)

class Log {
  generateMessage(level: string, message: string, source: string) {
    // Set the prefix which will cause debug to enable the message
    const namespace = `${BASE}:${level}`;
    const createDebug = debug(namespace);

    // Set the colour of the message based on the level
    // createDebug.color = COLOURS[level];

    if (source) {
      createDebug(source, message);
    } else {
      createDebug(message);
    }
  }

  trace(message: string, source: string) {
    return this.generateMessage("trace", message, source);
  }

  info(message: string, source: string) {
    return this.generateMessage("info", message, source);
  }

  warn(message: string, source: string) {
    return this.generateMessage("warn", message, source);
  }

  error(message: string, source: string) {
    return this.generateMessage("error", message, source);
  }
}

export default new Log();
