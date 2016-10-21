(function(ViewModels, Base, ko) {
    'use strict'
    
    MyApp.ViewModels.anotherVM = function () {
        var self = this;
        
        self.field = ko.observable("Test anotherVM");
        self.button = ko.observable("Press me!");
        self.fields = ko.observableArray([]);
        
        self.internalFunction = function () {
            console.log("interalFunction called");
            //alert("binding works!");
        };
    };
    
    // ViewModel methods
    
    MyApp.ViewModels.anotherVM.externalFunction = function () {
        console.log("anotherFunction called");
        
        Base.baseFunction();    // Works
        Base.useJQuery();       // Works
        
        //alert("anotherFunction called");
    };
    
})(MyApp.ViewModels, MyApp.Base, ko);