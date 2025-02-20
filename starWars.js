// we will make a simple star wars api, this will take in the info and we will use all and interlock them. we can possibly learn classes in this mini project aswell.

//

class PersonOfStarWars {
    constructor (height, personality, num1, num2) {
        this.height = height
        this.personality = personality
        this.num1 = num1
        this.num2 = num2
    }

    static secretName = 'darth vader';
    perfectLightsaber(n1, n2) {
        return `My perfect Lightsaber contains ${n1 * n2} crytals.`
    }

}

const Anakin = new PersonOfStarWars(172, 'happy', 10, 10);


