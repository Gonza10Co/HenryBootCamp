const commands = require("./commands");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

// Output un prompt
process.stdout.write("prompt > ");
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on("data", function (data) {
  var args = data.toString().trim().split(' '); // remueve la nueva línea
  cmd = args.shift()
  commands[cmd]
    ? commands[cmd](args,done)
    : process.stdout.write(`${cmd} command not found`);
});
