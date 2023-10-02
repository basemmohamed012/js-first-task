
//اعمل فانكشن تحسب المتوسط الحسابى لمجموعه من االرقام )ال يقلوا عن ١٠ ارقام(
/*function calcavrege(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10){
    return(n1+n2+n3+n4+n5+n6+n7+n8+n9+n10)/2 ;
}
console.log(calcavrege(1,2,3,4,5,6,7,8,9,10));*/



/*اعمل فانكشن تاخد ارتفاع وقاعده المثلث وترجع مساحه المثلث
/*function clacarea(n1,n2){
    var Area = (0.5*n1*n2);
    return Area;
}
console.log(clacarea(2,2));*/


//اعمل فانكشن تاخد العمر و ترجعه بااليام واطبعها فى الكونسول
/*function clacage(years){
    return(years*365);
}
console.log(clacage(20));*/




//عمل فانكشن تاخد رقمين وترجع مجموعهم
/*function calcsum(n1,n2){
    var sum =n1+n2;
    return(sum);
}
console.log(calcsum(2,3));*/



//عمل فانكشن تأخذ اكتر من عشر اسامي داخل array ثم تعرض اول عنصر فقط
/*function showname(name){
   
    return (name[0]) ;
}
names=["basem", "ali", "mohamed","ahmed","abdallah","omar","mohamed","ahmed","abdallah"];
var n1=showname(names);
console.log(showname(names));*/






//اعمل فانكشن تعرض اسمك كامل في ال HTML

/*function showname(){
    return (document.getElementById("b").innerHTML="Basem Mohamed"); 
}
showname();*/







//اعمل فانكشن تحول الساعات الي ثواني

/*function hours(n){
    return n*3600;
}
console.log(hours(2));*/





//اعمل فانكشن بتاخد اربع ارقام وترجع مجموعهم لو اكتر من ٣٥٠ أظهر true لو أقل من 
//٣٥٠ أظهر false والعرض يكون علي ال document h

/*function sum_num(n1,n2,n3,n4){
if((n1+n2+n3+n4)>350){
    document.getElementById("v").innerHTML="TRUE"
}else{
    document.getElementById("v").innerHTML="FALSE"
}
}
sum_num(100,30,200,250);*/





//مل فانكشن بتاخد رقم لو بيساوي صفر رجع true عكس كدا بيرجع f
/*function num(n1){
    if(n1==0){
        console.log("true");
    }else{
        console.log("false");
    }
}
num(5);*/





//عمل فانكشن بتاخد رقمين وتجيب باقي القسمة بتاعهم وليس القسمة ) مختلفة 

/*function division(n1,n2){
    return (n1%n2);
}
console.log(division(10,3));*/



//اكتب فانكشن تاخذ رقمين وتطبع الرقم األكبر وإذا كانت متساويين تطبع أنهم متساويين
 
/*function max_num(n1,n2){
  if(n1>n2){
    console.log(n1);
  }
  else if(n2>n1)
  {
    console.log(n2);
  }
  else if(n1==n2)
  {
     console.log("n1,n2 are equal");
  }
}
max_num(20,10);*/





//اكتب فانكشن تتأكد إذا كان المتغير المعطى رقم او ا
/*function check(n){
    if((n*0)==0){
        console.log("n is number");
    }else{
        console.log("n is not number");
    }
}
check(2);
check("basem");
check("a");
check("%");*/

//اكتب فانكشن تجيب التاريخ الحال
/*function days(){
    return Date();
}
console.log(days());*/