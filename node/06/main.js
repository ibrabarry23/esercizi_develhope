const figlet = require("figlet");

const text = `
sium
`;

const options = {
  font: "isometric2",
};

figlet.text(text, options, (err, data) => {
  if (err) {
    console.log("err");
    return;
  }

  const coloredData = `\x1b[34m${data}\x1b[0m`;

  console.log(coloredData);
});