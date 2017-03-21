window.onload = function() {
    /*skapa variabel var har ersatts med let och const*/
    const pi = 3.142;

    /*error assisgment to constant variable*/
   /* pi = 10;*/
    
    /*error pi has already been declared*/
/*    const  pi = 10;
    console.log(pi);*/

    function calcArea(r) {
        /*You can redeclare it with const*/
      /*  const pi = 10;*/
    console.log("The area is: " + pi * r * r);
}
    calcArea(5);
}