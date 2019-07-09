import {Seat} from "./Seat";

export class Reservation {
    constructor(
        public readonly trainId: string,
        public readonly seats: Seat[],
        public readonly bookingId: string
    ) {}
}
