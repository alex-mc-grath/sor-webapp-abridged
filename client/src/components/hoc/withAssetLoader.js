import {useState, useEffect} from 'react'

class AudioLoader
{
    constructor(audioObject, audioPath)
    {
        this.audioPath = audioPath;
        this.loaded = false;
        this.audio = document.createElement("audio");
        this.resolver = null;
        this.audio.oncanplaythrough = () => {
            this.audio.oncanplaythrough = null;
            this.loaded = true;
            audioObject[audioPath] = this;
            this.resolver()
        }
    }

    play(callback)
    {
        if(callback)
        {
            this.audio.onended = callback
        }
        else
        {
            this.audio.onended = null
        }

        this.audio.play();
    }

    stop()
    {
        this.audio.stop();
    }

    pause()
    {
        this.audio.pause();
    }

    setVolume(number)
    {
        this.audio.volume = number
    }

    setLoop(isLooping)
    {
        this.audio.loop = isLooping
    }

    load() {
        return new Promise((resolve, reject) => {
            this.resolver = resolve;
            this.audio.src = this.audioPath;
          });
    }
}


class ImgLoader
{
    constructor(imagesObject, imgPath)
    {
        this.imgPath = imgPath;
        this.loaded = false;
        this.img = document.createElement("img");
        this.resolver = null;
        this.img.onload = () => {
            this.loaded = true;
            imagesObject[imgPath] = this.img;
            this.resolver()
        }
    }

    load() {
        return new Promise((resolve, reject) => {
            this.resolver = resolve;
            this.img.src = this.imgPath;
          });
    }
}


class AssetController
{
    constructor()
    {
        this.images = {}
        this.audio = {}
    }

    async loadImages(imgPathArray)
    {
        let promisseArray = [];

        for(let i=0;i<imgPathArray.length;i++)
        {
            promisseArray.push((new ImgLoader(this.images,imgPathArray[i])).load())
        }

        await Promise.all(promisseArray)
    }

    async loadAudio(audioPathArray)
    {
        let promisseArray = [];

        for(let i=0;i<audioPathArray.length;i++)
        {
            promisseArray.push((new AudioLoader(this.audio,audioPathArray[i])).load())
        }

        await Promise.all(promisseArray)
    }
}

const assetController = new AssetController();



const withAssetLoader = ({images, audio}, ComponentHolder) => {

    return (props) => {

        const [loading, setLoading] = useState(true)
        
        useEffect(() => {
            (async () => {
                if(images && images.length > 0)
                {
                    await assetController.loadImages(images)
                }
                if(audio && audio.length > 0)
                {
                    await assetController.loadAudio(audio)
                }
                setLoading(false)
            })()
        }, [])

        return (
            <>
            {loading &&
                <h2>Loading...</h2>
            }
            {!loading &&
                <ComponentHolder {...props} assetController={assetController}/>
            }
            </>
        )
    }
}

export default withAssetLoader