function withAge<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        #age: number = 20;
        get age() {
            return this.#age;
        }
    };
}

@withAge
class Human {
    readonly #name: string;

    constructor(params: { name: string }) {
        this.#name = params.name;
    }

    get name(): string {
        return this.#name;
    }
}

const h = new Human({name: 'ali'});

console.log({
    name: h.name,
    // @ts-ignore
    age: h.age,
});