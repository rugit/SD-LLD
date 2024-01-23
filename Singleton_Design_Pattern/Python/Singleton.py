class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance
    
    #function to be used by the object of the class
    def member_fc(self):
        return "Fun 1"


if __name__ == "__main__":
    Singleton()

    A = Singleton()
    B = Singleton()

    assert A==B, "Object instance is not Same"
    print(A, B)

