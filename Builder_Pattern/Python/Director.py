from Car import Car
class Director:
    def construct_sports_car(self) -> Car :
        return Car.get_builder()\
            .set_car_type("Sports Car")\
            .set_seats(2)\
            .set_engine("Powerful Engine")\
            .set_transmission("Automatic")\
            .set_trip_computer("Advanced Trip Computer")\
            .set_gps_navigator("GPS with Navigation System")\
            .build()
    

    def construct_SUV(self) -> Car:
        return Car.get_builder()\
            .set_car_type("SUV")\
            .set_seats(5)\
            .set_engine("Fuel Efficient Engine")\
            .set_transmission("Manual")\
            .set_trip_computer("Basic Trip Computer")\
            .set_gps_navigator("Standard GPS")\
            .build()
    
