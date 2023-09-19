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
        const joeResult = await luckyDraw("joe")
        console.log(joeResult)

        const sabrinaResult = await luckyDraw("Sabrina")
        console.log(sabrinaResult)

        const carolinaResult = await luckyDraw ("Carolina")
        console.log(carolinaResult)

    } catch (error) {
        console.log(error.message)
    }
}
checkDraw()