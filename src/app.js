const yargs = require("yargs");
const { Movie, movieArr } = require("./utils");

const app = (args) => {
  if (args.add) {
    const movie = new Movie(args.movie, args.actor, args.runtime, args.year);
    movie.add();
    console.log(movieArr);
  } else if (args.addMany) {
    const movie1 = new Movie(
      args.movie1,
      args.actor1,
      args.runtime1,
      args.year1
    );
    const movie2 = new Movie(
      args.movie2,
      args.actor2,
      args.runtime2,
      args.year2
    );
    movie1.add();
    movie2.add();
    console.log(movieArr);
  } else {
    console.log("Incorrect Command");
  }
};

app(yargs.argv);

// node src/app.js --add --movie="Pulp Fiction" --actor="Sam Jackson"
