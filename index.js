const button = document.getElementById("new-quote");
const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");

const changeQuote = async () => {
	let newQuote = "";
	// fetch api for random quote
	const response = await fetch("https://api.quotable.io/random");
	const json = await response.json();
	// quotable api github page : https://github.com/lukePeavey/quotable
	// transition to the new quote (style + data)
	newQuote = { quote: json.content, author: json.author };
	quoteText.style.opacity = 0;
	quoteAuthor.style.opacity = 0;
	setTimeout(() => {
		quoteText.innerText = newQuote.quote;
		quoteAuthor.innerText = "-" + newQuote.author;
		quoteText.style.opacity = 1;
		quoteAuthor.style.opacity = 1;
	}, 500);
	const randomColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
		Math.random() * 255
	)},${Math.floor(Math.random() * 255)})`;
	button.style.backgroundColor = randomColor;
	document.getElementById("tweet-quote").style.backgroundColor = randomColor;
	document.getElementById("tumblr-quote").style.backgroundColor = randomColor;
	document.body.style.backgroundColor = randomColor;
	document.body.style.color = randomColor;
	// href change for sharing the quote to twitter or tumblr
	document.getElementById(
		"tweet-quote"
	).href = `https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(
		newQuote.quote
	)}"${encodeURIComponent(" " + newQuote.author)}`;
	document.getElementById(
		"tumblr-quote"
	).href = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(
		newQuote.author
	)}&content=${encodeURIComponent(
		newQuote.quote
	)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
	// });
};
// Initially Get An Initial Quote and Initial Styling
changeQuote();
// Add Event Listener to button to change the quote / color and links
button.addEventListener("click", changeQuote);
