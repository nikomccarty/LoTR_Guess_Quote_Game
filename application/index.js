async function lotrGame() {
    const allData = await d3.json("quotes.json", d3.autoType);

    const data = allData.filter(d => (d.author.length === 1) & (d.text.length === 1));
    console.log(data)
    const containerDiv = document.getElementById("container");
    const questionDiv = document.getElementById("question");
    const punchlineBtn = document.getElementById("punchlineBtn");
    const newJokeBtn = document.getElementById("newJokeBtn");
    let punchline;

    punchlineBtn.addEventListener('click', getPunchline);

    function getPunchline() {
        questionDiv.innerHTML = punchline;
        questionDiv.classList.add('bubble');
        punchlineBtn.classList.toggle('hidden');
        newJokeBtn.classList.toggle('hidden');
    }

    async function getRingData() {
        const jokePromise = await fetch(url);
        const joke = await jokePromise.json();
        
        setupDiv.innerHTML = joke[0].setup;
        
        punchline = joke[0].punchline;
        
        punchlineBtn.classList.toggle('hidden');
        newJokeBtn.classList.toggle('hidden');
    }
}


lotrGame()