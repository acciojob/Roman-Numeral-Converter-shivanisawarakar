function convertToRoman(num) {
  	const obj = {
	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
@@ -10,25 +10,83 @@ function convertToRoman(num) {
    };

  //your code here
  unction convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	
 let result = "";
   while(num){
      if(num>=1000){
         result += "M";
         num -= 1000;
      }else if(num>=500){
         if(num>=900){
            result += "CM";
            num -= 900;
         }else{
            result += "D";
            num -= 500;
         }
         }else if(num>=100){
            if(num>=400){
               result += "CD";
               num -= 400;
            }else{
               result += "C";
               num -= 100;
            }
         }else if(num>=50){
            if(num>=90){
               result += "XC";
               num -= 90;
            }else{
               result += "L";
               num -= 50;
            }
         }else if(num>=10){
            if(num>=40){
               result += "XL";
               num -= 40;
            }else{
               result += "X";
               num -= 10;
            }
         }else if(num>=5){
            if(num>=9){
               result += "IX";
               num -= 9;
           }else{
               result += "V";
               num -= 5;
            }
         }else{
            if(num>=4){
               result += "IV";
               num -= 4;
         }else{
            result += "I";
            num -= 1;
         }
      }
   }
   return result;
}

module.exports = convertToRoman