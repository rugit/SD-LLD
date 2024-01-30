from Car import Car
from Director import Director

if __name__ == "__main__":
    sedan = Car.get_builder().set_car_type("Sedan")\
        .set_seats(5)\
        .set_engine("V8")\
        .set_transmission("Automatic")\
        .set_trip_computer("Yes")\
        .set_gps_navigator("Yes")\
        .build()
    
    Director = Director()
    sports_car = Director.construct_sports_car()
    suv = Director.construct_SUV()
        
    print(type(sedan))
    print(sedan.get_car_type())
    print(sports_car.get_car_type())
    print(suv.get_car_type())


    