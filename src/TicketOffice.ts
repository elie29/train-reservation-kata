import {ReservationRequest} from "./ReservationRequest";
import {EmptyReservation, Reservation} from "./Reservation";
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
            return new EmptyReservation(request.trainId);
        }

        const refId = this.bookingReferenceService.generateReference();

        const seatKeys = Object.keys(train.seats);
        const firstAvailableSeatKey = seatKeys.filter(seatKey => ! train.seats[seatKey].booking_reference)[0];
        let firstAvailableSeat = train.seats[firstAvailableSeatKey];
        const seat = new Seat(firstAvailableSeat.coach, firstAvailableSeat.seat_number);

        this.trainDataService.reserve(request.trainId, [seat], refId);
        return new Reservation(request.trainId, [seat], refId);
    }
}
