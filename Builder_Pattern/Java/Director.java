public class Director {
    public Car constructSportsCar() {
        return Car.getBuilder()
                .setCarType("Sports Car")
                .setSeats(2)
                .setEngine("Powerful Engine")
                .setTransmission("Automatic")
                .setTripComputer("Advanced Trip Computer")
                .setGpsNavigator("GPS with Navigation System")
                .build();
    }

    public Car constructSUV() {
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
