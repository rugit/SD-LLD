class Singleton {
  private static instance: Singleton;
  private value: string;

  private constructor() {
    this.value = "hello";
  }

  public static get_instance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  //other methods here
  //fun1()
  //fun2()
}

function clientCode() {
  const s1 = Singleton.get_instance();
  const s2 = Singleton.get_instance();

  if (s1 === s2) {
    console.log("Same instance");
  } else {
    console.log("Different instance");
  }
  console.log(s1, s2);
}

clientCode();

// TODO: Write a real-world usecase code.
