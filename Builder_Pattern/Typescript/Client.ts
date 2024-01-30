import { Car } from "./Car";
import { Director } from "./Director";
function ClientCode() {
  let sedan = Car.getBuilder()
    .setCarType("Sedan")
    .setSeats(5)
    .setEngine("V8")
    .setTransmission("Automatic")
    .setTripComputer("Basic Trip Computer")
    .setGpsNavigator("Standard GPS")
    .build();

  let director = new Director();

  let suv = director.constructSUV();
  let sportsCar = director.constructSportsCar();

  console.log(sedan);
  console.log(suv);
  console.log(sportsCar);
}

ClientCode();
