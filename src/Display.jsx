import React from "react";

function Display(data) {
  const audioUrl = data.phonetics.find((data) => data.audio.length);
  return (
    <>
      <div className="display-top">
        <div>
          <h1>{data.word}</h1>
          <p className="highlight">{data.phonetic}</p>
        </div>
        {audioUrl ? (
          <>
            <audio id="player">
              <source src={audioUrl ? audioUrl.audio : ""} />
            </audio>
            <button
              className="audio-play-btn"
              onClick={() => {
                const player = document.querySelector("#player");
                player.pause();
                player.load();
                player.play();
              }}
            ></button>
          </>
        ) : (
          <p className="highlight">No audio sample</p>
        )}
      </div>
      <div className="display-main">
        {data.meanings.map((meaning, i) => (
          <div key={i}>
            <div className="divider">
              <p className="speech-font">{meaning.partOfSpeech}</p>
              <div className="line"></div>
            </div>
            <p className="light-text meaning">Meaning</p>
            <ul>
              {meaning.definitions.map((data, i) => (
                <li key={i}>{data.definition}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="line"></div>
        <div className="display-bottom">
          <p className="light-text">Source</p>
          <a href={data.sourceUrls[0]} target="_blank">
            {data.sourceUrls[0]}
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1rem", border: "none" }}
            >
              open_in_new
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Display;
