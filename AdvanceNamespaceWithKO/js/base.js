(function (MyApp, ko) {
    'use strict';
    
    MyApp.Base = {
        "URL": "http:www.google.com",
        "ACLASS": "a-class"
    };
    
    
    // methods
    
    MyApp.Base.baseFunction = function () {
        console.log("baseFunction called");
        //alert("This is a called base function!");
    };
    
    MyApp.Base.baseFunctionWithParam = function (param) {
        console.log("baseFunctionWithParam " + param + " called");
    };
    
    MyApp.Base.useJQuery = function () {
        console.log("useJQuery called");
        $("#content").addClass(MyApp.Base.ACLASS);
    };
    
}(MyApp, ko));