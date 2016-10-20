(function(ViewModels, Base, ko) {
    'use strict'
    
    ViewModels.templateVM = function () {
        var self = this;
        
        self.field = ko.observable("A field data of templateVM");
        self.fields = ko.observableArray([]);
    };
    
    // ViewModel methods
    
    ViewModels.templateVM.templateFunction = function () {
        console.log("templateFunction() called");
        Base.baseFunction()
    };
    
    
    // run code
    ViewModels.templateVM.templateFunction();
})(MyApp.ViewModels, MyApp.Base, ko);