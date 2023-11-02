// ###Adding an image changer

// In this section, you will learn how to use JavaScript and DOM API features 
// to alternate the display of one of two images. This change will happen as 
// a user clicks the displayed image.
alert("Yehey")
const myImage = document.querySelector("img")


myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src")
    if (mySrc === "images/firefox-icon.png") {
        myImage.getAttribute("src", "images/firefox2.jpg")
    } else {
        myImage.getAttribute("src", "images/firefox-icon.png")
    }
}



