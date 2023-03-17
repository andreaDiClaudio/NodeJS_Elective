import Sentiment from "sentiment";
const sentiment = new Sentiment();

async function getJoke() {
    const jokesUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
    const response = await fetch(jokesUrl);
    const result = await response.json();
    console.log(result);

    //const score = sentiment.analyze(result.joke)

    const jokeToAnalyze = result.joke || `${result.setup} ${result.delivery}`;
    const {score} = sentiment.analyze(jokeToAnalyze);
    //console.log(score.score);
    console.log(score);

    if(score < 0 ) {
        return await getJoke();
    }
    return result;
}

//console.log(sentiment.analyze("Node is shit"));
//console.log(sentiment.analyze("Node is fun"));


//console.log( await getJokes());
export default getJoke; //it is a function reference that we can call in app.js