var Singleton = /** @class */ (function () {
    function Singleton() {
        this.value = "hello";
    }
    Singleton.get_instance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
function clientCode() {
    var s1 = Singleton.get_instance();
    var s2 = Singleton.get_instance();
    if (s1 === s2) {
        console.log("Same instance");
    }
    else {
        console.log("Different instance");
    }
    console.log(s1, s2);
}
clientCode();
// TODO: Write a real-world usecase code.
