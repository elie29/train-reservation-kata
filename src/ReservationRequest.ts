
export class ReservationRequest {
    constructor(
        public readonly trainId: string,
        public readonly seatCount: number
    ) {}
}
