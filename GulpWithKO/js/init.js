var MyApp = MyApp || (MyApp = {});

// create namespaces

/*
    MyApp.ViewModels = MyApp.ViewModels || (MyApp.ViewModels = {});  
    MyApp.NewNamespace = MyApp.NewNamespace || (MyApp.NewNamespace = {});
    MyApp.Base = MyApp.Base || (MyApp.Base = {});
*/

// alternative method
MyApp = {
    
    "ViewModels": function () {
        ViewModels || (ViewModels = {});
    },
    
    "NewNamespace": function () {
        NewNamespace || (NewNamespace = {});
    },
    
    "Base": function () {
        Base || (Base = {});
    }
};