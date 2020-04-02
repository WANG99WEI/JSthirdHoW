/*
交换两个数字，不用临时变量，感觉好憨批
*/

//憨憨第一种
var swapNumbers = function(numbers) {
	return [numbers[1],numbers[0]]
};
//憨憨第二种
var swapNumbers = function(numbers) {
	numbers[0] = numbers[0] - numbers[1];
	numbers[1] = numbers[1] + numbers[0];
	numbers[0] = numbers[1] - numbers[0];
    return numbers
};
