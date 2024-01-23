
public class Singleton{

    private static Singleton instance = null;
    private String value;

    private Singleton() {
        this.value = "Hello!";
    }

    public static Singleton getInstance(){
        if(Singleton.instance == null)
            Singleton.instance = new Singleton();
        return Singleton.instance;
    }

    public void printValue(){
        System.out.println(this.value);
    }

}

// TODO: Write code for a real-world use case