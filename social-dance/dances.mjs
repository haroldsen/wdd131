class Dance {
    _name;
    _beatsPerMeasure;
    _lowMPM;
    _highMPM;
    _idealMPM;
    _classNameColor;

    constructor(name, beatsPerMeasure, lowTempo, highTempo, recommendedTempo, classNameColor) {
        this._name = name;
        this._beatsPerMeasure = beatsPerMeasure;
        this._lowMPM = lowTempo;
        this._highMPM = highTempo;
        this._idealMPM = recommendedTempo;
        this._classNameColor = classNameColor;
    }

    getDistanceToPerfectTempo(tempo, tempoSelectorVal) {
        if (tempoSelectorVal == "MPM") {
            if (this._idealMPM < tempo) {
                return tempo - this._idealMPM;
            }
            else {
                return this._idealMPM - tempo;
            }
        }
        else {
            if ((this._idealMPM * this._beatsPerMeasure) < tempo) {
                return tempo - (this._idealMPM * this._beatsPerMeasure);
            }
            else {
                return (this._idealMPM * this._beatsPerMeasure) - tempo;
            }
        }
    }

    getHTML(tempo, tempoSelectorVal) {
        let lowerVal = 0;
        let upperVal = 0;

        if (tempoSelectorVal == "MPM") {
            lowerVal = this._lowMPM;
            upperVal = this._highMPM;
        }
        else {
            lowerVal = this._lowMPM * this._beatsPerMeasure;
            upperVal = this._highMPM * this._beatsPerMeasure;
        }

        let result = "";
        let window = 1.5;

        if (tempoSelectorVal == "BPM") {
            window = 1.5 * this._beatsPerMeasure;
        }

        if (lowerVal <= tempo && tempo <= upperVal) {
            result = "PERFECT!";
        }
        else if (tempo < lowerVal - window) {
            result = "Way too Slow...";
        }
        else if (tempo > upperVal + window) {
            result = "Way too Fast...";
        }
        else if (lowerVal - window <= tempo && tempo < lowerVal) {
            result = "A Little Slow";
        }
        else {
            result = "A Little Fast";
        }

        let m = 0;
        if (tempoSelectorVal == "MPM") {
            m = tempo;
        }
        else {
            m = tempo / this._beatsPerMeasure;
        }

        let speedFactor = ((100 / m) * this._idealMPM).toFixed(2);
        let stretchFactor = ((100 / speedFactor) * 100).toFixed(2);

        const HTML = `
            <tr class="dance-result ${this._classNameColor}}">
                <td>${this._name}</td>
                <td>${result}</td>
                <td>${lowerVal}</td>
                <td>${upperVal}</td>
                <td>${`${speedFactor} %`}</td>
                <td>${`${stretchFactor} %`}</td>
            </tr>`;

        return HTML;
    }
}

let dances = [
    new Dance("Foxtrot", 4, 30, 34, 32, "teal"),
    new Dance("East Coast Swing", 4, 42, 44, 43, "yellow"),
    new Dance("Waltz", 3, 30, 32, 31, "blue"),
    new Dance("Cha Cha", 4, 28, 32, 30, "red"),
    new Dance("Triple Swing", 4, 36, 40, 38, "yellow"),
    new Dance("Rumba", 4, 28, 34, 31, "purple"),
    new Dance("Tango", 4, 30, 32, 31, "black")
    // new Dance("Charleston", 4, 28, 32, 48, "red")
];

export default dances;
