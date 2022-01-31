const movieArr = [];

class Movie{
        constructor(title, actor, runtime, year){
            this.title = title;
            this.actor = actor;
            this.runtime = runtime;
            this.year = year;
        }
        add(){
            movieArr.push(this);
        }
}

module.exports ={
    Movie,
    movieArr
}