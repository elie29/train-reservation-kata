import { Seat } from "./Seat";

export interface TrainDataService {
  reserve(trainId: string, seats: Seat[], bookingReference: string): boolean;
  getInfo(trainId: string): TrainDataResponse
}


export interface TrainDataResponse {
    seats: {
        [seatId: string]: {
            booking_reference: string,
            seat_number: number,
            coach: string
        }
    }
}
