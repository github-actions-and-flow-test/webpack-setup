export class Person {
    constructor(name, image) {
        this.personName = name
        this.personDateOfBirth = new Date()
        this.image = image
    }

    getPerson() {
        return JSON.stringify({
                personName: this.personName,
                personDateOfBirth: this.personDateOfBirth.toJSON(),
                image: this.image

            },
        )
    }
    toUpperCase() {
        return this.personName.toUpperCase()
    }

}