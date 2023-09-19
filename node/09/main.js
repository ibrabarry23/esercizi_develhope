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
  const  checkDraw = async () =>{
    try {
        const tinaResult = await luckyDraw("Tina")
        console.log(tinaResult)

        const jorgeResult = await luckyDraw("Jorge")
        console.log(jorgeResult)

        const julienResult = await luckyDraw ("Julien")
        console.log(julienResult)

    } catch (error) {
        console.log(error.message)
    }
}
checkDraw()  