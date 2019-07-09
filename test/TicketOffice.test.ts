import {TicketOffice} from "../src/TicketOffice";
import {ReservationRequest} from "../src/ReservationRequest";
import {Reservation} from "../src/Reservation";
import {Seat} from "../src/Seat";
import {TRAINS} from "./trains";
import {BookingReferenceService} from "../src/BookingReferenceService";
import {TrainDataResponse, TrainDataService} from "../src/TrainDataService";
import {HashMap} from "../src/utils";


describe("TcketOffice", () => {
    let ticketOffice: TicketOffice;

    beforeEach(() => {
        const fakeBookingReferenceService = new FakeBookingReferenceService(["ref1", "ref2", "ref3"]);
        const fakeTrainDataService = new FakeTrainDataService(TRAINS);
        ticketOffice = new TicketOffice(fakeBookingReferenceService, fakeTrainDataService);
    });

    it("should return empty reservation when the train does not exist", () => {
        const request = new ReservationRequest("wrong-id", 3);

        const result = ticketOffice.makeReservation(request);

        expect(result).toEqual(new Reservation("wrong-id", [], ""));
    });

    it("should return a reservation with one seat when the train is empty", () => {
        const request = new ReservationRequest("express_2000", 1);

        const result = ticketOffice.makeReservation(request);

        expect(result).toEqual(new Reservation("express_2000", [new Seat("A", 1)], "ref1"));
    });
});

class FakeBookingReferenceService implements BookingReferenceService {
    constructor(
        private referenceIds: string[]
    ){}

    generateReference(): string {
        return this.referenceIds[0];
    }

}

class FakeTrainDataService implements TrainDataService {
    constructor(private trains: HashMap<TrainDataResponse>) {}

    getInfo(trainId: string): TrainDataResponse {
        return this.trains[trainId];
    }

    reserve(trainId: string, seats: Seat[], bookingReference: string): boolean {
        return false;
    }


}

