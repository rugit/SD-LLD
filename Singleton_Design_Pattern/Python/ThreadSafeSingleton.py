import threading

class ThreadSafeSingleton:
    _instance = None
    _lock = threading.Lock()

    def __new__(cls, *args, **kwargs):
        if not cls._instance:              #optimization, so that if the instance is already created, Thread shouldn't wait.
            with cls._lock:                #ensures only one thread creates the instance
                #lock-protected block, since multiple thread can acquire the lock. So, once a thread completes execution and the lock is freed, the waiting thread will also execute the statement, so the 2nd check is needed, to prevent the thread from creating another instance. 
                if not cls._instance:      
                    cls._instance = super(ThreadSafeSingleton, cls).__new__(cls)
        return cls._instance

def test_singleton() -> None:
    singleton = ThreadSafeSingleton()
    print(singleton)

if __name__ == "__main__":

    process1 = threading.Thread(target=test_singleton)
    process2 = threading.Thread(target=test_singleton)
    process1.start()
    process2.start()

#The memory address of the instance in both process1 and process2 will be same
