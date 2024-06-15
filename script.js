const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream,passs to video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch (error){
        //Catch Error Here
        console.log(error)
    }
}

button.addEventListener('click', async () => {
    //Disable Button
    button.disable = true;
    //start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false
});

//on load
selectMediaStream();