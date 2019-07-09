import {ReservationRequest} from "./ReservationRequest";
import {Reservation} from "./Reservation";
import {BookingReferenceService} from "./BookingReferenceService";
import {TrainDataService} from "./TrainDataService";
import {Seat} from "./Seat";

export class TicketOffice {
    constructor(
        private bookingReferenceService: BookingReferenceService,
        private trainDataService: TrainDataService
    ) {}

    makeReservation(request: ReservationRequest): Reservation {
        const train = this.trainDataService.getInfo(request.trainId);

        if(! train) {
            return new Reservation(request.trainId, [], "");
        }

        const refId = this.bookingReferenceService.generateReference();
        const firstSeatKey = Object.keys(train.seats)[0];
        let firstSeat = train.seats[firstSeatKey];
        const seat = new Seat(firstSeat.coach, firstSeat.seat_number);
        return new Reservation(request.trainId, [seat], refId);
    }
}
