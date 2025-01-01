class madlib {
    constructor(textP) {
        this._textP = textP;
    }

    getInputValues() {
        const parentElement = document.getElementById('get-words-section'); // Replace with the actual ID
        const inputElements = parentElement.querySelectorAll('input');
    
        return Array.from(inputElements).map(input => input.value);
    }

    getEveryOther(modVal) {
        let parts = this._textP.split("_");
        let outList = [];
        for (let i = 0; i < parts.length; i ++) {
            if (i % 2 == modVal) {
                outList.push(parts[i]);
            }
        }
        return outList;
    }

    getInputListHTML() {
        let inputParts = this.getEveryOther(1);
        let outHTML = '';

        for (let i = 0; i < inputParts.length; i ++) {
            outHTML = outHTML + `
                <li>
                    <label for="input${i}">${inputParts[i]}</label>
                    <input id="input${i}" type="text" placeholder="answer here...">
                </li>    
            `;
        }

        return outHTML;
    }

    getMadlibHTML() {
        let storyParts = this.getEveryOther(0);
        let inputVals = this.getInputValues();
        let outHTML = '';

        let i = 0;
        while (i < storyParts.length || i < inputVals.length) {
            if (i < storyParts.length) {
                outHTML = outHTML + storyParts[i];
            }
            if (i < inputVals.length) {
                outHTML = outHTML + `<u>${inputVals[i]}</u>`;
            }
            i ++;
        }

        return outHTML;
    }
}

const myMadlib = new madlib(
    `I, _bride_ take you, _groom_, to be my _adjective_ husband.
    In the presence of _proper noun_, our _plural noun_ and
    _plural noun_, I offer you my _noun_.  I _verb_ to be
    your constant _noun_ and _noun_; your devoted
    _noun_ in life: I _verb_ to be your _noun_; to be
    your place of comfort and _noun_; And when we face
    _noun_, we will never do so _adverb_; Because today I
    _noun_ you, my _noun_ and my _noun_, to never
    _verb_ you, In sickness and in _verb_, in good times
    and in _adjective_.
    I _verb_ you.`
)

function showMadlib() {
    document.getElementById("story-paragraph"). innerHTML = myMadlib.getMadlibHTML();
    document.getElementById("display-story-section").style.display = "flex";
    document.getElementById("get-words-section").style.display = "none";
}

document.getElementById("input-list").innerHTML = myMadlib.getInputListHTML();
document.getElementById("submit-button").addEventListener("click", showMadlib);
