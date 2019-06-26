var Dog = /** @class */ (function () {
    function Dog(id, name) {
        this.id = id;
        this.name = name;
    }
    Dog.prototype.Speak = function () {
        console.log("汪");
    };
    Dog.prototype.ID = function () {
        return this.id;
    };
    return Dog;
}());
var dog = new Dog(1, "旺柴");
dog.Speak();
console.log(dog.name);
console.log(dog.ID());
