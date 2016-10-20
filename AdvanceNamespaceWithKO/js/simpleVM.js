(function (MyApp, ko) {
    
    MyApp.simpleVM = function () {
        var self = this;
        
        self.field = ko.observable("Test simpleVM");
        self.button = ko.observable("Press here!");
        
        self.internalFunction = function () {
            console.log("simple internalFunction");
            //alert("internalFunction works!");
        };
        
    };
    
    MyApp.simpleVM.externalFunction = function () {
        console.log("simple externalFunction");
        //alert("externalFunction works!");
    };
    
}(MyApp, ko));