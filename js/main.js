/*var row = 3;
var col = 5;
var createList = '';

var totalSquares = row*col;

for(i=1;i<=totalSquares; i++){
  if(i%col === 0){
    console.log(i +" new line");
  } else {
    console.log(i);
  }
}

====================
				if(i%col === 0){
					if (colNum%2 === 0){
						console.log('number is even');
						$('#chessboard ul').append('<li class="eor even"></li>');
					} else {
						console.log('number is odd');
						$('#chessboard ul').append('<li class="eor odd"></li>');
					}

				}else {
					// console.log(i);
					$('#chessboard ul').append('<li></li>');
				}

*/
var chessboard = chessboard || {};
    chessboard.createForm = chessboard.createForm || {};
    chessboard.board = chessboard.board || {};
    chessboard.center = chessboard.center || {};
    
    chessboard.varaibles = {};

//Create the form dropdown
(function(){
	var colNum =8,
		i,
		createOption = '',
		rowNum = 8,
		container = $('#container');
	this.init = function(){
		for(i=1;i<=colNum;i++){
			createOption +='<option value="'+ i +'">'+ i +'</option>';
		}
		//Create the Select option menus
		container.append('<div class="option-menu">');
		container.find('.option-menu').append('<div class="box1">');
		container.find('.option-menu').append('<div class="box2">');
		container.find('.option-menu').append('<div class="box3">');
		container.find('.box1').append('<select class="select-rows">');
		container.find('.box2').append('<select class="select-cols">');
		container.find('.box1').append('<label>select number of rows:</label>');
		container.find('.box2').append('<label>select number of columns:</label>');
		container.append('<div id="chessboard" class="chessboard"></div>');

		//add Selected to the first option		
		$('option:eq(0)').attr('selected','selected');

		var n = container.find('select').length;
		var createMultipleSelect = function(numOf){
			for(i=0;i<numOf;i++){
				container.find('select').html(createOption);
			}
		};
		createMultipleSelect(n);
	};
}.apply(chessboard.createForm));

//Create the chessboard
(function(){
		var that = this,
			createBtn = $('.createChessBoard'),
			createList = '',
			totalSquares,
			calc,
			colNum = 1,
			rowNum = 1;

	that.init = function(){
		var selectRow = $('.select-rows'),
			selectCol = $('.select-cols');

		//Calculate
		var calculate = function(){
			var parent = this;
			parent.multiply = function(val1,val2){
				return(val1*val2);
			};
		}; calc = new calculate();

		//Get value from Select row
		selectRow.change(function(){
			rowNum = $(this).val();
			makeChessboard();
		});

		//Get value from Select col
		selectCol.change(function(){
			colNum = $(this).val();
			makeChessboard();
		});
		var makeChessboard = function(){
			var board = $('#chessboard');
			//remove existing chessboard from the dom to make way for the new calculated chessboard
			if(board.find('ul').length > 0){
				board.find('ul').remove();
				buildChessBoard(colNum,rowNum);
			} else {
				//Add the squares
				buildChessBoard(colNum,rowNum);
			}
		};

		var buildChessBoard = function(col,row){
			var board = $('#chessboard'),
				makeRows = '';
			for(i=1;i<=row; i++){
				if(i%2 === 0){
					board.append('<ul class="even">').hide().fadeIn();
				} else {
					board.append('<ul class="odd">').hide().fadeIn();
				}
			}
			for(i=1;i<=col;i++){
				if(i%2 === 0){
					board.find('ul').append('<li class="even">').hide().fadeIn();
				} else {
					board.find('ul').append('<li class="odd">').hide().fadeIn();
				}
			}
		};
		makeChessboard();
	};
}.apply(chessboard.board));

//center chessboard
(function(){
	this.init = function(){

	};

}.apply(chessboard.center));
//
$(document).ready(function(){
	chessboard.createForm.init();
	chessboard.board.init();
	chessboard.center.init();
});