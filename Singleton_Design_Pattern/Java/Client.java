
public class Client {
    public static void main(String[] args) {
        Singleton A = Singleton.getInstance();
        Singleton B = Singleton.getInstance();

        A.printValue();
        B.printValue();

        Thread t1 = new Thread(() -> {
            MultiThreadSingleton singleton =MultiThreadSingleton.getInstance();
            System.out.println("Thread 1: " + singleton.hashCode());
            singleton.printValue();
        });

        Thread t2 = new Thread(() -> {
            MultiThreadSingleton singleton = MultiThreadSingleton.getInstance();
            System.out.println("Thread 2: " + singleton.hashCode());
            singleton.printValue();
        });

        // Start the threads
        t1.start();
        t2.start();
    }
}