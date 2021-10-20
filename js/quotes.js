const quotes = [ 
    {
        quote: "In study, it's not the lack of time, but lack of effort."
    },
    {
        quote: "If you close your eyes to the present, the eyes for the future close as well."
    },
    {
        quote: "Saliva you drooled today will be tears falling tomorrow."
    },
    {
        quote: "Today never returns again tomorrow."
    },
    {
        quote: "At this moment, your enemies books keep flipping."
    },
    {
        quote: "Sleep now, you will be dreaming, Study now, you will be achieving your dream."
    },
    {
        quote: "Most great achievements happen while others are sleeping."
    },
    {
        quote: "Impossibility is the excuse made by the untried."
    },
    {
        quote: "Dream is just in front of you. Why not stretch your arm."
    },
    {
        quote: "Academic achievement is directly proportional to the absolute amount of time invested."
    },
    {
        quote: "Study like a dog and play like a premier."
    }
];

const quote = document.querySelector(".quote span");

quote.innerText = quotes[Math.floor(Math.random()* quotes.length)].quote;
