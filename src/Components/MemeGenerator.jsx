import { useEffect, useState } from "react";
import "./MemeGenerator.css"

export default function MemeGenerator(){
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [allMemes, setAllMemes] = useState([]);
    const [randomImage, setRandomImage] = useState("");

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setAllMemes(data.data.memes))
    }, []);
    
    function getRandomMeme(){
        const index = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[index].url;
        setRandomImage(url);
    }

    return (
        <div className="memeGenerator">
            <form className="form">
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Texte du haut"
                        value={topText}
                        onChange={(e)=> setTopText(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Texte du bas"
                        value={bottomText}
                        onChange={(e)=> setBottomText(e.target.value)}
                        
                    />
                </div>
                
            </form>
            <button type="button" onClick={getRandomMeme}>Générer un meme</button>
            <div className="meme">
                {randomImage ? <img src={randomImage} alt="Meme généré" />: null}
                <h2 className="meme-textTop">{topText}</h2>
                <h2 className="meme-textBottom">{bottomText}</h2>
            </div>
        </div>
        
    )
}



