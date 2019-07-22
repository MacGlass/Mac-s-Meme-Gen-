let topText, bottomText, topTextDiv, bottomTextDiv, memeImage, submitButton, wrapDiv, newMemeDiv, memeImageContainer, topTextNode;

function createMeme () {
    // Container
    newMemeDiv = document.createElement('div');
    newMemeDiv.classList.add('newMeme');
    
    // Image
    memeImageContainer = document.createElement('img');
    memeImageContainer.setAttribute("src", memeImage.value);
    memeImageContainer.setAttribute("width", "300");
    memeImageContainer.setAttribute("height", "225");
    newMemeDiv.appendChild(memeImageContainer);

    // Top Text
    topTextNode = document.createTextNode(topText.value);
    const topTextDiv = document.createElement('div');
    topTextDiv.classList.add('firsttext');
    topTextDiv.appendChild(topTextNode);
    newMemeDiv.appendChild(topTextDiv);
    
    // Bottom
    const bottomTextNode = document.createTextNode(bottomText.value);
    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add('secondtext'); 
    bottomTextDiv.appendChild(bottomTextNode);
    newMemeDiv.appendChild(bottomTextDiv);

    // Remove Button
    const button = document.createElement('button');
    button.innerText = 'Remove';
    button.setAttribute('class', 'remove-button');    
    button.addEventListener('click', function() {
        newMemeDiv.remove();
    });

    newMemeDiv.appendChild(button);
    wrapDiv.appendChild(newMemeDiv);
}


function init () {
    // Inputs
    topText = document.querySelector('#onTop');
    bottomText = document.querySelector('#onBottom');
    memeImage = document.querySelector('#memeImage');
    
    // Button Submit
    submitButton = document.querySelector('#submitButton');
    
    // Wrapper
    wrapDiv = document.querySelector(".wrap");
    submitButton.addEventListener('click', function(){
        createMeme()
    });
}

init();
