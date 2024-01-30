public class Client {
    public static void main(String[] args) {
       
        Car sedan = Car.getBuilder()
                .setCarType("Sedan")
                .setEngine("Engine")
                .setTransmission("Transmission")
                .setTripComputer("TripComputer")
                .setGpsNavigator("GpsNavigator")
                .build();
                

        Director director = new Director();
        Car sports = director.constructSportsCar();
        Car suv = director.constructSUV();

        System.out.println(sedan.getCarType());
        System.out.println(sports.getCarType());
        System.out.println(suv.getCarType());


    }
}