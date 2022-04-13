import { react, useState, useEffect } from "react";
const { REACT_APP_API_KEY } = process.env;
// mars rover header

const Content = () => {

    const [mars, setMars] = useState("")
    // mars rover choice and mars solar day useStates
    const [marsRover, setMarsRover] = useState("")
    const [marsSol, setMarsSol] = useState("")
    const [marsPhoto, setMarsPhoto] = useState(0)
    // error message useStae variable
    const [errorLog, setErrorLog] = useState({
        error: false,
        message: ""
    })
    // fetching the api
    const MarsCollect = async () =>{
        try {
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${marsRover}/photos?sol=${marsSol}&api_key=${REACT_APP_API_KEY}`); // api call
        const marsData = await response.json(); // this is required
        console.log(marsData) // this isnt
        setMars(marsData) // this updates your mars usestate
        // setMarsImg(marsImg.img_src)
    } 
        // catch the error 
        catch(errorLog){
            console.log(errorLog)
            setErrorLog({error: true, message: errorLog.message})
       }
    };
    // useEffect(()=>{
    //     // console.log(mars)
    //     MarsCollect()
    // }, [])

    // this cycles to next image in the api array
    const nextMarsImage = () =>{
        let i = marsPhoto + 1
        setMarsPhoto(i)
    }
    // this cycles to previosue image in array
    const previouseMarsImage = () =>{
        if (marsPhoto > 0){
            let i = marsPhoto - 1
            setMarsPhoto(i)
        } else {
            alert("Cannot go back")
        }
        
    }
    // both need soem work 

    return( 
        <div id="div-maincontent">
            <div className="div-space"></div>

                <div id="div-content">
                    <div id="div-content-input">
                            <div id="div-CI-tital">
                                <div id="div-CIT-header"><h2>Images from the Red Planet</h2></div>
                                <div id="div-CIT-header"><p>To view images from one of the 3 Mars Rovers, selet the rover, input Mars Sol day you want to see images from and click enter.</p></div>
                            </div>
                                <div id="div-choose-text"><h3>Pick your Rover</h3></div>
                                <div id="div-rover-choice">

                                    <div className="rover-tag-spacing">
                                        <h2 className="rover-tag" onClick={() =>setMarsRover("curiosity")}>Curiosity</h2> 
                                    </div>
                                    <div className="rover-tag-spacing">
                                        <h2 className="rover-tag" onClick={() =>setMarsRover("opportunity")}>Opportunity</h2>
                                    </div>
                                    <div className="rover-tag-spacing">
                                        <h2 className="rover-tag" onClick={() =>setMarsRover("spirit")}>Spirit</h2>
                                    </div>

                                </div>
                            <div id="div-sol-info"><h3>Enter Mars Sol Day (1 Sol is 1 Mars Day)</h3></div>
                                <div id="div-sole-input"><input type="text" id="input-sol" placeholder="Enter Sol Day" onChange={(event)=> setMarsSol(event.target.value)} /></div>
                            <div id="div-enter-info">
                                <h2 className="get-mars" onClick={MarsCollect}>Enter</h2>
                            </div>
                            <div id="div-rover-info">
                                <div id="div-ri-rover-sol">
                                    <div><h3>Rover : {marsRover}</h3></div>
                                    <div><h3>Mars Sol : {marsSol}</h3></div>
                                </div>
                                {/* <div>
                                    <p>Number of Photos taken by Rover: {marsRover} on Mars Sol: {marsSol} Photos: {mars.photos.length}</p>
                                </div> */}
                            </div>
                    </div>

                    <div id="div-rover-img">

                        <div className="div-spcae-two"></div>
                            
                            <div id="div-img-content">
                            {mars.photos &&  <img src={mars.photos[marsPhoto].img_src} alt="rover"/>}
                            </div>
                            <div id="img-controlls">
                               <div className="imgChange"><h2 className="rover-tag" onClick={()=> previouseMarsImage()}>Back </h2></div>
                               <div className="imgChange"><h2>|| </h2></div>
                               <div className="imgChange"><h2 className="rover-tag" onClick={()=> nextMarsImage()}>Next </h2></div>
                            </div>
                            
                        
                    </div>

                </div>

            <div className="div-space"></div>
        </div>
    )
}

export default Content;






