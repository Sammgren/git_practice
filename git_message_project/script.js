const generateQuote = function() {
    const quotes = [
        {
            quote: "Huskies were developed asworking sled dogs over thousands of years by the Chukchi people living in the Siberian peninsula of northeast Asia.",
            author: "Samm Lindgren"
        },
        {
            quote: "Two Huskies guard the gates of heaven.",
            author: "Samm Lindgren"
        },
        {
            quote: "Siberian sled dogs were used by the U.S. Army during World War II for Arctic search and rescue of downed pilots and cargo.",
            author: "Samm Lindgren"
        },
        {
            quote: "The breed gained fame in 1925 after Siberian Husky sled dogs heroically brought lifesaving serum to fight a diphtheria epidemic in Nome, Alaska.",
            author: "Samm Lindgren"
        },
        {
            quote: "Since 1973, the Iditarod Trail Sled Dog Race from Anchorage to Nome has been run annually in commemoration of the Serum Run.",
            author: "Samm Lindgren"
        },
        {
            quote: "Siberians are high-energy and extremely athletic, and they can be expert escape artists.",
            author: "Samm Lindgren"
        },
        {
            quote: "The Siberian is naturally clean, and the dense coat that protects him against cold weather does not require any clipping or trimming.",
            author: "Samm Lindgren"
        },
        {
            quote: `The Siberian Husky national club, the Siberian Husky Club of America, offers a Sled Dog Degree Program.`,
            author: "Samm Lindgren"
        },
        {
            quote: "The breed is very friendly.",
            author: "Samm Lindgren"
        }

    ];
    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
};
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
};

console.log("Check out some fun facts about Siberian Huskies!");
