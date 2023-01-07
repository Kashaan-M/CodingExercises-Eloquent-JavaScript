function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type:"white",speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak('I need moisturizer');
hungryRabbit.speak('I need food');

