export class Car {
  private carType: string;
  private seats: number;
  private engine: string;
  private transmission: string;
  private tripComputer: string;
  private gpsNavigator: string;
  private fuel: number = 0;

  public static getBuilder(): Builder {
    return new Builder();
  }

  private constructor(builder: Builder) {
    this.carType = builder.getCarType();
    this.seats = builder.getSeats();
    this.engine = builder.getEngine();
    this.transmission = builder.getTransmission();
    this.tripComputer = builder.getTripComputer();
    this.gpsNavigator = builder.getGpsNavigator();
  }

  public getCarType(): string {
    return this.carType;
  }

  public static createCarFromBuilder(builder: Builder): Car {
    return new Car(builder);
  }
}

class Builder {
  private carType: string;
  private seats: number;
  private engine: string;
  private transmission: string;
  private tripComputer: string;
  private gpsNavigator: string;

  public setCarType(carType: string): Builder {
    this.carType = carType;
    return this;
  }

  public getCarType(): string {
    return this.carType;
  }

  public setSeats(seats: number): Builder {
    this.seats = seats;
    return this;
  }

  public getSeats(): number {
    return this.seats;
  }

  public setEngine(engine: string): Builder {
    this.engine = engine;
    return this;
  }

  public getEngine(): string {
    return this.engine;
  }

  public setTransmission(transmission: string): Builder {
    this.transmission = transmission;
    return this;
  }

  public getTransmission(): string {
    return this.transmission;
  }

  public setTripComputer(tripComputer: string): Builder {
    this.tripComputer = tripComputer;
    return this;
  }

  public getTripComputer(): string {
    return this.tripComputer;
  }

  public setGpsNavigator(gpsNavigator: string): Builder {
    this.gpsNavigator = gpsNavigator;
    return this;
  }

  public getGpsNavigator(): string {
    return this.gpsNavigator;
  }

  public build(): Car {
    return Car.createCarFromBuilder(this);
  }
}
