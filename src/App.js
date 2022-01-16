//import ReactDOM from "react-dom";
import React, { Component } from "react";
import LocalizedStrings from "react-localization";

let strings = new LocalizedStrings({
  en: {
    how: "How do you want to cook fish today?",
    friedFish: "Fried Fish",
    boiledFish: "Steamed fish",
    choice: "How to choose the fish?",
  },
  it: {
    how: "Come vuoi cucinare il pesce oggi?",
    friedFish: "Pesce fritto",
    boiledFish: "Pesce al vapore",
    choice: "Come scegliere il pesce?",
  },
  bn: {
    how: "আপনি আজ কিভাবে মাছ রান্না করতে চান?",
    friedFish: "ভাজা মাছ",
    boiledFish: "সিদ্ধ মাছ",
    choice: "কিভাবে মাছ নির্বাচন করবেন?",
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "en",
    };

    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(e) {
    e.preventDefault();
    let lang = e.target.value;
    this.setState((prevState) => ({
      language: lang,
    }));
  }

  render() {
    strings.setLanguage(this.state.language);
    return (
      <div>
        Change Language:{" "}
        <select onChange={this.handleLanguageChange}>
          <option value="en">En- English</option>
          <option value="it">It- Italian</option>
          <option value="bn">Bn- Bangla</option>
        </select>
        <br />
        <br />
        {strings.how}
        <ul>
          <li>{strings.friedFish}</li>
          <li>{strings.boiledFish}</li>
          <li>{strings.choice}</li>
        </ul>
      </div>
    );
  }
}

export default App;

//ReactDOM.render(<App />, document.getElementById('root'));
