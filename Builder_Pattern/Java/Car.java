public class Car{
    String carType;
    int seats;
    String engine;
    String transmission;
    String tripComputer;
    String gpsNavigator;
    double fuel = 0;

    public static Builder getBuilder(){
        return new Builder();
    }

    private Car(Builder builder){
        this.carType = builder.getCarType();
        this.seats = builder.getSeats();
        this.transmission = builder.getTransmission();
        this.tripComputer = builder.getTripComputer();
        this.gpsNavigator = builder.getGpsNavigator();
        this.fuel = builder.getFuel();
    }

    public String getCarType(){
        return carType;
    }


    public static class Builder{

        private String carType;
        private int seats;
        private String engine;
        private String transmission;
        private String tripComputer;
        private String gpsNavigator;
        private double fuel = 0;

        public String getCarType(){
            return carType;
        }

        public Builder setCarType(String carType){
            this.carType = carType;
            return this;
        }

        public int getSeats(){
            return seats;
        }

        public Builder setSeats(int seats){
            this.seats = seats;
            return this;
        }

        public String getRngine(){
            return engine;
        }

        public Builder setEngine(String engine){
            this.engine = engine;
            return this;
        }

        public String getTransmission(){
            return transmission;
        }

        public Builder setTransmission(String transmission){
            this.transmission = transmission;
            return this;
        }

        public String getTripComputer(){
            return tripComputer;
        }

        public Builder setTripComputer(String tripComputer){
            this.tripComputer = tripComputer;
            return this;
        }

        public String getGpsNavigator(){
            return gpsNavigator;
        }

        public Builder setGpsNavigator(String gpsNavigator){
            this.gpsNavigator = gpsNavigator;
            return this;
        }

        public double getFuel(){
            return fuel;
        }

        public Builder setFuel(double fuel){
            this.fuel = fuel;
            return this;
        }


        public Car build(){
            //validate the values
            if(getFuel() > 100){
                throw new IllegalArgumentException("Fuel limit is 100");
            }

            return new Car(this);
        }
        
    }




}