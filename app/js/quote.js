const quote = [
    {
        quote: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
        author: "Jane Goodall"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "Stay afraid, but do it anyway. What’s important is the action. You don’t have to wait to be confident. Just do it and eventually the confidence will follow.",
        author: "Carrie Fisher"
    },
    {
        quote: "One can choose to go back toward safety or forward toward growth. Growth must be chosen again and again; fear must be overcome again and again.",
        author: "Abraham Maslow"
    },
    {
        quote: "The swiftest way to triple your success is to double your investment in personal development.",
        author: "Robin Sharma"
    },
    {
        quote: "Don’t go through life, grow through life.",
        author: "Eric Butterworth"
    },
    {
        quote: "We can’t become what we need to be by remaining what we are.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Life’s challenges are not supposed to paralyze you, they’re supposed to help you discover who you are.",
        author: "Bernice Johnson Reagon"
    },
    {
        quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
        author: "Amelia Earhart"
    },
    {
        quote: "People who are crazy enough to think they can change the world are the ones who do.",
        author: "Rob Siltanen"
    }
]
const quotes = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const random = Math.floor(Math.random()*quote.length)
quotes.innerText = `${quote[random].quote}`
author.innerText = `${quote[random].author}`