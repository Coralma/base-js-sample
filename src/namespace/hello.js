"use strict";
(function (root, factory) {
    //cccis.constants命名空间
    root.cccis.hello = factory();
}(this, function () {
    return {
        say: function() {
            return "Hello"
        },
        sayHi: function(name) {
            return "Hi " + name;
        }
    }
}));