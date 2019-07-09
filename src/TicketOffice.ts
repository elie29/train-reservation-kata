import {ReservationRequest} from "./ReservationRequest";
import {Reservation} from "./Reservation";

export class TicketOffice {
    makeReservation(request: ReservationRequest): Reservation {
        return new Reservation(request.trainId, [], "");
    }
}
