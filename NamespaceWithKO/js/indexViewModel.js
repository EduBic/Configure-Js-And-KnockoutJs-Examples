'use strict';

// creo il namespace globale se questo non esiste
var MyApp = MyApp || (MyApp = {});


// creo i subnamespace sempre con controllo della già esistenza
MyApp.SerializableObject = MyApp.SerializableObject || (MyApp.SerializableObject = {});

MyApp.SerializableObject.Product = function (param) {
    this.name = param || "Unknown";
    this.info = "info...";
};


// creo un altro sottonamespace con interazione con l'altro subnamespace
MyApp.ViewModels = MyApp.ViewModels || (MyApp.ViewModels = {});

MyApp.ViewModels.MyViewModel = function () {
    var self = this;
    
    self.name = ko.observable("Name");
    
    self.myFunction = function () {
        // interazione con oggetto di namespace diverso
        var myProduct = new MyApp.SerializableObject.Product("It works!");
        self.name(myProduct.name);
        
        alert(self.name());
        console.log(self.name());
    };
    
    // avvio automaticamente myFunction()
    self.myFunction();
};


// -------- MAIN FUNCTION --------
$(document).ready(function() {
    // applico il binding solo dopo che la pagina è stata caricata
    ko.applyBindings(new MyApp.ViewModels.MyViewModel());
});
