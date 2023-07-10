const call = {
  caller: "Vito",
  says: function() {
  console.log(`Hey, ${this.caller} just called`);
  }
  };
  call.says();