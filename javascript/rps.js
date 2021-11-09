function game(x){
	var userMove = parseInt(x.value);
	var compMove = Math.floor(Math.random() * 3);
	if(userMove==compMove){
		if(userMove==0){
			alert("It's a draw, you both chose Rock!");
		}
		else if(userMove==1){
			alert("It's a draw, you both chose Paper!");
		}
		else{
			alert("It's a draw, you both chose Scissors!");
		}
	}
	else if(userMove==0){
		if(compMove==1){
			alert("You chose Rock, the computer chose Paper. You lose!");
		}
		else{
			alert("You chose Rock, the computer chose Scissors. You win!");
		}
	}
	else if(userMove==1){
		if(compMove==0){
			alert("You chose Paper, the computer chose Rock. You win!");
		}
		else{
			alert("You chose Paper, the computer chose Scissors. You lose!");
		}
	}
	else if(userMove==2){
		if(compMove==0){
			alert("You chose Scissors, the computer chose Rock. You lose!");
		}
		else{
			alert("You chose Scissors, the computer chose Paper. You win!");
		}
	}
	else{
		alert("Something went wrong.");
	}
}
	