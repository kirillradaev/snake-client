let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data);
  })
  stdin.on("data", (data) => {
    moveUp(data);
  })
  stdin.on("data", (data) => {
    moveDown(data);
  })
  stdin.on("data", (data) => {
    moveLeft(data);
  })
  stdin.on("data", (data) => {
    moveRigth(data);
  })
  stdin.on("data", (data) => {
    wannaPlay(data);
  })
  stdin.on("data", (data) => {
    oneDown(data);
  })
  return stdin;
}

const handleUserInput = function(data) {
  if(data === '\u0003') process.exit();
}

const moveUp = function (data) {
  if (data === 'w') {
    connection.write('Move: up');
  }
};

const moveDown = function (data) {
  if (data === 's') {
    connection.write('Move: down');
  }
}

const moveLeft = function (data) {
  if (data === 'a') {
    connection.write('Move: left');
  }
}

const moveRigth = function (data) {
  if (data === 'd') {
    connection.write('Move: right');
  }
}

const wannaPlay = function (data) {
  if (data === 't') {
    connection.write('Say: wanna play?');
  }
}

const oneDown = function (data) {
  if (data === 'y') {
    connection.write('Say: one down!');
  }
}


module.exports = setupInput;