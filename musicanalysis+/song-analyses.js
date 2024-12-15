import songs from "./songs.mjs";

// File Purpose: Render and display songs
renderSongs(songs);

function renderSongs(songList) {
	// get the element we will output the songs into
    const songContainer = document.querySelector("main");

    let htmlStrings = ``;

	// use the songTemplate function to transform our song objects into song HTML strings
    songList.forEach((song) => {
        // For each song object in the list...
        //Make it an html string
        let songHTML = songTemplate(song);
        htmlStrings += songHTML;
    });
	// Set the HTML strings as the innerHTML of our output element.
    songContainer.innerHTML = htmlStrings;
}


function songTemplate(song) {
    const title = song["title"];
	const lyrics = song["lyrics"];
    const analysis = song["analysis"];
    const citations = song["citations"];
    const src = song["src"];
    const alt = song["alt"];

	return `<section class="song">
                <div id="hero">
                    <div id="hero-box">
                        <img id="hero-img" src="${src}" alt="${alt}">
                    </div>
                    <section id="hero-msg">
                        <h1 class="home-title">${title}</h1>
                    </section>
                </div>
                <section id="song-section">
                    <div id="analysis">
                        <div class="column-1">
                            <h2>
                                Lyrics
                            </h2>
                            ${lyricsTemplate(lyrics)}
                        </div>
                        <div class="column-2">
                            <h2>
                                Analysis
                            </h2>
                            ${analysisTemplate(analysis)}
                        </div>
                    </div>
                </section>
                <section id="citation-section">
                    <h2 id="citation-sub-header">Citation(s)</h2>
                    ${citationsTemplate(citations)}
                </section>
            </section>`;
}

function lyricsTemplate(lyrics) {
    // loop through the lyrics list and transform the strings to HTML
    
    //Set up the future string
    let html = ``;

    // Set up paragraph counter
    let paragraphNum = 0;

    lyrics.forEach((paragraph) => {
        paragraphNum += 1;

        let paragraphString = ``;

        // Process for rendering each line's html br stuff
        paragraph.forEach((line) => {
            // Format each line
            let lineString = `${line}<br>`

            // Add the line to the paragraph's string
            paragraphString += lineString
        })

        // (Below) Add the paragraph string to the paragraph html
        let lyricString = `<p class="paragraph-${paragraphNum}">
                            ${paragraphString}
                            </p>`;

        // Give the html to the string that'll be sent to the document
        html += lyricString;
    });

	return html;
};

function analysisTemplate(analysis) {
    // loop through the analysis list and transform the strings to HTML

    //Set up the future string
    let html = ``;

    // Set up paragraph counter
    let paragraphNum = 0;

    analysis.forEach((paragraph) => {
        paragraphNum += 1;

        let paragraphString = ``;

        // Process for rendering each line's html br stuff
        paragraph.forEach((line) => {
            // Format each line
            let lineString = `${line}<br><br>`

            // Add the line to the paragraph's string
            paragraphString += lineString
        })

        // (Below) Add the paragraph string to the paragraph html
        let analysisString = `<p class="analysis-paragraph-${paragraphNum}">
                                ${paragraphString}
                                </p>`;
        
        // Give the html to the string that'll be sent to the document
        html += analysisString;
    });

	return html;
};

function citationsTemplate(citations) {
    // loop through the citations list and transform the strings to HTML
    
    //Set up the future string
    let html = ``;

    citations.forEach((citation) => {
        // Give the lyric a string variation
        let citationString = `<p class="citation">
                                ${citation}
                                </p>`;

        // Give the html to the string that'll be sent to the document
        html += citationString
    });

	return html;
};