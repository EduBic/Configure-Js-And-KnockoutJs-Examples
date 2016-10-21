(function(ViewModels, Base, ko) {
    'use strict'
    
    ViewModels.indexVM = function () {
        var self = this;
        
        self.field = ko.observable("A field data of indexVM");
        self.fields = ko.observableArray([]);
    };
    
    // ViewModel methods
    
    ViewModels.indexVM.templateFunction = function () {
        console.log("templateFunction() called");
        Base.baseFunction()
    };
    
    
    // run code
    ViewModels.indexVM.templateFunction();
})(MyApp.ViewModels, MyApp.Base, ko);