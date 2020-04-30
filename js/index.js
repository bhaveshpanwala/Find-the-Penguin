//show and explain class the initialization code. Give them index.html, and index.css file

$(document).ready(function () {
    /*This code will run after your page loads*/
    //Globals
    var elScoreboard = document.getElementById('scoreCount');
    var gameoverMsg = document.getElementById('gameoverMsg');
    var highScoreCount = document.getElementById('highscoreCount');
    var newGameIdsArr;
    var newMoundsArr;
    var counter = 0;
    
    var gameIdsArr = ['penguin1', 'penguin2', 'penguin3', 'penguin4', 'penguin5', 'penguin6', 'penguin7', 'penguin8', 'yeti'];
    
    var moundsArr = ['images/mound_1.png', 'images/mound_2.png', 'images/mound_3.png', 'images/mound_4.png', 'images/mound_5.png', 'images/mound_6.png', 'images/mound_7.png', 'images/mound_8.png', 'images/mound_9.png'];
    

    //Capturing all the game pieces in an array
    var gamePieces = document.getElementsByClassName('gamePiece');

    //Randomize gameboard    
    shuffleBoard();

    //Add events
    addPieceEvents();
    

    //Adding eventlistener to game pieces
    function addPieceEvents() {
        for (var i = 0; i < gamePieces.length; i++) {
            var curPiece = gamePieces[i];
            curPiece.addEventListener('click', togglePiece, false);

        }
    }
    
    //initializing a variable called penguinSound and storing penguin.wav in it
    var penguinSound = new Audio('media/penguin.wav');
    
    //show class first part of togglePiece function
    
    //Function to make the game pieces stay
    function togglePiece(e) {

        if (this.id.indexOf('yeti') != -1) {
            
            //Set background image for the yeti
            this.setAttribute('style', 'background-image:url(\'images/yeti.png\');');

            //Audio trigger for yeti
            var yetiGrowl = new Audio('media/yeti.wav');
            yetiGrowl.play();

            //Open Game Over window
            gameoverMsg.textContent = 'Game Over!';
            gameoverMsg.setAttribute('style', 'color: red;');
            gameoverModal.style.display = 'block';
        }
        
        else if (this.id.indexOf('penguin1') != -1) {
            
            this.setAttribute('style', 'background-image:url(\'images/penguin_1.png\');');
            
            //Audio trigger for penguin
            penguinSound.play();
            counter++;
            elScoreboard.value = counter.toString();
        }
        
        else if (this.id.indexOf('penguin2') != -1) {
            
            this.setAttribute('style', 'background-image:url(\'images/penguin_2.png\');');
            
            //Audio trigger for penguin
            penguinSound.play();
            counter++;
            elScoreboard.value = counter.toString();
        }
        
        else if (this.id.indexOf('penguin3') != -1) {
            
            this.setAttribute('style', 'background-image:url(\'images/penguin_3.png\');');
            
            //Audio trigger for penguin
            penguinSound.play();
            counter++;
            elScoreboard.value = counter.toString();
        }
        
        else if (this.id.indexOf('penguin4') != -1) {
            
            this.setAttribute('style', 'background-image:url(\'images/penguin_4.png\');');
            
            //Audio trigger for penguin
            penguinSound.play();
            counter++;
            elScoreboard.value = counter.toString();
        }
        
        else if (this.id.indexOf('penguin5') != -1) {
            
            this.setAttribute('style', 'background-image:url(\'images/penguin_5.png\');');
            
            //Audio trigger for penguin
            penguinSound.play();
            counter++;
            elScoreboard.value = counter.toString();
        }
        
        else if (this.id.indexOf('penguin6') != -1) {
            
            this.setAttribute('style', 'background-image:url(\'images/penguin_6.png\');');
            
            //Audio trigger for penguin
            penguinSound.play();
            counter++;
            elScoreboard.value = counter.toString();
        }
        
        else if (this.id.indexOf('penguin7') != -1) {
            
            this.setAttribute('style', 'background-image:url(\'images/penguin_7.png\');');
            
            //Audio trigger for penguin
            penguinSound.play();
            counter++;
            elScoreboard.value = counter.toString();
        }
        
        else if (this.id.indexOf('penguin8') != -1) {
            
            this.setAttribute('style', 'background-image:url(\'images/penguin_8.png\');');
            
            //Audio trigger for penguin
            penguinSound.play();
            counter++;
            elScoreboard.value = counter.toString();
        }
        
        if ( counter == 8) {
            gameoverMsg.textContent = 'Hurray! You won';
            gameoverMsg.setAttribute('style', 'color: black;');
            gameoverModal.style.display = 'block';
        }
    }
    
    
    //show class this part, so they understand how to interact with the gameover window
    //and close x button
    
    
    /**Code to display/hide the Game Over modal window and reset gameboard**/
    //Capture modal div
    var gameoverModal = document.getElementById('gameoverModal');
    //Capture modal close button
    var span = document.getElementsByClassName('close')[0];

    //Close modal if 'X' clicked
    span.onclick = function () {
        resetGame();
    }
    //Close modal if window clicked
    window.onclick = function (e) {
        if (e.target == gameoverModal) {
            resetGame();
        }
    }
    
    //Function to reset the gameboard
    function resetGame() {
        
        var highScore = highScoreCount.value;
        counter = parseInt(elScoreboard.value);
        
        if(highScore == '' && !isNaN(counter)) {
            highScoreCount.value = counter;
        }
        
        else {
            highScore = parseInt(highScore);
                
            if(counter > highScore) {
                highScoreCount.value = counter;
            }
        }
    
        //class needs to implement reseting the game
        //also keep track of high score
        elScoreboard.value = '';
        
        //bring counter back to 0
        counter = 0;
        gameoverModal.style.display = 'none';
        
        //call the shuffleBoard() method to shuffle the elements
        shuffleBoard();
        
        //Call the addPieceEvents()
        addPieceEvents();
    }

     //give class shuffleBoard function. This sets the gameIdsArray, moundsArr
    //to the game piece id's using setAttribute. It is altering the DOM.
    
    
    //Function to shuffle the gameboard pieces
    function shuffleBoard() {
        newGameIdsArr = shuffle(gameIdsArr);
        newMoundsArr = shuffle(moundsArr);
        
        for (var i = 0; i < gameIdsArr.length; i++) {
            gamePieces[i].setAttribute('id', newGameIdsArr[i]);
            gamePieces[i].setAttribute('style', 'background-image: url(' + newMoundsArr[i] + ');');
        }
    }
    

    //give class the array shuffle code and explain

    //array shuffle code
    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

});
