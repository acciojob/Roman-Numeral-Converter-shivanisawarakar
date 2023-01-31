function convertToRoman(num) {
  	const obj = {
	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
@@ -10,25 +10,83 @@ function convertToRoman(num) {
    };

  //your code here
  let romanNum = "";
  const strNum = String(num);
  const romans = {
      1: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // ones
      2: ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // tens
      3: ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // hundreds
      4: ["M", "MM", "MMM"] // thousands
  };

  for (let i = 1; i <= strNum.length; i++){
      if (Number(strNum[strNum.length - i]) !== 0)
          romanNum = romans[i][strNum[strNum.length - i] - 1] + romanNum;
  }
  return romanNum;

	let result = "";
	while(num){
		if(num>=1000){
			result += "M";
			num -= 1000;
		}
		else if(num>=500){
			if(num>=900){
				result += "CM";
				num -= 900;
			}
			else{
				result += "D";
				num -= 500;
			}
		}
		else if(num>=100){
			if(num>=400){
			   result += "CD";
			   num -= 400;
			}
			else{
			   result += "C";
			   num -= 100;
			}
		}
		else if(num>=50){
			if(num>=90){
			   result += "XC";
			   num -= 90;
			}
			else{
			   result += "L";
			   num -= 50;
			}
		}
		else if(num>=10){
			if(num>=40){
			   result += "XL";
			   num -= 40;
			}
			else{
			   result += "X";
			   num -= 10;
			}
		}
		else if(num>=5){
			if(num>=9){
			   result += "IX";
			   num -= 9;
			}
			else{
			   result += "V";
			   num -= 5;
			}
		}
		else{
			if(num>=4){
			   result += "IV";
			   num -= 4;
			}
			else{
				result += "I";
				num -= 1;
			}
		}
	}
	return result;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));
// console.log(convertToRoman(36));

// do not edit below this line
module.exports = convertToRoman