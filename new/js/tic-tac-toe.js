/**** File: tic-tac-toe.js* Author: design1online.com, LLC* Created: 4.26.2012* License: Public GNU* Description: jQuery that runs the game***/$(document).ready(function() {	//start the game when the page loads	playGame();});/**** Purpose: play hangman* Preconditions: none* Postconditions: new game has started or existing game is in play***/function playGame(){	$.ajax({		url: 'ajax/index.php',		data: {type: 'playGame'},		success: function( data ) {			$("#content").html(data); 		}	});}/**** Purpose: start a brand new game* Preconditions: none* Postconditions: new game has started***/function newGame(){	$.ajax({		url: 'ajax/index.php',		data: {type: 'playGame', newgame: true},		success: function( data ) {			$("#content").html(data); 		}	});}/**** Purpose: place an X or O on the board* Preconditions: none* Postconditions: game status updated***/function makeMove(){		var selected_spot = null;		//find the first spot on the board they have an X or O inside of	$(".board_spot").each(function() {		if ($(this).val()) {			//they have a value in this spot, break out of the loop			selected_spot = $(this);			return false;		}	});		//make sure they've selected a spot	if (selected_spot == null) {		alert("You must select a spot on the board first.");		return false;	}		//make sure we only get an X or O value	if ($(selected_spot).val() != "X" && $(selected_spot).val() != "O") {		alert("Invalid selection made. Please try again.");		return false;	}		//pass the spot and the value they selected to our ajax file	$.ajax({		url: 'ajax/index.php',		data: {type: 'playGame', spot:$(selected_spot).attr("name"), value:$(selected_spot).val()},		success: function( data ) {			$("#content").html(data); 		}	});}