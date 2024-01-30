import { Car } from "./Car";
export class Director {
  public constructSportsCar(): Car {
    return Car.getBuilder()
      .setCarType("Sports Car")
      .setSeats(2)
      .setEngine("Powerful Engine")
      .setTransmission("Automatic")
      .setTripComputer("Advanced Trip Computer")
      .setGpsNavigator("GPS with Navigation System")
      .build();
  }

  public constructSUV(): Car {
    return Car.getBuilder()
      .setCarType("SUV")
      .setSeats(5)
      .setEngine("Fuel Efficient Engine")
      .setTransmission("Manual")
      .setTripComputer("Basic Trip Computer")
      .setGpsNavigator("Standard GPS")
      .build();
  }
}
