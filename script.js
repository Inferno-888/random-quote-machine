import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const quotes = [
    ["Stay Hungry. Stay Foolish.", "-Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "-Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "-Paul Graham"],
    ["Be yourself; everyone else is already taken.", "-Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "-Leonardo Da Vinci"],
    ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "-Nelson Mandela"],
    ["The way to get started is to quit talking and begin doing.", "-Walt Disney"],
    ["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", "-Steve Jobs"],
    ["Life is what happens when you're busy making other plans.", "-John Lennon"],
    ["It is during our darkest moments that we must focus to see the light.", "-Aristotle"],
    ["Do not go where the path may lead, go instead where there is no path and leave a trail.", "-Ralph Waldo Emerson"],
    ["If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", "-James Cameron"],
    ["A successful man is one who can lay a firm foundation with the bricks others have thrown at him.", "-David Brinkley"],
    ["Things work out best for those who make the best of how things work out.", "-John Wooden"],
    ["Success is walking from failure to failure with no loss of enthusiasm.", "-Winston Churchill"],
    ["If you genuinely want something, don't wait for it -- teach yourself to be impatient.", "-Gurbaksh Chahal"],
    ["If you are not willing to risk the usual, you will have to settle for the ordinary.", "-Jim Rohn"],
    ["You miss 100% of the shots you don't take.", "-Wayne Gretzky"],
    ["The only person you are destined to become is the person you decide to be.", "-Ralph Waldo Emerson"],
    ["Don’t count the days; make the days count.", "-Mohamed Ali"],
    ["It isn’t the mountains ahead to climb that wear you out; it’s the pebble in your shoe.", "-Mohamed Ali"],
    ["I am the greatest, I said that even before I knew I was.", "-Mohamed Ali"],
    ["Only a man who knows what it is like to be defeated can reach down to the bottom of his soul and come up with the extra ounce of power it takes to win when the match is even.", "-Mohamed Ali"]
]

const colors = [
  "#1034A6",
  "#1ECBE1",
  "#4370BC",
  "#8B5CA3",
  "#F687C7",
  "#4D4EB2",
  "#3EC163",
  "#C46B86",
  "#EF6D49",
  "#21ACDE",
  "#1E114E",
  "#4F88B0",
  "#6359A6",
  "#5B74A4",
  "#3C7FC3",
  "#7B55AA",
  "#3C99C3",
  "#3C9774",
  "#52AD8A",
  "#9656A9",
  "#9E6177",
  "#A35C90",
  "#2D95D2",
  "#CE315C",
  "#349A30",
  "#6E7391",
  "#8F7084",
  "#6B8094",
  "#7E7D82"
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      backgroundColor: "",
      randomQuote: "",
      author: "",
      color: "white",
      twitterColor: "white",
      tumblrColor: "white"
    }
    
    this.handleClick = this.handleClick.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
    this.handleTumblrHover = this.handleTumblrHover.bind(this)
    this.handleTumblrLeave = this.handleTumblrLeave.bind(this)
    this.handleTwitterHover = this.handleTwitterHover.bind(this)
    this.handleTwitterLeave = this.handleTwitterLeave.bind(this)
  }
  
  componentDidMount() {
    const randColorIndex = Math.floor(Math.random() * colors.length)
    const randQuoteIndex = Math.floor(Math.random() * quotes.length)
    this.setState({
      backgroundColor: colors[randColorIndex],
      randomQuote: quotes[randQuoteIndex][0],
      author: quotes[randQuoteIndex][1]
    })
  }
  
  handleClick() {
    
    const randQuoteIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randQuoteIndex][0]
    const author = quotes[randQuoteIndex][1]
    const randColorIndex = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randColorIndex]
    
    this.setState({backgroundColor: randomColor, randomQuote: randomQuote, author: author, color: randomColor})
    
  }
  
  handleHover() {
    this.setState({color: this.state.backgroundColor})
  }
  
  handleLeave() {
    this.setState({color: "white"})
  }
  
  handleTumblrHover() {
    this.setState({tumblrColor: this.state.backgroundColor})
  }
  
  handleTumblrLeave() {
    this.setState({tumblrColor: "white"})
  }
  
  handleTwitterHover() {
    this.setState({twitterColor: this.state.backgroundColor})
  }
  
  handleTwitterLeave() {
    this.setState({twitterColor: "white"})
  }
  
  render() {
    return (
      <div style={{backgroundColor: this.state.backgroundColor}} className="background">
        <div id="quote-box">
          <div id="text" key={this.state.randomQuote}>
            <h2 style={{color: this.state.backgroundColor}}><i className="fa fa-quote-left" /> {this.state.randomQuote} <i className="fa fa-quote-right" /></h2>
          </div>
          <div id="author">
            <h6 id="authorText" style={{color: this.state.backgroundColor}} key={this.state.author}>{this.state.author}</h6>
          </div>
          <div id="allButtonsDiv">
            <div id="buttonDiv">
              <button id="new-quote" onClick={this.handleClick} onPointerOver={this.handleHover} onPointerOut={this.handleLeave} style={{backgroundColor: this.state.backgroundColor, color: this.state.color}}>New Quote!</button>
            </div>
            <div className="buttons">
              <a id="tweet-quote" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Whether%20you%20think%20you%20can%20or%20you%20think%20you%20can%E2%80%99t%2C%20you%E2%80%99re%20right.%22%20Henry%20Ford" target="_top" className="button" style={{backgroundColor: this.state.backgroundColor}}><i className="fa fa-twitter ibutton" style={{color: this.state.twitterColor}} onPointerOver={this.handleTwitterHover} onPointerOut={this.handleTwitterLeave}></i></a>
              <a href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DAbraham%2BLincoln%26content%3DIt%25E2%2580%2599s%2Bnot%2Bthe%2Byears%2Bin%2Byour%2Blife%2Bthat%2Bcount.%2BIt%25E2%2580%2599s%2Bthe%2Blife%2Bin%2Byour%2Byears.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button" target="_blank" className="button" style={{backgroundColor: this.state.backgroundColor}}><i className="fa fa-tumblr ibutton" style={{color: this.state.tumblrColor}} onPointerOver={this.handleTumblrHover} onPointerOut={this.handleTumblrLeave}></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
