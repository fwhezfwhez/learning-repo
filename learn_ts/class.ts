class Dog {
    private id: number
    name: string
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    Speak (): void {
        console.log("汪")
    }
    ID (): number {
        return this.id
    }
}
var dog = new Dog(1, "旺柴")
dog.Speak()
console.log(dog.name)
console.log(dog.ID())