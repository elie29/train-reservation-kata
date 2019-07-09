import {TicketOffice} from "../src/TicketOffice";
import {ReservationRequest} from "../src/ReservationRequest";
import {Reservation} from "../src/Reservation";


describe("TcketOffice", () => {
    it("should return empty reservation when the train does not exist", () => {
        const ticketOffice = new TicketOffice();
        const request = new ReservationRequest("wrong-id", 3);

        const result = ticketOffice.makeReservation(request);

        expect(result).toEqual(new Reservation("wrong-id", [], ""));
    });
});
