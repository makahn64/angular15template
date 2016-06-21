UserDefaults
============

Emulates, kind of, the Obj-C NSUserDefaults functionality. It provides a simple mechanism for storing
objects and primitives in browser `localStorage.`

SETUP
-----

- Import script into index.html.

- Inject 'userdefaults.service' into your root app module.
    
    `var app = angular.module("ngApp", [ 'ui.router', 'ui.bootstrap', 'userdefaults.service']);`


- Inject 'userDefaults' into controllers, directives, etc. where you need it.

    `app.controller('myFunController', function( $scope, userDefaults ){ ... });`
    
    
USAGE
-----

Each type has a getter and setter. The following types are supported:
- Boolean (getBoolForKey, setBoolForKey)
- Integer (getIntForKey, setIntForKey)
- String (getStringForKey, setStringForKey)
- Object (getObjectForKey, setObjectForKey). Object is stringified so don't expect any methods coming back.
- Float not in this version, I guess I forgot or didn't need it.

Getters can have a default value passed as the second parameter in case the key does not exist.

Set a boolean:

`userDefaults.setBool("imTooSexy", true)`

Get a boolean:

`var heSexy = userDefaults.getBool("imTooSexy", false);`

The second parameter is the default value if the key cannot be found.

Set an object:

`var arrObj = [ { color: 'red', size: 1 }, { color: 'blue', size: 2 } ];`

`userDefaults.setObjectForKey("inventory", arrObj);`

Get an object (with a default of an empty array):

`var myInv = userDefaults.getObjectForKey("inventory", []);`
