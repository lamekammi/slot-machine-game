# Slot Machine Game
***

The Slot Machine Game ( SMG ) is a web browser game made with HTML, CSS, and JavaScript to resemble a slot machine you might see at a Casino. When the Lever button is clicked it will go through an array of images and stop after 6 seconds. Typically a slot machine you might see at a Casino will have points and you would spend these points to try and gain *more* points, BUT this Slot Machine Game is to only see if you win or lose. 

### Fun Facts
***

- The first mechanical slot machine was invented in 1894 by Charles August Fey.
- Winning myths to slot machines are only myths.
- There is more slot machines in Japan than the United States.
- Taxes made slot machines popular because of increase in taxes places of business needed to find a     different way to generate more income.

# WireFrame & Psuedocode

The original idea I had for the SMG:
![Wireframe](https://i.imgur.com/2YJyPlB.png)

The Psuedocode I made for the game:

    SLOT MACHINE PSEUDOCODE:

1. Define required constants
	1.1) "items" that can be shuffled through
	1.2)

2. Define required variables used to track the state of the game
	2.1) a winner variable to show win or lose.
	2.2) to show the "boxes"
	2.3) to change the initial message of "click the lever.."
		2.3.1) want to change it below to "lets see if you win or lose"
		2.3.2) then change it to win or lose message
			2.3.2.1) "WOO YOU WON!"
			2.3.2.2) "YOU LOSE! TRY AGAIN."

3. Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant
	3.1) the "boxes" in the HTML that will be holding the "items"
	3.2) the "Lever" button in the HTML
	3.3) the "reset game" button in the HTML
	3.4) the "score-board"
	

4. Upon loading the app should:
	4.1) initialize the state variables:
			4.1.1) Initialize the three boxes to be "null" to represent empty squares.
			4.1.2) Initialize that you need to press the "Lever" button to play. Which will reset the winner message.
			4.1.3) Initialize the scores for win and loses start as "null"

	4.2) Render those state variables to the page:
			4.2.1)Render the boxes:
				4.2.1.1) loop over the "items" of the array to see:
					4.2.1.1.2) if all three images match
					4.2.1.1.3) if all the images do not match
			
			4.2.2) Render a message:
				4.2.2.1) If winner, render a win message
				4.2.2.2) If loser, render a lose message

	4.3) Wait for player to press the "Lever" button
		4.3.1) updated click message to its spinning.
	
	4.4) Render update the Win: Lose: Scores
			4.4.1) if win update win point +1
			4.4.2) if lose update lose point +1

5) Handle a player pressing the "Lever" button
	5.1) when play presses the lever button it should:
		5.1.1) "Spin()" through all the available "items" randomly and stop after a set time has reached.
			5.1.1.1) the spin will go through all boxes at the same time. BONUS: after MVP  is met try to make them spin at seperate times.
	5.2) after the set time for the spinning is done it should stop and render thru the array to see if its a win or a lose
	5.3) set off the win or lose message and then update the scores below:
		5.3.1) this function should be on its own and should plug in that func here to run. ( ask to make sure )
		5.3.2) BONUS: after MVP is met try to make it add a score depending on what it is landed on.

6) Handle a player pressing "Reset Score" button
	6.1) when clicked it should reset the board aka initialize the original state when loaded up the first time:
		6.1.1) has message "click on the "Lever" to start the game!! 3 in a row and you win! " (subjext to change if you change it to points vs win or lose. )
		6.1.2) win and lose score will reset to 0

# Screenshots
***

Screenshots from the SMG:

Winning:
![Winning Screen](https://i.imgur.com/UXoE0y0.png)
Losing:
![Losing Screen](https://i.imgur.com/mOz88UF.png)

# Technologies Used
***

- HTML
- CSS
- JavaScript
 - Google Fonts

# Getting Started
***

You can play the SMG [here](https://lamekammi.github.io/slot-machine-game/)! 
The SMG is easy to start all you got to do is click the "Lever" button.
If you want to Reset the game or scoreboard click the "Reset Game" button.
You need 3 of the same heart to win, if not you lose!
There is also instructions on the actual game browser just incase.
Have fun and good luck!!

# Next Steps
***

In the future I would like to add more to the SMG. I am hoping after I learn more from my SEI Program at GA I can implement these items and amplify this SMG.

Here is the list:

- Adding fun animations during the ``spin()`` function and the ``win()`` ``lose()`` functions.
- Adding sound effects to those functions above as well.
- Letting you pick what kind of slot machine, meaning you pick a theme that the array images will be to make it more fun and enjoyable for the user playing the game.