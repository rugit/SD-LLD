class Car :

    @staticmethod
    def get_builder() :
        return Car.Builder()
     
    def __new__(cls, builder) -> None:
        instance = super(Car, cls).__new__(cls)
        instance.__car_type = builder.get_car_type();
        instance.__seats = builder.get_seats();
        instance.__engine=builder.get_engine();
        instance.__transmission=builder.get_transmission();
        instance.__trip_computer=builder.get_trip_computer();
        instance.__gps_navigator=builder.get_gps_navigator();
        return instance

    def get_car_type(self) -> str:
        return self.__car_type
    
    def set_car_type(self, car_type) -> None:
        self.__car_type = car_type


    class Builder:

        def set_car_type(self, car_type) :
            self.car_type = car_type
            return self
        
        def get_car_type(self):
            return self.car_type;

        def set_seats(self, seats) :
            self.seats = seats
            return self
        
        def get_seats(self):
            return self.seats

        def set_engine(self, engine) :
            self.engine = engine
            return self
        
        def get_engine(self):
            return self.engine

        def set_transmission(self, transmission) :
            self.transmission = transmission
            return self
        
        def get_transmission(self):
            return self.transmission

        def set_trip_computer(self, trip_computer) :
            self.trip_computer = trip_computer
            return self

        def get_trip_computer(self):
            return self.trip_computer

        def set_gps_navigator(self, gps_navigator) :
            self.gps_navigator = gps_navigator
            return self
        
        def get_gps_navigator(self):
            return self.gps_navigator
        
        def build(self):
            return Car(self)