import { Seat } from "./Seat";

interface TrainDataService {
  reserve(trainId: string, seats: Seat[], bookingReference: string): boolean;
  getInfo(trainId: string): TrainDataResponse
}


interface TrainDataResponse {
    seats: {
        [seatId: string]: {
            bookingReference: string,
            seat_number: number,
            coach: string
        }
    }
}
