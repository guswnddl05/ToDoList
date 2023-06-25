const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    auther: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    auther: "Winston Churchill",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    auther: "Abraham Lincoln",
  },
  {
    quote: "The best way to predict the future is to create it.",
    auther: "Peter Drucker",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    auther: " Sam Levenson",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    auther: "Franklin D. Roosevelt",
  },
  {
    quote: "Believe you can, and you're halfway there.",
    auther: "Theodore Roosevelt",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    auther: "Charles R. Swindoll",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    auther: "Albert Schweitzer",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    auther: "Nelson Mandela",
  },
];

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:nth-child(2)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
auther.innerText = todaysQuote.auther;
