export class Decedent {

    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public dateOfBirth: Date,
        public eventDate: Date,
        public placeOfBirth?: PlaceOfBirth) {

    }
}

export class PlaceOfBirth {
    constructor(public city: string, public state: string, public zip: number) {
    }
}
