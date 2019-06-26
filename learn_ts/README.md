## ts 学习笔记
本文仅记载了按照静态语言编程方式常用到的场景，编写习惯参考golang。对于其它的语法糖，更倾向以下列基本的用法达到相同的效果，而不使用ts的高级语法糖，保持编程简单。

#### 1. helloworld
`/helloworld.ts`

`/helloworld.js`

- `tsc helloworld.ts` 将ts文件编译成js
- `node helloworld.js` 将js运行

#### 2. types
`/types.ts`

`/types.ts`

- `number` 数字 `let a: number = 9`
- `string` 字符串 `let a: string= "happy"`
- `boolean` 布尔 `let a: boolean = true`
- `type[]` 数组 `let a: number[] = [1, 2, 3]`
- `[]` 元组 `let a: [number, string] = [1, "happy"]`

#### 3. control
`/control.ts`

`/control.js`

- if
```typescript
var a: number = 5
if (a == 5) {
    console.log(a)
} else if (a == 6){
   console.log(a)
}
```

- switch
```typescript
var b: number = 5
switch (a) {
    case 5:
        console.log(a)
        break
    case 6:
        console.log(a)
        break
    default:
        console.log("default")
        break
}
```

- for
```typescript
var i: number
for (i=0;i<3;i++) {
    console.log(i)
}
```

- function
```typescript

function hello() : void{
    console.log("hello")
}

function returnValue(x: number): number {
    return x
}
hello()
console.log(returnValue(8))
```

#### 4. type-convert
`/type-convert.ts`

`/type-convert.js`

```typescript
var d: number = 5
var e: string
e = d.toLocaleString()
console.log(e)

d = 1.723
e = d.toString(10)
console.log(e)
e = d.toString(2)
console.log(e)
```

#### 4. class
`/class.ts`

`/class.js`

```typescript
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
```