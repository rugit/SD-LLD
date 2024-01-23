public class MultiThreadSingleton {

    private static MultiThreadSingleton instance = null;
    private String value;

    private MultiThreadSingleton() {
        this.value = "Hello World!";
    }

    public static MultiThreadSingleton getInstance(){
        if(MultiThreadSingleton.instance == null)
            synchronized (MultiThreadSingleton.class){
                if(MultiThreadSingleton.instance == null){
                    MultiThreadSingleton.instance = new MultiThreadSingleton();
                }
            }
            
        return MultiThreadSingleton.instance;
    }

    public void printValue(){
        System.out.println(this.value);
    }

}
