function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }
 
  const players = ["Joe", "Caroline", "Sabrina"];
  
  const checkGame = async () => {
  try {
    for (const element of players) {
      const res = await luckyDraw(element);
      console.log(res)
    }
  } catch (err) {
    console.log('error')
  }
  }
  checkGame()