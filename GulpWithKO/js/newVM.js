(function (NewNamespace, Base, ko) {
    'use strict'
    
    NewNamespace.newVM = function () {
        var self = this;
        
        self.field = ko.observable("Test newVM");
        self.button = ko.observable("Press here!");
        
        self.internalFunction = function () {
            console.log("new internalFunction");
            //alert("internalFunction works!");
        };
        
    };
    
     NewNamespace.externalFunction = function () {
        console.log("new externalFunction");
        //alert("externalFunction works!");
    };
    
}(MyApp.NewNamespace, MyApp.Base, ko));