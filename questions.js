let questionId = 1;

function createQuestion(topic, prompt, difficulty, likelihood, hint, answer) {
  return {
    id: `java-${questionId++}`,
    topic,
    prompt,
    difficulty,
    likelihood,
    hint,
    answer
  };
}

window.questionsBank = [
  createQuestion(
    "Platform & JVM",
    "What is Java?",
    "Beginner",
    "Very Common",
    "Define both the language and the runtime idea behind it.",
    "Java is a high-level, strongly typed programming language and platform. Source code is compiled to bytecode, and that bytecode runs on the JVM."
  ),
  createQuestion(
    "Platform & JVM",
    "What are the main features of Java?",
    "Beginner",
    "Very Common",
    "Think portability, safety, memory management, and libraries.",
    "Java is known for platform independence, object-oriented design, automatic memory management, strong type checking, rich standard libraries, and built-in concurrency support."
  ),
  createQuestion(
    "Platform & JVM",
    "What is the difference between JDK, JRE, and JVM?",
    "Beginner",
    "Very Common",
    "One runs code, one is the runtime bundle, one is the developer kit.",
    "The JVM executes Java bytecode. The JRE is the JVM plus libraries needed to run Java programs. The JDK includes the JRE and developer tools such as javac and javadoc."
  ),
  createQuestion(
    "Platform & JVM",
    "How does the JVM work at a high level?",
    "Intermediate",
    "Common",
    "Think loading, verifying, memory setup, and execution.",
    "The JVM loads class files, verifies the bytecode, creates runtime memory areas, and executes the code. It may interpret bytecode or compile frequently used code paths into native machine code."
  ),
  createQuestion(
    "Platform & JVM",
    "What is bytecode?",
    "Beginner",
    "Common",
    "It sits between source code and native machine code.",
    "Bytecode is the intermediate instruction format produced by the Java compiler. The JVM reads and executes it, which is what makes Java portable across systems."
  ),
  createQuestion(
    "Platform & JVM",
    "What does 'write once, run anywhere' mean in Java?",
    "Beginner",
    "Common",
    "The key is bytecode plus the JVM.",
    "It means compiled Java bytecode can run on any system that has a compatible JVM, without recompiling the source code for each operating system."
  ),
  createQuestion(
    "Platform & JVM",
    "What is JIT compilation?",
    "Intermediate",
    "Common",
    "Hot code paths matter here.",
    "JIT stands for Just-In-Time compilation. The JVM identifies frequently executed bytecode and compiles it into native machine code at runtime to improve performance."
  ),
  createQuestion(
    "Platform & JVM",
    "Why is JIT compilation useful?",
    "Intermediate",
    "Occasional",
    "Compare interpretation with native execution speed.",
    "Interpreting bytecode is flexible but slower. JIT improves speed by compiling hot parts of the program into machine code while the application is running."
  ),
  createQuestion(
    "Platform & JVM",
    "What is a classloader?",
    "Intermediate",
    "Common",
    "It brings classes into the JVM when needed.",
    "A classloader is the JVM component responsible for loading class definitions into memory. It finds bytecode, loads it, and hands it to the JVM for linking and initialization."
  ),
  createQuestion(
    "Platform & JVM",
    "What is the parent delegation model in classloading?",
    "Advanced",
    "Occasional",
    "A loader usually asks its parent first.",
    "In parent delegation, a classloader first asks its parent to load a class. If the parent cannot load it, the current loader tries. This avoids loading core classes multiple times."
  ),
  createQuestion(
    "Platform & JVM",
    "What are the main built-in classloaders in Java?",
    "Advanced",
    "Occasional",
    "Bootstrap, platform, and application are the usual three.",
    "The main built-in classloaders are the bootstrap classloader, the platform classloader, and the application classloader. They load core JDK classes, platform classes, and application classes."
  ),
  createQuestion(
    "Platform & JVM",
    "What is class initialization in Java?",
    "Advanced",
    "Occasional",
    "It happens after loading and linking.",
    "Class initialization is the step where static fields are assigned their final initialized values and static initializer blocks run. It happens when the class is first actively used."
  ),
  createQuestion(
    "Platform & JVM",
    "What is the difference between compilation time and runtime in Java?",
    "Beginner",
    "Common",
    "Think javac first, JVM later.",
    "Compilation time is when source code is checked and turned into bytecode by javac. Runtime is when the JVM loads and executes that bytecode."
  ),
  createQuestion(
    "Platform & JVM",
    "What is the difference between source code, bytecode, and machine code?",
    "Beginner",
    "Common",
    "These are three stages of program representation.",
    "Source code is the Java text written by the developer. Bytecode is the compiled intermediate form. Machine code is native CPU instructions produced or used at runtime."
  ),
  createQuestion(
    "Platform & JVM",
    "What is the purpose of the javac compiler?",
    "Beginner",
    "Common",
    "It does more than just translation.",
    "javac checks Java source code for syntax and type errors, then compiles it into bytecode stored in class files."
  ),
  createQuestion(
    "Platform & JVM",
    "What is the purpose of the java command?",
    "Beginner",
    "Common",
    "Think execution, not compilation.",
    "The java command launches the JVM and runs a Java application by loading and executing its compiled bytecode."
  ),
  createQuestion(
    "Platform & JVM",
    "What is the difference between stack memory and heap memory?",
    "Beginner",
    "Very Common",
    "Method execution data and object storage are the key ideas.",
    "The stack stores method frames, local variables, and call data for each thread. The heap stores objects and arrays and is shared across threads."
  ),
  createQuestion(
    "Platform & JVM",
    "Is Java pass-by-value or pass-by-reference?",
    "Intermediate",
    "Very Common",
    "Even references are passed by value.",
    "Java is always pass-by-value. When you pass an object to a method, Java passes a copy of the reference, not the object itself."
  ),
  createQuestion(
    "Platform & JVM",
    "What is platform independence in Java?",
    "Beginner",
    "Common",
    "The JVM is what makes this possible.",
    "Platform independence means the same compiled Java program can run on different operating systems as long as they provide a compatible JVM."
  ),
  createQuestion(
    "Platform & JVM",
    "What is the difference between a JVM process and a Java thread?",
    "Beginner",
    "Occasional",
    "One is the whole running program, one is a unit inside it.",
    "A JVM process is the whole running Java application. A thread is a path of execution inside that process."
  ),

  createQuestion(
    "OOP & Design",
    "What is object-oriented programming?",
    "Beginner",
    "Very Common",
    "State plus behavior.",
    "Object-oriented programming is a way of designing software around objects that combine data and the operations that work on that data."
  ),
  createQuestion(
    "OOP & Design",
    "What are the four pillars of OOP?",
    "Beginner",
    "Very Common",
    "The standard four terms are expected here.",
    "The four pillars are encapsulation, inheritance, polymorphism, and abstraction."
  ),
  createQuestion(
    "OOP & Design",
    "What is encapsulation?",
    "Beginner",
    "Very Common",
    "Think controlled access to internal state.",
    "Encapsulation means keeping fields and methods together inside a class and restricting direct access to internal data through access modifiers and methods."
  ),
  createQuestion(
    "OOP & Design",
    "What is inheritance?",
    "Beginner",
    "Very Common",
    "A subclass builds on a superclass.",
    "Inheritance lets one class reuse and extend the behavior of another class. A subclass can inherit members from a superclass and override some behavior."
  ),
  createQuestion(
    "OOP & Design",
    "What is polymorphism?",
    "Beginner",
    "Very Common",
    "One interface, many implementations.",
    "Polymorphism means the same method call can behave differently depending on the actual object involved."
  ),
  createQuestion(
    "OOP & Design",
    "What is abstraction?",
    "Beginner",
    "Very Common",
    "Expose essentials and hide detail.",
    "Abstraction means showing only the important behavior of a type while hiding internal implementation details."
  ),
  createQuestion(
    "OOP & Design",
    "What is the difference between method overloading and method overriding?",
    "Beginner",
    "Very Common",
    "Same class versus subclass is the main contrast.",
    "Overloading means methods in the same class share a name but differ in parameters. Overriding means a subclass provides its own implementation of an inherited method."
  ),
  createQuestion(
    "OOP & Design",
    "What is the difference between a class and an object?",
    "Beginner",
    "Very Common",
    "Blueprint and instance.",
    "A class is a blueprint that defines fields and methods. An object is an actual instance created from that class."
  ),
  createQuestion(
    "OOP & Design",
    "What is an interface in Java?",
    "Beginner",
    "Very Common",
    "Focus on contract first.",
    "An interface defines a contract of methods that implementing classes agree to provide. It is used to model shared behavior without forcing a single inheritance tree."
  ),
  createQuestion(
    "OOP & Design",
    "What is an abstract class?",
    "Beginner",
    "Common",
    "It can mix abstract and concrete behavior.",
    "An abstract class is a class that cannot be instantiated directly and can contain both fully implemented methods and abstract methods."
  ),
  createQuestion(
    "OOP & Design",
    "When would you choose an interface over an abstract class?",
    "Intermediate",
    "Common",
    "Shared contract versus shared base implementation.",
    "Choose an interface when unrelated classes need to share a contract. Choose an abstract class when subclasses should share common state or reusable base logic."
  ),
  createQuestion(
    "OOP & Design",
    "Can a Java class implement multiple interfaces?",
    "Beginner",
    "Common",
    "This is one way Java supports multiple type contracts.",
    "Yes. A class can implement multiple interfaces, which lets it support multiple contracts at the same time."
  ),
  createQuestion(
    "OOP & Design",
    "Can a Java class extend multiple classes?",
    "Beginner",
    "Common",
    "Java avoids multiple inheritance of classes.",
    "No. Java supports single inheritance for classes, so a class can extend only one class directly."
  ),
  createQuestion(
    "OOP & Design",
    "What is method hiding in Java?",
    "Advanced",
    "Rare",
    "This applies to static methods, not instance methods.",
    "Method hiding happens when a subclass defines a static method with the same signature as one in the superclass. It does not override the method because static methods belong to the class."
  ),
  createQuestion(
    "OOP & Design",
    "What is the difference between composition and inheritance?",
    "Intermediate",
    "Common",
    "Has-a versus is-a.",
    "Inheritance models an is-a relationship. Composition models a has-a relationship by building classes from other objects, which often gives more flexibility."
  ),
  createQuestion(
    "OOP & Design",
    "Why is composition often preferred over inheritance?",
    "Intermediate",
    "Common",
    "Think coupling and flexibility.",
    "Composition is often preferred because it reduces tight coupling, avoids deep inheritance chains, and makes behavior easier to change by replacing collaborating objects."
  ),
  createQuestion(
    "OOP & Design",
    "What is dynamic binding in Java?",
    "Intermediate",
    "Occasional",
    "Overridden instance methods are chosen at runtime.",
    "Dynamic binding means the JVM decides at runtime which overridden instance method to call based on the real object type."
  ),
  createQuestion(
    "OOP & Design",
    "What is static binding in Java?",
    "Intermediate",
    "Occasional",
    "Compile-time selection is the clue.",
    "Static binding means the method or member to use is determined at compile time, which is typical for static, private, and overloaded methods."
  ),
  createQuestion(
    "OOP & Design",
    "What is the difference between an IS-A and a HAS-A relationship?",
    "Beginner",
    "Common",
    "Inheritance versus composition again.",
    "An IS-A relationship means one type is a specialized form of another, like Dog is an Animal. A HAS-A relationship means one object contains or uses another object."
  ),
  createQuestion(
    "OOP & Design",
    "What is object state and object behavior?",
    "Beginner",
    "Common",
    "Fields and methods.",
    "Object state is the data stored in its fields. Object behavior is the work it can do through its methods."
  ),

  createQuestion(
    "Language Basics",
    "What is a constructor?",
    "Beginner",
    "Very Common",
    "It runs during object creation.",
    "A constructor is a special member used to initialize an object when it is created. It has the same name as the class and no return type."
  ),
  createQuestion(
    "Language Basics",
    "What is a default constructor?",
    "Beginner",
    "Common",
    "This exists only if you do not declare any constructors.",
    "A default constructor is a no-argument constructor automatically supplied by the compiler if a class defines no constructors at all."
  ),
  createQuestion(
    "Language Basics",
    "Can constructors be overloaded?",
    "Beginner",
    "Common",
    "Same name, different parameters.",
    "Yes. A class can have multiple constructors with different parameter lists so objects can be created in different ways."
  ),
  createQuestion(
    "Language Basics",
    "What is constructor chaining?",
    "Intermediate",
    "Occasional",
    "this() and super() are the tools here.",
    "Constructor chaining means one constructor calls another constructor, either in the same class using this() or in the parent class using super()."
  ),
  createQuestion(
    "Language Basics",
    "What are access modifiers in Java?",
    "Beginner",
    "Very Common",
    "Name the four visibility levels.",
    "Access modifiers control visibility. The main ones are public, protected, private, and package-private."
  ),
  createQuestion(
    "Language Basics",
    "What is package-private access?",
    "Beginner",
    "Common",
    "It is the default when no modifier is written.",
    "Package-private means a class member is visible only to other classes in the same package. It is the default when no access modifier is given."
  ),
  createQuestion(
    "Language Basics",
    "What does the static keyword mean?",
    "Beginner",
    "Very Common",
    "Belongs to the class, not each instance.",
    "static means a field, method, or nested class belongs to the class itself rather than to individual objects."
  ),
  createQuestion(
    "Language Basics",
    "What does the final keyword mean for a variable?",
    "Beginner",
    "Very Common",
    "Reassignment is the key idea.",
    "For a variable, final means it can be assigned only once after initialization."
  ),
  createQuestion(
    "Language Basics",
    "What does the final keyword mean for a method?",
    "Beginner",
    "Common",
    "Subclass behavior is restricted.",
    "For a method, final means subclasses cannot override it."
  ),
  createQuestion(
    "Language Basics",
    "What does the final keyword mean for a class?",
    "Beginner",
    "Common",
    "Inheritance is blocked.",
    "For a class, final means it cannot be extended."
  ),
  createQuestion(
    "Language Basics",
    "What does the abstract keyword mean?",
    "Beginner",
    "Common",
    "Incomplete type or incomplete method.",
    "abstract marks a class that cannot be instantiated directly or a method that has no body and must be implemented by a subclass."
  ),
  createQuestion(
    "Language Basics",
    "What does the main() method do?",
    "Beginner",
    "Common",
    "This is the normal entry point of an app.",
    "main() is the standard entry point for a Java application. The JVM starts execution there."
  ),
  createQuestion(
    "Language Basics",
    "Why is the main() method static?",
    "Intermediate",
    "Common",
    "The JVM must call it without creating an object first.",
    "main() is static so the JVM can call it directly without creating an instance of the class."
  ),
  createQuestion(
    "Language Basics",
    "What is the void type?",
    "Beginner",
    "Common",
    "No value comes back.",
    "void means a method does not return a value."
  ),
  createQuestion(
    "Language Basics",
    "What is a variable in Java?",
    "Beginner",
    "Very Common",
    "Named storage with a declared type.",
    "A variable is a named storage location that holds data of a specific type."
  ),
  createQuestion(
    "Language Basics",
    "What is the difference between local, instance, and static variables?",
    "Beginner",
    "Common",
    "Where they live and who owns them matters.",
    "Local variables exist inside methods. Instance variables belong to each object. Static variables belong to the class and are shared by all instances."
  ),
  createQuestion(
    "Language Basics",
    "What are Java primitive data types?",
    "Beginner",
    "Very Common",
    "There are eight.",
    "The primitive types are byte, short, int, long, float, double, char, and boolean."
  ),
  createQuestion(
    "Language Basics",
    "What is the difference between primitive types and reference types?",
    "Beginner",
    "Very Common",
    "Values directly versus references to objects.",
    "Primitive types store simple values directly. Reference types store references to objects, arrays, or other non-primitive values."
  ),
  createQuestion(
    "Language Basics",
    "What is the difference between primitive types and wrapper classes?",
    "Beginner",
    "Very Common",
    "Objects can be used in collections and generics.",
    "Primitive types hold raw values directly. Wrapper classes such as Integer and Boolean wrap those values in objects."
  ),
  createQuestion(
    "Language Basics",
    "What is autoboxing in Java?",
    "Beginner",
    "Common",
    "Primitive to wrapper conversion happens automatically.",
    "Autoboxing is the automatic conversion of a primitive value into its corresponding wrapper object, such as int to Integer."
  ),
  createQuestion(
    "Language Basics",
    "What is unboxing in Java?",
    "Beginner",
    "Common",
    "Wrapper to primitive conversion.",
    "Unboxing is the automatic conversion of a wrapper object into its primitive value, such as Integer to int."
  ),
  createQuestion(
    "Language Basics",
    "What is type casting in Java?",
    "Beginner",
    "Common",
    "Changing the viewed type or converting a value.",
    "Type casting means converting a value or reference from one type to another, either automatically or with an explicit cast."
  ),
  createQuestion(
    "Language Basics",
    "What is implicit casting?",
    "Beginner",
    "Occasional",
    "Small to large compatible types.",
    "Implicit casting, also called widening conversion, happens automatically when Java can safely convert a smaller type to a larger compatible type."
  ),
  createQuestion(
    "Language Basics",
    "What is explicit casting?",
    "Beginner",
    "Common",
    "You write the target type yourself.",
    "Explicit casting, also called narrowing conversion, is when the programmer manually converts a value to a smaller or less specific type."
  ),
  createQuestion(
    "Language Basics",
    "What is the difference between == and equals() for objects?",
    "Beginner",
    "Very Common",
    "Reference identity versus logical equality.",
    "== checks whether two references point to the same object. equals() checks logical equality based on the class's implementation."
  ),
  createQuestion(
    "Language Basics",
    "What are command-line arguments in Java?",
    "Beginner",
    "Occasional",
    "They arrive in main().",
    "Command-line arguments are values passed when launching a Java program. They are received as the String[] parameter of main()."
  ),
  createQuestion(
    "Language Basics",
    "What is the this keyword in Java?",
    "Beginner",
    "Very Common",
    "It refers to the current object.",
    "this is a reference to the current object. It is used to access instance members or disambiguate fields from parameters."
  ),
  createQuestion(
    "Language Basics",
    "What is the super keyword in Java?",
    "Beginner",
    "Common",
    "It refers to the parent class part of an object.",
    "super refers to the immediate parent class. It is used to call parent constructors or access parent methods and fields."
  ),
  createQuestion(
    "Language Basics",
    "Can you use this() and super() together in the same constructor call chain position?",
    "Intermediate",
    "Rare",
    "Only one can be first.",
    "No. A constructor can call either this() or super() as its first statement, but not both."
  ),

  createQuestion(
    "Strings",
    "What is a String in Java?",
    "Beginner",
    "Very Common",
    "It is an object representing text.",
    "A String is an object that represents a sequence of characters."
  ),
  createQuestion(
    "Strings",
    "Why are Strings immutable in Java?",
    "Intermediate",
    "Very Common",
    "Think safety, pooling, and reliable behavior.",
    "Strings are immutable so they can be shared safely, cached in the string pool, used reliably as map keys, and handled more securely."
  ),
  createQuestion(
    "Strings",
    "What is the string pool?",
    "Intermediate",
    "Common",
    "It is a JVM optimization for string reuse.",
    "The string pool is a special area where the JVM stores reusable string literals so identical literal values can share the same String object."
  ),
  createQuestion(
    "Strings",
    "What is the difference between String, StringBuilder, and StringBuffer?",
    "Beginner",
    "Very Common",
    "Immutability and thread safety are the two contrasts.",
    "String is immutable. StringBuilder is mutable and not synchronized, so it is usually faster. StringBuffer is mutable and synchronized, so it is thread-safe but usually slower."
  ),
  createQuestion(
    "Strings",
    "When should you use StringBuilder instead of String?",
    "Beginner",
    "Common",
    "Repeated modification is the clue.",
    "Use StringBuilder when you need to build or modify text many times, because it avoids creating many temporary String objects."
  ),
  createQuestion(
    "Strings",
    "What happens when you concatenate Strings with + in a loop?",
    "Intermediate",
    "Common",
    "Repeated new objects are the problem.",
    "Repeated concatenation with + in a loop can create many temporary String objects, which is less efficient than using StringBuilder."
  ),
  createQuestion(
    "Strings",
    "What does the intern() method do on a String?",
    "Advanced",
    "Rare",
    "It relates to the string pool.",
    "intern() returns a pooled version of the string. If an equal string already exists in the pool, it returns that reference; otherwise it adds the string to the pool."
  ),
  createQuestion(
    "Strings",
    "Why can Strings be used safely as HashMap keys?",
    "Intermediate",
    "Common",
    "Immutability matters most.",
    "Strings are immutable, so their hash code and logical value do not change after creation. That makes them safe and stable as map keys."
  ),
  createQuestion(
    "Strings",
    "What is the difference between equals() and equalsIgnoreCase() on String?",
    "Beginner",
    "Common",
    "Case sensitivity is the point.",
    "equals() compares exact content including case. equalsIgnoreCase() compares text while ignoring case differences."
  ),
  createQuestion(
    "Strings",
    "Is String a primitive type in Java?",
    "Beginner",
    "Common",
    "It looks special but it is still an object.",
    "No. String is a class, not a primitive type."
  ),

  createQuestion(
    "Arrays & Collections",
    "What is an array in Java?",
    "Beginner",
    "Very Common",
    "Fixed size and same element type.",
    "An array is an object that stores a fixed number of elements of the same type."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the difference between an array and ArrayList?",
    "Beginner",
    "Very Common",
    "Fixed size versus dynamic resizing.",
    "An array has a fixed size and can store primitives directly. ArrayList is a resizable collection of objects and provides more convenient methods."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the Java Collections Framework?",
    "Beginner",
    "Very Common",
    "Think common interfaces plus implementations.",
    "The Java Collections Framework is a set of interfaces and classes used to store and work with groups of objects, such as List, Set, Map, and Queue."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the difference between List, Set, and Map?",
    "Beginner",
    "Very Common",
    "Ordering, duplicates, and key-value storage.",
    "List stores ordered elements and allows duplicates. Set stores unique elements. Map stores key-value pairs and does not allow duplicate keys."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the difference between ArrayList and LinkedList?",
    "Beginner",
    "Very Common",
    "Array-backed versus node-based.",
    "ArrayList is backed by a dynamic array and is usually faster for random access. LinkedList stores elements as linked nodes and is better suited to frequent insertions or removals in the middle."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is a HashMap?",
    "Beginner",
    "Very Common",
    "Key-value pairs with hashing.",
    "HashMap is a Map implementation that stores key-value pairs and uses hashing for fast average-case lookup, insertion, and removal."
  ),
  createQuestion(
    "Arrays & Collections",
    "How does a HashMap work internally at a high level?",
    "Intermediate",
    "Common",
    "Hash code, bucket, then equality check.",
    "HashMap uses the key's hash code to choose a bucket. Inside that bucket it uses equals() to find the exact key and then reads or writes the associated value."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is a collision in HashMap?",
    "Intermediate",
    "Common",
    "Different keys can land in the same bucket.",
    "A collision happens when different keys produce the same bucket location in a HashMap. The map then has to keep multiple entries in that bucket."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is a HashSet?",
    "Beginner",
    "Common",
    "Think uniqueness and hashing.",
    "HashSet is a Set implementation that stores unique elements and uses hashing internally for fast average-case operations."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is a TreeMap?",
    "Beginner",
    "Common",
    "Sorted keys are the defining trait.",
    "TreeMap is a Map implementation that keeps keys sorted according to their natural order or a provided Comparator."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is a TreeSet?",
    "Beginner",
    "Occasional",
    "It is the sorted sibling of HashSet.",
    "TreeSet is a Set implementation that stores unique elements in sorted order."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the difference between HashMap and TreeMap?",
    "Beginner",
    "Common",
    "Think ordering and performance trade-offs.",
    "HashMap does not guarantee ordering and is usually faster for lookup. TreeMap keeps keys sorted but typically has slower operations because it is tree-based."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the difference between HashSet and TreeSet?",
    "Beginner",
    "Occasional",
    "Ordering and performance again.",
    "HashSet stores unique elements without guaranteed order and is usually faster. TreeSet stores unique elements in sorted order."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the difference between Comparable and Comparator?",
    "Beginner",
    "Very Common",
    "Inside the class versus external comparison rule.",
    "Comparable defines a natural ordering inside the class through compareTo(). Comparator defines an external ordering in a separate object through compare()."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is an Iterator in Java?",
    "Beginner",
    "Common",
    "A standard way to walk through a collection.",
    "An Iterator is an object used to traverse a collection one element at a time."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the difference between Iterator and ListIterator?",
    "Intermediate",
    "Occasional",
    "ListIterator can go both ways and modify more flexibly.",
    "Iterator can move forward through a collection. ListIterator works on lists and can move forward and backward, replace elements, and add elements."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is ConcurrentModificationException?",
    "Intermediate",
    "Common",
    "Structural changes during iteration are the trigger.",
    "ConcurrentModificationException is usually thrown when a collection is structurally modified while it is being iterated using a fail-fast iterator."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the difference between fail-fast and fail-safe iteration?",
    "Advanced",
    "Occasional",
    "One notices interference, one works on a safe view.",
    "Fail-fast iterators throw an exception when they detect structural changes during iteration. Fail-safe style iterators iterate over a separate copy or safe structure and avoid failing immediately."
  ),
  createQuestion(
    "Arrays & Collections",
    "Can a HashMap have null keys and null values?",
    "Beginner",
    "Common",
    "One null key is allowed.",
    "Yes. HashMap allows one null key and multiple null values."
  ),
  createQuestion(
    "Arrays & Collections",
    "Can a Hashtable have null keys or null values?",
    "Intermediate",
    "Occasional",
    "It is stricter than HashMap.",
    "No. Hashtable does not allow null keys or null values."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the difference between HashMap and Hashtable?",
    "Intermediate",
    "Common",
    "Think legacy class, synchronization, and null handling.",
    "HashMap is not synchronized and allows nulls. Hashtable is synchronized, older, and does not allow null keys or values."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the load factor in HashMap?",
    "Advanced",
    "Occasional",
    "It controls when resizing happens.",
    "The load factor is a threshold that helps decide when the map should resize. A higher load factor uses space more efficiently but may increase collisions."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is rehashing in HashMap?",
    "Advanced",
    "Occasional",
    "It happens after a resize.",
    "Rehashing is the process of redistributing existing entries into a larger bucket structure after the map grows."
  ),
  createQuestion(
    "Arrays & Collections",
    "Why should equals() and hashCode() usually be overridden together?",
    "Intermediate",
    "Very Common",
    "Collections rely on both contracts together.",
    "If two objects are equal according to equals(), they must produce the same hash code. Overriding one without the other breaks the behavior of hash-based collections."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the contract of equals() in Java?",
    "Intermediate",
    "Common",
    "Think consistency and symmetry.",
    "equals() should be reflexive, symmetric, transitive, consistent, and return false when compared with null."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the contract of hashCode() in Java?",
    "Intermediate",
    "Common",
    "Equal objects must have equal hash codes.",
    "If two objects are equal according to equals(), they must return the same hashCode(). A hash code should also stay consistent while the object state used in equality does not change."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is an immutable collection?",
    "Beginner",
    "Occasional",
    "It cannot be structurally changed after creation.",
    "An immutable collection is a collection whose contents cannot be added to, removed from, or replaced after it is created."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the difference between Collections.unmodifiableList() and an actually immutable list?",
    "Advanced",
    "Rare",
    "One is just a read-only view.",
    "Collections.unmodifiableList() creates a read-only wrapper around another list. If the original list changes, the view reflects those changes. A truly immutable list cannot change at all."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is a Queue in Java?",
    "Beginner",
    "Occasional",
    "Think ordered processing, often FIFO.",
    "A Queue is a collection used to hold elements before processing, often in first-in, first-out order."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is a Deque in Java?",
    "Intermediate",
    "Occasional",
    "Double-ended queue.",
    "A Deque is a double-ended queue that supports adding and removing elements from both the front and the back."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is the difference between peek(), poll(), and remove() on queue-like collections?",
    "Intermediate",
    "Rare",
    "Empty-queue behavior distinguishes them.",
    "peek() reads the head without removing it and returns null if empty. poll() removes and returns the head or null if empty. remove() removes and returns the head but throws an exception if empty."
  ),

  createQuestion(
    "Generics & Types",
    "What are generics in Java?",
    "Beginner",
    "Very Common",
    "They let code work with types safely.",
    "Generics let classes, interfaces, and methods work with parameterized types so type checks happen at compile time."
  ),
  createQuestion(
    "Generics & Types",
    "Why are generics useful?",
    "Beginner",
    "Common",
    "Focus on type safety and fewer casts.",
    "Generics improve type safety, reduce the need for explicit casts, and make APIs clearer about what types they expect."
  ),
  createQuestion(
    "Generics & Types",
    "What is type erasure in Java generics?",
    "Intermediate",
    "Common",
    "Generic type details mostly disappear at runtime.",
    "Type erasure means generic type information is mostly removed at compile time, so the generated bytecode uses ordinary classes and casts where needed."
  ),
  createQuestion(
    "Generics & Types",
    "Can you use primitive types as generic type arguments?",
    "Beginner",
    "Common",
    "Wrappers are required.",
    "No. Generics work with reference types, so you use wrapper classes such as Integer instead of primitives like int."
  ),
  createQuestion(
    "Generics & Types",
    "What is a bounded type parameter?",
    "Intermediate",
    "Occasional",
    "A generic type can be restricted to certain kinds of types.",
    "A bounded type parameter limits which types can be used as a generic argument, such as T extends Number."
  ),
  createQuestion(
    "Generics & Types",
    "What does <?> mean in Java generics?",
    "Intermediate",
    "Common",
    "Unknown type argument.",
    "<?> is an unbounded wildcard. It means the code can work with a generic type of some unknown reference type."
  ),
  createQuestion(
    "Generics & Types",
    "What is the difference between <? extends T> and <? super T>?",
    "Advanced",
    "Occasional",
    "One is for reading from producers, one for writing to consumers.",
    "<?> extends T means an unknown subtype of T and is useful when reading values as T. <? super T> means an unknown supertype of T and is useful when writing T values into the structure."
  ),
  createQuestion(
    "Generics & Types",
    "What does PECS mean in Java generics?",
    "Advanced",
    "Occasional",
    "Producer Extends, Consumer Super.",
    "PECS stands for Producer Extends, Consumer Super. If a structure produces T values, use extends. If it consumes T values, use super."
  ),
  createQuestion(
    "Generics & Types",
    "Can static fields use a class's generic type parameter?",
    "Advanced",
    "Rare",
    "Static members belong to the class, not each type instance.",
    "No. Static members belong to the class itself, so they cannot rely on an instance-specific generic type parameter."
  ),
  createQuestion(
    "Generics & Types",
    "What is a generic method?",
    "Intermediate",
    "Occasional",
    "The method itself declares its own type parameter.",
    "A generic method declares its own type parameters so it can work with different types independently of the class's type parameters."
  ),
  createQuestion(
    "Generics & Types",
    "What is an enum in Java?",
    "Beginner",
    "Common",
    "Fixed set of named constants.",
    "An enum is a special Java type used to represent a fixed set of named constants."
  ),
  createQuestion(
    "Generics & Types",
    "Can enums have fields and methods?",
    "Intermediate",
    "Occasional",
    "They are more powerful than plain constants.",
    "Yes. Enums are full classes, so they can have fields, constructors, and methods."
  ),
  createQuestion(
    "Generics & Types",
    "What is an annotation in Java?",
    "Beginner",
    "Occasional",
    "Metadata, not normal business data.",
    "An annotation is metadata attached to code elements such as classes, methods, or fields."
  ),
  createQuestion(
    "Generics & Types",
    "What is the difference between marker, single-value, and normal annotations?",
    "Advanced",
    "Rare",
    "These are forms of annotation usage.",
    "A marker annotation has no elements, a single-value annotation mainly uses a value element, and a normal annotation can define multiple named elements."
  ),
  createQuestion(
    "Generics & Types",
    "What is var in Java?",
    "Beginner",
    "Occasional",
    "Local variable type inference, not dynamic typing.",
    "var lets the compiler infer the type of a local variable from its initializer. The type is still fixed at compile time."
  ),

  createQuestion(
    "Exceptions",
    "What is exception handling in Java?",
    "Beginner",
    "Very Common",
    "It is about dealing with runtime problems gracefully.",
    "Exception handling is the mechanism Java provides to detect, propagate, and handle abnormal situations during program execution."
  ),
  createQuestion(
    "Exceptions",
    "What is the difference between checked and unchecked exceptions?",
    "Beginner",
    "Very Common",
    "Compiler enforcement is the main difference.",
    "Checked exceptions must be handled or declared at compile time. Unchecked exceptions are subclasses of RuntimeException and are not enforced by the compiler."
  ),
  createQuestion(
    "Exceptions",
    "What is try-catch-finally?",
    "Beginner",
    "Very Common",
    "One block tries, one handles, one cleans up.",
    "try contains risky code, catch handles exceptions, and finally runs cleanup code whether an exception happens or not."
  ),
  createQuestion(
    "Exceptions",
    "What is the difference between throw and throws?",
    "Beginner",
    "Very Common",
    "One actually raises an exception, one declares it.",
    "throw is used to explicitly throw an exception object. throws is used in a method signature to declare exceptions the method may pass to the caller."
  ),
  createQuestion(
    "Exceptions",
    "What is a NullPointerException?",
    "Beginner",
    "Very Common",
    "Using null as if it were an object.",
    "NullPointerException happens when code tries to use a null reference as though it points to an object."
  ),
  createQuestion(
    "Exceptions",
    "What is the difference between Exception and Error?",
    "Intermediate",
    "Common",
    "Recoverable program issues versus serious system problems.",
    "Exception represents conditions applications may want to handle. Error represents serious problems, such as JVM failures, that applications usually should not try to recover from."
  ),
  createQuestion(
    "Exceptions",
    "Can you catch multiple exception types in one catch block?",
    "Beginner",
    "Common",
    "Java supports multi-catch.",
    "Yes. Java allows multi-catch syntax, such as catch (IOException | SQLException e)."
  ),
  createQuestion(
    "Exceptions",
    "What is stack trace information in an exception?",
    "Beginner",
    "Common",
    "It records the call path to the error.",
    "A stack trace shows the sequence of method calls that led to the point where the exception was thrown."
  ),
  createQuestion(
    "Exceptions",
    "What is try-with-resources?",
    "Intermediate",
    "Common",
    "Automatic cleanup of closeable resources.",
    "try-with-resources is a try statement that automatically closes resources such as streams when execution leaves the block."
  ),
  createQuestion(
    "Exceptions",
    "What interface must a resource implement to be used with try-with-resources?",
    "Intermediate",
    "Occasional",
    "Closeable family.",
    "A resource must implement AutoCloseable, or a subtype such as Closeable."
  ),
  createQuestion(
    "Exceptions",
    "What is exception propagation?",
    "Intermediate",
    "Common",
    "Unhandled exceptions move up the call stack.",
    "Exception propagation means an exception that is not handled in one method is passed up to its caller, and continues upward until it is handled or the program ends."
  ),
  createQuestion(
    "Exceptions",
    "Can finally always be expected to run?",
    "Advanced",
    "Rare",
    "There are unusual cases where it may not.",
    "finally usually runs, but not in every situation. For example, if the JVM crashes or the process is forcibly terminated, it may not execute."
  ),
  createQuestion(
    "Exceptions",
    "What is a custom exception in Java?",
    "Intermediate",
    "Occasional",
    "You define your own exception type for domain-specific failures.",
    "A custom exception is an application-defined exception class used to represent a specific kind of problem in your own code."
  ),
  createQuestion(
    "Exceptions",
    "When would you create a checked custom exception instead of an unchecked one?",
    "Advanced",
    "Occasional",
    "Think recoverable conditions versus programming errors.",
    "Use a checked exception when callers are expected to handle a recoverable condition. Use an unchecked exception when the problem is usually a programming error or invalid state."
  ),
  createQuestion(
    "Exceptions",
    "What is the difference between final, finally, and finalize()?",
    "Beginner",
    "Common",
    "Three similar words, three different meanings.",
    "final is a keyword for restriction, finally is a block used with exception handling, and finalize() was an old cleanup method on Object that is deprecated and should not be relied on."
  ),

  createQuestion(
    "I/O & Files",
    "What is the difference between a byte stream and a character stream in Java?",
    "Beginner",
    "Common",
    "Binary data versus text data.",
    "Byte streams work with raw binary data using InputStream and OutputStream. Character streams work with text using Reader and Writer."
  ),
  createQuestion(
    "I/O & Files",
    "What is the difference between InputStream and Reader?",
    "Beginner",
    "Common",
    "One handles bytes, one handles characters.",
    "InputStream reads raw bytes. Reader reads characters and is meant for text."
  ),
  createQuestion(
    "I/O & Files",
    "What is the difference between OutputStream and Writer?",
    "Beginner",
    "Common",
    "The output version of the same idea.",
    "OutputStream writes raw bytes. Writer writes characters and is meant for text output."
  ),
  createQuestion(
    "I/O & Files",
    "What is buffering in Java I/O?",
    "Intermediate",
    "Occasional",
    "It reduces expensive low-level operations.",
    "Buffering means temporarily storing data in memory so reads and writes can happen in larger chunks, which usually improves performance."
  ),
  createQuestion(
    "I/O & Files",
    "What is the purpose of BufferedReader?",
    "Beginner",
    "Occasional",
    "Reading text efficiently, often line by line.",
    "BufferedReader wraps another Reader to reduce I/O calls and provides convenient methods such as readLine()."
  ),
  createQuestion(
    "I/O & Files",
    "What is the purpose of BufferedWriter?",
    "Beginner",
    "Occasional",
    "Efficient text writing.",
    "BufferedWriter wraps another Writer to buffer text output, which usually improves performance."
  ),
  createQuestion(
    "I/O & Files",
    "What is the difference between File and Path in Java?",
    "Intermediate",
    "Occasional",
    "Modern NIO prefers Path.",
    "File is the older file abstraction in java.io. Path is the newer and more flexible NIO representation used with the Files utility class."
  ),
  createQuestion(
    "I/O & Files",
    "What is the Files class in NIO?",
    "Intermediate",
    "Occasional",
    "Utility methods for path-based file work.",
    "Files is a utility class in java.nio.file that provides methods for reading, writing, copying, moving, and inspecting files and directories."
  ),
  createQuestion(
    "I/O & Files",
    "What is NIO in Java?",
    "Intermediate",
    "Occasional",
    "New I/O with more scalable APIs.",
    "NIO stands for New I/O. It introduced buffers, channels, selectors, and modern file APIs to improve flexibility and scalability."
  ),
  createQuestion(
    "I/O & Files",
    "What is the difference between FileInputStream and BufferedInputStream?",
    "Intermediate",
    "Rare",
    "Raw stream versus buffered wrapper.",
    "FileInputStream reads bytes directly from a file. BufferedInputStream wraps another input stream and buffers reads to reduce expensive underlying calls."
  ),
  createQuestion(
    "I/O & Files",
    "Why is character encoding important in Java I/O?",
    "Intermediate",
    "Occasional",
    "Bytes must be interpreted correctly as text.",
    "Character encoding matters because text is stored as bytes. If code reads or writes text using the wrong encoding, characters can be corrupted."
  ),
  createQuestion(
    "I/O & Files",
    "What is serialization in Java?",
    "Intermediate",
    "Common",
    "Turning object state into a storable or transferable form.",
    "Serialization is the process of converting an object's state into a byte stream so it can be stored or transmitted."
  ),
  createQuestion(
    "I/O & Files",
    "What marker interface enables standard Java serialization?",
    "Intermediate",
    "Occasional",
    "It has no methods.",
    "The Serializable interface enables standard Java object serialization."
  ),
  createQuestion(
    "I/O & Files",
    "What does the transient keyword do during serialization?",
    "Intermediate",
    "Occasional",
    "It excludes selected fields from serialized state.",
    "transient marks a field so it is skipped during standard Java serialization."
  ),
  createQuestion(
    "I/O & Files",
    "What is serialVersionUID?",
    "Advanced",
    "Rare",
    "Version compatibility for serialized classes.",
    "serialVersionUID is a version identifier used during deserialization to check that the sender and receiver have compatible versions of a serialized class."
  ),

  createQuestion(
    "Concurrency",
    "What is a thread?",
    "Beginner",
    "Very Common",
    "A path of execution within a process.",
    "A thread is a lightweight unit of execution inside a process. Multiple threads in the same JVM can run different tasks."
  ),
  createQuestion(
    "Concurrency",
    "What is the lifecycle of a thread in Java?",
    "Beginner",
    "Common",
    "New, runnable, blocked or waiting, then terminated.",
    "A thread is created in the new state, becomes runnable, may move through blocked or waiting states, and eventually ends in the terminated state."
  ),
  createQuestion(
    "Concurrency",
    "What is the difference between extending Thread and implementing Runnable?",
    "Beginner",
    "Very Common",
    "Task definition versus thread type inheritance.",
    "Extending Thread ties your code to a Thread subclass. Implementing Runnable separates the task from the thread that runs it and is usually more flexible."
  ),
  createQuestion(
    "Concurrency",
    "What is synchronization in Java?",
    "Beginner",
    "Very Common",
    "Controlling access to shared data.",
    "Synchronization is the mechanism used to control concurrent access to shared data so only one thread at a time can execute a protected section when needed."
  ),
  createQuestion(
    "Concurrency",
    "What does the synchronized keyword do?",
    "Beginner",
    "Very Common",
    "It uses a monitor lock.",
    "synchronized makes a method or block require a monitor lock before execution, helping protect shared state from race conditions."
  ),
  createQuestion(
    "Concurrency",
    "What is a race condition?",
    "Intermediate",
    "Common",
    "The result depends on timing between threads.",
    "A race condition happens when multiple threads access shared data without proper coordination and the final result depends on execution timing."
  ),
  createQuestion(
    "Concurrency",
    "What is a critical section?",
    "Intermediate",
    "Occasional",
    "Code that touches shared mutable state.",
    "A critical section is a part of code that accesses shared resources and must be protected from unsafe concurrent access."
  ),
  createQuestion(
    "Concurrency",
    "What is the difference between process and thread?",
    "Beginner",
    "Common",
    "Separate program versus execution unit inside it.",
    "A process is an independent running program with its own memory space. A thread is a smaller execution unit inside a process and shares the process memory."
  ),
  createQuestion(
    "Concurrency",
    "What is the volatile keyword?",
    "Intermediate",
    "Common",
    "Visibility, not full mutual exclusion.",
    "volatile tells the JVM that reads and writes of a field should be visible across threads without caching stale values. It does not make compound actions atomic."
  ),
  createQuestion(
    "Concurrency",
    "What problem does volatile solve well?",
    "Intermediate",
    "Occasional",
    "Simple visibility of a changing flag is a common example.",
    "volatile is useful when one thread updates a field and other threads only need to see the latest value, such as a stop flag."
  ),
  createQuestion(
    "Concurrency",
    "What is atomicity in concurrent programming?",
    "Intermediate",
    "Occasional",
    "All or nothing operation.",
    "Atomicity means an operation happens as one indivisible step, so other threads cannot observe it half-done."
  ),
  createQuestion(
    "Concurrency",
    "What is visibility in concurrent programming?",
    "Intermediate",
    "Occasional",
    "One thread's update must become visible to others.",
    "Visibility means when one thread changes shared data, other threads can reliably see the updated value."
  ),
  createQuestion(
    "Concurrency",
    "What is deadlock?",
    "Intermediate",
    "Very Common",
    "Threads wait on each other forever.",
    "Deadlock happens when two or more threads each hold resources the others need, so none of them can continue."
  ),
  createQuestion(
    "Concurrency",
    "What is livelock?",
    "Advanced",
    "Rare",
    "Threads keep reacting but do not make progress.",
    "Livelock happens when threads are active and responding to each other, but they still fail to make useful progress."
  ),
  createQuestion(
    "Concurrency",
    "What is starvation in concurrent systems?",
    "Advanced",
    "Occasional",
    "A thread never gets a fair chance to proceed.",
    "Starvation happens when a thread is repeatedly denied the resources or CPU time it needs, so it waits indefinitely while other threads continue."
  ),
  createQuestion(
    "Concurrency",
    "What is the difference between sleep() and wait()?",
    "Intermediate",
    "Common",
    "Lock behavior is the big difference.",
    "sleep() pauses the current thread for a time and does not release any lock it holds. wait() pauses a thread until notified and releases the monitor lock for that object."
  ),
  createQuestion(
    "Concurrency",
    "What is the difference between wait() and notify()?",
    "Intermediate",
    "Common",
    "One suspends, one wakes.",
    "wait() makes a thread pause and release the object's monitor. notify() wakes one waiting thread on that same object monitor."
  ),
  createQuestion(
    "Concurrency",
    "What does notifyAll() do?",
    "Intermediate",
    "Occasional",
    "It wakes every waiter on that monitor.",
    "notifyAll() wakes all threads waiting on the same object's monitor so they can compete to continue."
  ),
  createQuestion(
    "Concurrency",
    "Why must wait(), notify(), and notifyAll() be used from synchronized code?",
    "Advanced",
    "Occasional",
    "The current thread must own the monitor.",
    "These methods depend on the object's monitor, so the current thread must hold that monitor before calling them. Otherwise the JVM throws IllegalMonitorStateException."
  ),
  createQuestion(
    "Concurrency",
    "What is ExecutorService?",
    "Beginner",
    "Very Common",
    "A higher-level way to manage threads.",
    "ExecutorService is a framework interface for submitting tasks and managing a pool of worker threads."
  ),
  createQuestion(
    "Concurrency",
    "Why is ExecutorService usually preferred over creating threads manually?",
    "Intermediate",
    "Common",
    "Thread reuse and lifecycle management matter.",
    "ExecutorService is usually preferred because it reuses threads, separates task submission from thread management, and provides shutdown and coordination features."
  ),
  createQuestion(
    "Concurrency",
    "What is a thread pool?",
    "Beginner",
    "Common",
    "Reuse a set of worker threads.",
    "A thread pool is a group of reusable worker threads that execute submitted tasks instead of creating a new thread for each task."
  ),
  createQuestion(
    "Concurrency",
    "What is Callable in Java concurrency?",
    "Intermediate",
    "Occasional",
    "It is like Runnable but can return a value.",
    "Callable is a task interface similar to Runnable, but it can return a result and throw checked exceptions."
  ),
  createQuestion(
    "Concurrency",
    "What is Future in Java concurrency?",
    "Intermediate",
    "Occasional",
    "Represents a result that may arrive later.",
    "Future represents the result of an asynchronous computation. It lets you check completion, wait for the result, or cancel the task."
  ),
  createQuestion(
    "Concurrency",
    "What is the difference between Runnable and Callable?",
    "Beginner",
    "Common",
    "Return value and checked exceptions are the key differences.",
    "Runnable does not return a value and cannot throw checked exceptions. Callable returns a value and can throw checked exceptions."
  ),
  createQuestion(
    "Concurrency",
    "What is ReentrantLock?",
    "Advanced",
    "Occasional",
    "An explicit lock API with more control than synchronized.",
    "ReentrantLock is a lock implementation that gives more control than synchronized, including tryLock(), timed lock attempts, and separate condition objects."
  ),
  createQuestion(
    "Concurrency",
    "What does it mean that a lock is reentrant?",
    "Advanced",
    "Occasional",
    "The same thread can acquire it again.",
    "A reentrant lock allows the thread that already holds the lock to acquire it again without deadlocking itself."
  ),
  createQuestion(
    "Concurrency",
    "What is a semaphore?",
    "Advanced",
    "Rare",
    "It controls access using permits, not ownership by a single thread.",
    "A semaphore controls access to a limited number of permits, allowing only a fixed number of threads to proceed at the same time."
  ),
  createQuestion(
    "Concurrency",
    "What is CountDownLatch?",
    "Advanced",
    "Occasional",
    "Threads wait until a counter reaches zero.",
    "CountDownLatch is a synchronization utility that lets one or more threads wait until a set of operations has completed."
  ),
  createQuestion(
    "Concurrency",
    "What is CyclicBarrier?",
    "Advanced",
    "Rare",
    "A group of threads waits for each other at a common point.",
    "CyclicBarrier lets a fixed number of threads wait until all of them reach the same barrier point, after which they can continue together."
  ),
  createQuestion(
    "Concurrency",
    "What is a concurrent collection in Java?",
    "Intermediate",
    "Occasional",
    "Collections designed for multi-threaded access.",
    "A concurrent collection is a collection implementation built to support safe or efficient concurrent access, such as ConcurrentHashMap."
  ),
  createQuestion(
    "Concurrency",
    "What is ConcurrentHashMap?",
    "Intermediate",
    "Common",
    "A map built for concurrent access.",
    "ConcurrentHashMap is a thread-safe map designed for concurrent reads and updates without locking the whole map for every operation."
  ),
  createQuestion(
    "Concurrency",
    "What is lock-free programming?",
    "Advanced",
    "Rare",
    "Progress without using traditional locks.",
    "Lock-free programming uses atomic operations and coordination techniques so threads can make progress without relying on mutual-exclusion locks."
  ),
  createQuestion(
    "Concurrency",
    "What are virtual threads in Java?",
    "Intermediate",
    "Occasional",
    "Project Loom made lightweight threads practical.",
    "Virtual threads are lightweight threads managed by the Java runtime, allowing applications to run very large numbers of concurrent tasks more cheaply than platform threads."
  ),

  createQuestion(
    "Functional Java",
    "What is a lambda expression?",
    "Beginner",
    "Very Common",
    "A short way to provide behavior as data.",
    "A lambda expression is a compact way to represent an anonymous function that can be passed around as an object-like behavior."
  ),
  createQuestion(
    "Functional Java",
    "What is a functional interface?",
    "Beginner",
    "Very Common",
    "Exactly one abstract method.",
    "A functional interface is an interface that has exactly one abstract method, making it suitable for lambda expressions and method references."
  ),
  createQuestion(
    "Functional Java",
    "What is the @FunctionalInterface annotation?",
    "Intermediate",
    "Occasional",
    "It documents intent and lets the compiler check the rule.",
    "The @FunctionalInterface annotation tells the compiler the interface is intended to be functional and should have exactly one abstract method."
  ),
  createQuestion(
    "Functional Java",
    "What is a method reference in Java?",
    "Intermediate",
    "Common",
    "A shorter way to point at an existing method.",
    "A method reference is a shorthand form of a lambda that refers directly to an existing method, such as System.out::println."
  ),
  createQuestion(
    "Functional Java",
    "What is the Stream API?",
    "Beginner",
    "Very Common",
    "Processing collections declaratively.",
    "The Stream API lets you process sequences of data using operations such as filter, map, and collect in a concise and expressive style."
  ),
  createQuestion(
    "Functional Java",
    "What is the difference between intermediate and terminal stream operations?",
    "Intermediate",
    "Common",
    "One builds the pipeline, one finishes it.",
    "Intermediate operations such as map() and filter() produce another stream. Terminal operations such as collect() and forEach() finish the pipeline and produce a result or side effect."
  ),
  createQuestion(
    "Functional Java",
    "What does map() do in a stream?",
    "Beginner",
    "Common",
    "Transform each element.",
    "map() transforms each element in the stream into another value."
  ),
  createQuestion(
    "Functional Java",
    "What does filter() do in a stream?",
    "Beginner",
    "Common",
    "Keep only elements that pass a condition.",
    "filter() keeps only the elements that match a given predicate."
  ),
  createQuestion(
    "Functional Java",
    "What does reduce() do in a stream?",
    "Intermediate",
    "Occasional",
    "Combine many values into one.",
    "reduce() combines the elements of a stream into a single result, such as a sum or combined object."
  ),
  createQuestion(
    "Functional Java",
    "What does collect() do in a stream?",
    "Intermediate",
    "Common",
    "Turn the stream result into a container or summary.",
    "collect() gathers stream elements into a result such as a list, set, map, or summary structure."
  ),
  createQuestion(
    "Functional Java",
    "What is lazy evaluation in streams?",
    "Intermediate",
    "Occasional",
    "Work is delayed until needed.",
    "Lazy evaluation means intermediate stream operations do not run immediately. They execute only when a terminal operation is invoked."
  ),
  createQuestion(
    "Functional Java",
    "What is the difference between stream() and parallelStream()?",
    "Intermediate",
    "Occasional",
    "Sequential versus parallel processing.",
    "stream() processes elements sequentially by default. parallelStream() allows the work to be split and processed in parallel, which may or may not improve performance."
  ),
  createQuestion(
    "Functional Java",
    "What is Optional in Java?",
    "Beginner",
    "Common",
    "A container for presence or absence of a value.",
    "Optional is a container object that may hold a non-null value or may be empty, helping make missing values more explicit."
  ),
  createQuestion(
    "Functional Java",
    "Why can Optional be useful?",
    "Intermediate",
    "Occasional",
    "It makes absence explicit instead of silently returning null.",
    "Optional can make APIs clearer by representing absence explicitly and encouraging callers to handle missing values instead of ignoring possible nulls."
  ),
  createQuestion(
    "Functional Java",
    "What is the difference between orElse() and orElseGet() on Optional?",
    "Advanced",
    "Rare",
    "Eager versus lazy fallback creation.",
    "orElse() always evaluates its fallback value. orElseGet() calls a supplier only if the Optional is empty."
  ),
  createQuestion(
    "Functional Java",
    "What are the main built-in functional interfaces in java.util.function?",
    "Intermediate",
    "Occasional",
    "Think Supplier, Consumer, Function, Predicate.",
    "Common built-in functional interfaces include Supplier, Consumer, Function, Predicate, UnaryOperator, and BinaryOperator."
  ),
  createQuestion(
    "Functional Java",
    "What is a Predicate in Java?",
    "Beginner",
    "Occasional",
    "Input in, boolean out.",
    "Predicate is a functional interface that takes a value and returns a boolean, usually for testing conditions."
  ),
  createQuestion(
    "Functional Java",
    "What is a Function in Java?",
    "Beginner",
    "Occasional",
    "Input in, transformed output out.",
    "Function is a functional interface that takes one input and returns a transformed result."
  ),
  createQuestion(
    "Functional Java",
    "What is a Consumer in Java?",
    "Beginner",
    "Occasional",
    "Takes input but returns nothing useful.",
    "Consumer is a functional interface that accepts a value and performs an action without returning a result."
  ),
  createQuestion(
    "Functional Java",
    "What is a Supplier in Java?",
    "Beginner",
    "Occasional",
    "No input, just produce a value.",
    "Supplier is a functional interface that provides a value without taking any input."
  ),

  createQuestion(
    "Memory & Runtime",
    "What is garbage collection in Java?",
    "Beginner",
    "Very Common",
    "Automatic memory cleanup for unreachable objects.",
    "Garbage collection is the JVM process that frees memory used by objects that are no longer reachable by the running program."
  ),
  createQuestion(
    "Memory & Runtime",
    "How does garbage collection work at a high level?",
    "Intermediate",
    "Common",
    "Reachability is the central idea.",
    "The garbage collector identifies objects that can no longer be reached from live references and reclaims the memory used by those objects."
  ),
  createQuestion(
    "Memory & Runtime",
    "What is the difference between minor and major garbage collection?",
    "Advanced",
    "Occasional",
    "Young generation versus older memory areas.",
    "Minor garbage collection mainly targets the young generation, where short-lived objects are common. Major or full collection deals with older memory areas and is usually more expensive."
  ),
  createQuestion(
    "Memory & Runtime",
    "What is the young generation in JVM memory management?",
    "Advanced",
    "Occasional",
    "New objects usually start here.",
    "The young generation is the memory area where most new objects are allocated. It is optimized for objects that die quickly."
  ),
  createQuestion(
    "Memory & Runtime",
    "What is the old generation in JVM memory management?",
    "Advanced",
    "Occasional",
    "Longer-lived objects end up here.",
    "The old generation stores objects that have survived multiple garbage collection cycles and are expected to live longer."
  ),
  createQuestion(
    "Memory & Runtime",
    "What is a memory leak in Java if garbage collection exists?",
    "Intermediate",
    "Common",
    "Objects stay reachable even though they are no longer useful.",
    "A memory leak in Java happens when code keeps references to objects that are no longer needed, preventing the garbage collector from reclaiming them."
  ),
  createQuestion(
    "Memory & Runtime",
    "What is OutOfMemoryError?",
    "Intermediate",
    "Common",
    "The JVM cannot allocate more memory for a request.",
    "OutOfMemoryError occurs when the JVM cannot provide enough memory for an allocation and cannot recover enough free memory."
  ),
  createQuestion(
    "Memory & Runtime",
    "What is StackOverflowError?",
    "Beginner",
    "Common",
    "Too many nested calls on the thread stack.",
    "StackOverflowError happens when a thread uses more stack memory than available, often because of deep or infinite recursion."
  ),
  createQuestion(
    "Memory & Runtime",
    "What is the difference between stack overflow and out of memory?",
    "Intermediate",
    "Occasional",
    "One is call-stack exhaustion, the other is broader allocation failure.",
    "Stack overflow means a thread ran out of stack space. Out of memory means the JVM could not allocate required memory, usually on the heap or another memory area."
  ),
  createQuestion(
    "Memory & Runtime",
    "What is reflection in Java?",
    "Intermediate",
    "Common",
    "Inspect and use classes dynamically at runtime.",
    "Reflection is the ability to inspect classes, methods, fields, and constructors at runtime and sometimes access or invoke them dynamically."
  ),
  createQuestion(
    "Memory & Runtime",
    "Why can reflection be powerful but costly?",
    "Advanced",
    "Occasional",
    "Flexibility comes with overhead and weaker compile-time guarantees.",
    "Reflection is powerful because it allows dynamic behavior, but it can reduce performance, weaken encapsulation, and remove some compile-time safety."
  ),
  createQuestion(
    "Memory & Runtime",
    "What is the Object class in Java?",
    "Beginner",
    "Common",
    "The root of the class hierarchy.",
    "Object is the top-level superclass of almost all Java classes. Every non-primitive type ultimately inherits from it."
  ),
  createQuestion(
    "Memory & Runtime",
    "What are some important methods of the Object class?",
    "Beginner",
    "Common",
    "equals, hashCode, toString, getClass, wait/notify are the usual ones.",
    "Important Object methods include equals(), hashCode(), toString(), getClass(), wait(), notify(), and notifyAll()."
  ),
  createQuestion(
    "Memory & Runtime",
    "What does toString() do in Java?",
    "Beginner",
    "Common",
    "Text representation of an object.",
    "toString() returns a string representation of an object, usually for debugging or display."
  ),
  createQuestion(
    "Memory & Runtime",
    "What does getClass() do in Java?",
    "Beginner",
    "Occasional",
    "It reveals the runtime class object.",
    "getClass() returns the runtime Class object that represents the real type of the current object."
  ),
  createQuestion(
    "Memory & Runtime",
    "Does Java have destructors like C++?",
    "Beginner",
    "Common",
    "Automatic memory management changes the model.",
    "No. Java does not have destructors in the C++ sense because memory is managed by garbage collection."
  ),
  createQuestion(
    "Memory & Runtime",
    "What is finalize() and why is it discouraged?",
    "Advanced",
    "Occasional",
    "It was an old cleanup hook with unreliable timing.",
    "finalize() was an old method the garbage collector could call before reclaiming an object, but it is discouraged and deprecated because it is unpredictable and inefficient."
  ),
  createQuestion(
    "Memory & Runtime",
    "What are strong, weak, and soft references in Java at a high level?",
    "Advanced",
    "Rare",
    "Different reference strengths affect GC behavior.",
    "A strong reference keeps an object alive normally. A weak reference allows collection when no strong references remain. A soft reference is weaker than strong but may be kept longer when memory is available."
  ),
  createQuestion(
    "Memory & Runtime",
    "What is reactive programming in general terms?",
    "Advanced",
    "Rare",
    "Think asynchronous data flows and event-driven reactions.",
    "Reactive programming is a style where programs react to streams of events or data changes, often in an asynchronous and non-blocking way."
  ),
  createQuestion(
    "Memory & Runtime",
    "What are some common garbage collection algorithm ideas used in JVMs?",
    "Advanced",
    "Rare",
    "Marking, sweeping, copying, and compacting are the big families.",
    "Common garbage collection ideas include mark-and-sweep, copying collection, and mark-compact. Modern JVM collectors combine these ideas in different ways."
  ),

  createQuestion(
    "Modern Java",
    "What is the java.time API?",
    "Beginner",
    "Occasional",
    "Modern date and time handling introduced in Java 8.",
    "The java.time API is the modern date and time library in Java. It provides clearer, safer, and more immutable types than the older Date and Calendar APIs."
  ),
  createQuestion(
    "Modern Java",
    "Why is java.time generally preferred over Date and Calendar?",
    "Intermediate",
    "Occasional",
    "Think immutability and cleaner API design.",
    "java.time is generally preferred because its types are immutable, easier to understand, and less error-prone than the older date and time APIs."
  ),
  createQuestion(
    "Modern Java",
    "What is a record in Java?",
    "Intermediate",
    "Occasional",
    "Concise syntax for immutable data carriers.",
    "A record is a compact way to declare an immutable data carrier class whose main purpose is to hold values."
  ),
  createQuestion(
    "Modern Java",
    "When are records useful in Java?",
    "Intermediate",
    "Occasional",
    "Simple data-holding types are the target.",
    "Records are useful when a class mainly stores data and you want concise syntax with automatically provided methods such as accessors, equals(), hashCode(), and toString()."
  ),
  createQuestion(
    "Modern Java",
    "What is a sealed class in Java?",
    "Advanced",
    "Rare",
    "Restrict which types may extend a base type.",
    "A sealed class restricts which classes or interfaces are allowed to extend or implement it."
  ),
  createQuestion(
    "Modern Java",
    "What problem do sealed classes solve?",
    "Advanced",
    "Rare",
    "They make inheritance boundaries explicit.",
    "Sealed classes help model closed hierarchies where only a known set of subtypes should exist, which improves clarity and type safety."
  ),
  createQuestion(
    "Modern Java",
    "What is a text block in Java?",
    "Intermediate",
    "Rare",
    "Multi-line string literal support.",
    "A text block is a multi-line string literal that makes long or formatted text easier to write and read in source code."
  ),
  createQuestion(
    "Modern Java",
    "What is switch expression syntax in modern Java?",
    "Intermediate",
    "Rare",
    "switch can now return a value directly.",
    "Modern switch expressions allow switch to produce a value directly, often with a cleaner arrow syntax and fewer fall-through mistakes."
  ),
  createQuestion(
    "Modern Java",
    "What is pattern matching in modern Java at a high level?",
    "Advanced",
    "Rare",
    "Combining type checks with binding.",
    "Pattern matching lets Java combine a type test with variable extraction in a more concise form, reducing manual casting."
  ),
  createQuestion(
    "Modern Java",
    "What is the module system in Java?",
    "Advanced",
    "Rare",
    "Named modules with explicit dependencies.",
    "The Java module system lets applications organize code into named modules with explicit dependencies and controlled exports."
  ),
  createQuestion(
    "Language Basics",
    "What is the difference between static and instance methods?",
    "Beginner",
    "Very Common",
    "Class-level behavior versus object-level behavior.",
    "A static method belongs to the class and can be called without creating an object. An instance method belongs to an object and can use that object's state."
  ),
  createQuestion(
    "Language Basics",
    "Can a static method access instance fields directly?",
    "Beginner",
    "Common",
    "A static method has no current object unless you give it one.",
    "No. A static method cannot directly access instance fields or instance methods because it does not run on a specific object unless one is provided."
  ),
  createQuestion(
    "Language Basics",
    "What is a static block in Java?",
    "Intermediate",
    "Common",
    "Class-level initialization that runs once.",
    "A static block is a block of code that runs when the class is initialized. It is commonly used for class-level setup."
  ),
  createQuestion(
    "Language Basics",
    "Why is final often used for constants in Java?",
    "Beginner",
    "Common",
    "The value should not change after initialization.",
    "final is used for constants because it prevents reassignment after initialization, which makes the value stable and predictable."
  ),
  createQuestion(
    "Language Basics",
    "What does native mean in Java?",
    "Intermediate",
    "Common",
    "The implementation lives outside Java source.",
    "native marks a method whose implementation is written in another language, usually C or C++, and linked to Java through native interfaces."
  ),
  createQuestion(
    "Language Basics",
    "When might the native keyword be used?",
    "Advanced",
    "Occasional",
    "Think platform-specific or low-level integration.",
    "native may be used when Java code needs to call platform-specific code, low-level system APIs, or existing non-Java libraries."
  ),
  createQuestion(
    "OOP & Design",
    "How does encapsulation improve maintainability?",
    "Intermediate",
    "Common",
    "Hiding internals reduces ripple effects.",
    "Encapsulation improves maintainability by hiding internal details behind a clear interface. That means internal code can change without forcing callers to change."
  ),
  createQuestion(
    "OOP & Design",
    "How does polymorphism help reduce coupling?",
    "Intermediate",
    "Common",
    "Code can depend on abstractions instead of concrete classes.",
    "Polymorphism reduces coupling because code can work with an interface or base type instead of depending on a specific implementation."
  ),
  createQuestion(
    "OOP & Design",
    "Why is abstraction useful in API design?",
    "Intermediate",
    "Common",
    "It keeps callers focused on what something does, not how.",
    "Abstraction is useful in API design because it exposes only the important behavior and hides unnecessary implementation details, making APIs simpler and easier to change safely."
  ),
  createQuestion(
    "OOP & Design",
    "What is the difference between association, aggregation, and composition?",
    "Intermediate",
    "Common",
    "These are all object relationships, but ownership differs.",
    "Association is a general relationship between objects. Aggregation is a weaker whole-part relationship where parts can exist independently. Composition is a stronger whole-part relationship where parts are owned by the whole and usually share its lifetime."
  ),
  createQuestion(
    "OOP & Design",
    "What is association in object-oriented design?",
    "Beginner",
    "Common",
    "A general connection between objects.",
    "Association means one object knows about or uses another object. It is the broadest kind of relationship between objects."
  ),
  createQuestion(
    "OOP & Design",
    "What is aggregation in object-oriented design?",
    "Intermediate",
    "Common",
    "A whole-part relationship with independent parts.",
    "Aggregation is a relationship where one object groups other objects, but those part objects can still exist independently of the whole."
  ),
  createQuestion(
    "OOP & Design",
    "What is composition in object-oriented design?",
    "Intermediate",
    "Common",
    "A stronger whole-part relationship with ownership.",
    "Composition is a relationship where one object strongly owns other objects, and the owned objects are usually tied to the lifetime of the whole."
  ),
  createQuestion(
    "OOP & Design",
    "What is the difference between an abstract class and an interface after Java 8?",
    "Intermediate",
    "Common",
    "Default methods narrowed the gap, but the types still serve different roles.",
    "An interface is mainly a contract and can now include default and static methods. An abstract class can hold instance state, constructors, and shared base implementation."
  ),
  createQuestion(
    "OOP & Design",
    "When is an abstract class a better choice than an interface?",
    "Intermediate",
    "Common",
    "Shared state and reusable base logic are the clue.",
    "An abstract class is a better choice when related subclasses need shared fields, shared constructor logic, or common implementation that belongs in one base type."
  ),
  createQuestion(
    "OOP & Design",
    "Why can't abstract classes be instantiated directly?",
    "Beginner",
    "Common",
    "They may represent incomplete behavior.",
    "Abstract classes cannot be instantiated directly because they may contain abstract methods or represent incomplete templates meant to be finished by subclasses."
  ),
  createQuestion(
    "OOP & Design",
    "How does dynamic binding enable runtime polymorphism?",
    "Intermediate",
    "Common",
    "The method is chosen from the real object type at runtime.",
    "Dynamic binding enables runtime polymorphism because the JVM chooses the overridden instance method based on the actual object type, not just the reference type."
  ),
  createQuestion(
    "Memory & Runtime",
    "Why are equals(), hashCode(), and toString() commonly overridden together with domain objects?",
    "Intermediate",
    "Common",
    "Think logical equality, collections, and debugging.",
    "They are commonly overridden so objects can define logical equality, behave correctly in hash-based collections, and provide a useful text representation for debugging."
  ),
  createQuestion(
    "Memory & Runtime",
    "What is the default behavior of equals() in Object?",
    "Beginner",
    "Common",
    "It checks identity unless overridden.",
    "The default equals() implementation in Object compares references, so it checks whether two references point to the same object."
  ),
  createQuestion(
    "Strings",
    "Why does the string pool improve memory usage?",
    "Intermediate",
    "Common",
    "Duplicate literals can share one object.",
    "The string pool improves memory usage by allowing identical string literals to share a single String object instead of creating separate copies."
  ),
  createQuestion(
    "Strings",
    "What is the difference between creating a String with a literal and with new String()?",
    "Intermediate",
    "Common",
    "Pooling behavior is the key distinction.",
    "A string literal can reuse a pooled String object. new String() always creates a new String object, even if an equal pooled string already exists."
  ),
  createQuestion(
    "Arrays & Collections",
    "When should you use Comparable instead of Comparator?",
    "Intermediate",
    "Common",
    "Natural ordering versus alternate orderings.",
    "Use Comparable when a class has one natural ordering that belongs inside the class. Use Comparator when you need different orderings or cannot change the class."
  ),
  createQuestion(
    "Arrays & Collections",
    "What must compareTo() and compare() return semantically?",
    "Intermediate",
    "Occasional",
    "Negative, zero, and positive values indicate ordering.",
    "They should return a negative value when the first item is smaller, zero when they are considered equal for ordering, and a positive value when the first item is larger."
  ),
  createQuestion(
    "Generics & Types",
    "Why does type erasure exist in Java generics?",
    "Advanced",
    "Common",
    "Backward compatibility with older Java bytecode is central here.",
    "Type erasure exists largely so generics could be added without breaking compatibility with older JVMs and non-generic bytecode."
  ),
  createQuestion(
    "Generics & Types",
    "Why do generics reduce ClassCastException risk?",
    "Beginner",
    "Common",
    "They move type checks to compile time.",
    "Generics reduce ClassCastException risk because they let the compiler catch type mismatches before the program runs."
  ),
  createQuestion(
    "Generics & Types",
    "What is an unbounded wildcard in Java generics?",
    "Beginner",
    "Common",
    "This is the meaning of <?>.",
    "An unbounded wildcard is <?>. It means the code can work with a generic type whose exact type argument is unknown."
  ),
  createQuestion(
    "Generics & Types",
    "Why is <? extends T> good for reading but not writing?",
    "Advanced",
    "Common",
    "The exact subtype is unknown.",
    "With <? extends T>, you know elements are some subtype of T, so reading as T is safe. Writing is unsafe because the exact subtype expected by the structure is unknown."
  ),
  createQuestion(
    "Generics & Types",
    "Why is <? super T> useful for writing values?",
    "Advanced",
    "Common",
    "Any supertype container can safely accept T values.",
    "With <? super T>, the structure is known to accept T or its subtypes as inserted values, so writing T values is safe."
  ),
  createQuestion(
    "Generics & Types",
    "What is the difference between a bounded type parameter and a wildcard?",
    "Advanced",
    "Occasional",
    "One names a type parameter, the other describes an unknown one.",
    "A bounded type parameter declares and names a generic type variable with restrictions, such as <T extends Number>. A wildcard describes an unknown existing type argument, such as <? extends Number>."
  ),
  createQuestion(
    "Functional Java",
    "Why do lambdas work only with functional interfaces?",
    "Intermediate",
    "Common",
    "The compiler needs one target abstract method.",
    "Lambdas work with functional interfaces because the compiler needs exactly one abstract method to know what method signature the lambda should implement."
  ),
  createQuestion(
    "Functional Java",
    "Can a functional interface contain default or static methods?",
    "Intermediate",
    "Common",
    "The rule is about abstract methods only.",
    "Yes. A functional interface may contain default and static methods. It is still functional as long as it has exactly one abstract method."
  ),
  createQuestion(
    "Functional Java",
    "What problem do streams solve compared with manual loops?",
    "Intermediate",
    "Common",
    "Think declarative data processing.",
    "Streams make data processing more declarative by focusing on what transformations and filters should happen instead of manually controlling every loop step."
  ),
  createQuestion(
    "Functional Java",
    "What is the difference between map() and flatMap()?",
    "Intermediate",
    "Common",
    "One transforms each element, the other also flattens nested results.",
    "map() turns each input element into one output element. flatMap() turns each input element into a stream-like result and then flattens those results into one stream."
  ),
  createQuestion(
    "Functional Java",
    "When can parallel streams be a bad fit?",
    "Advanced",
    "Occasional",
    "Small workloads, shared mutable state, and ordering costs are clues.",
    "Parallel streams can be a bad fit for small workloads, operations with shared mutable state, tasks with high coordination overhead, or pipelines where preserving order is expensive."
  ),
  createQuestion(
    "Concurrency",
    "What is the difference between concurrency and parallelism?",
    "Beginner",
    "Common",
    "Tasks making progress versus tasks running at the same time.",
    "Concurrency means multiple tasks can make progress during the same period. Parallelism means multiple tasks actually run at the same time on different processing resources."
  ),
  createQuestion(
    "Concurrency",
    "Why is implementing Runnable often preferred to extending Thread?",
    "Beginner",
    "Common",
    "It separates the job from the thread object.",
    "Implementing Runnable is often preferred because it separates the task from the thread mechanism and avoids using up the class's single inheritance slot."
  ),
  createQuestion(
    "Concurrency",
    "Why does volatile not make compound operations thread-safe?",
    "Intermediate",
    "Common",
    "Visibility is not the same as atomicity.",
    "volatile guarantees visibility of individual reads and writes, but compound operations like increment involve multiple steps and can still race."
  ),
  createQuestion(
    "Concurrency",
    "What is the difference between volatile and synchronized?",
    "Intermediate",
    "Common",
    "One mainly gives visibility, the other also gives mutual exclusion.",
    "volatile mainly guarantees visibility of variable updates across threads. synchronized provides both visibility and mutual exclusion around a protected block or method."
  ),
  createQuestion(
    "Concurrency",
    "What happens if ExecutorService is never shut down?",
    "Intermediate",
    "Common",
    "Worker threads may keep resources alive.",
    "If ExecutorService is never shut down, its threads may keep running or stay alive, which can waste resources and stop an application from ending cleanly."
  ),
  createQuestion(
    "Concurrency",
    "What is the difference between shutdown() and shutdownNow() on ExecutorService?",
    "Intermediate",
    "Common",
    "Graceful stop versus attempted immediate interruption.",
    "shutdown() stops accepting new tasks and lets submitted tasks finish. shutdownNow() tries to stop active tasks quickly, usually by interrupting worker threads."
  ),
  createQuestion(
    "Concurrency",
    "What is thread safety in Java?",
    "Beginner",
    "Common",
    "Correct behavior under concurrent access.",
    "Thread safety means code behaves correctly when multiple threads use it at the same time without corrupting shared state."
  ),
  createQuestion(
    "Concurrency",
    "What is an atomic class in java.util.concurrent.atomic?",
    "Intermediate",
    "Occasional",
    "Think lock-free updates for single values.",
    "An atomic class provides thread-safe operations on a single value using atomic CPU-level style operations instead of traditional locks."
  ),
  createQuestion(
    "Concurrency",
    "When would AtomicInteger be preferred over synchronized increment logic?",
    "Intermediate",
    "Occasional",
    "Simple shared counters are a common case.",
    "AtomicInteger is often preferred for simple shared counters because it provides efficient atomic updates without the overhead of a synchronized block around a plain int."
  ),
  createQuestion(
    "Concurrency",
    "What is the interruption mechanism in Java threads?",
    "Intermediate",
    "Common",
    "A cooperative cancellation signal.",
    "Interruption is a cooperative way to ask a thread to stop what it is doing. One thread sets the interrupted status of another, and the target thread is expected to check and respond."
  ),
  createQuestion(
    "Concurrency",
    "What is InterruptedException?",
    "Intermediate",
    "Common",
    "Blocking methods use it to report interruption.",
    "InterruptedException is thrown when a thread is interrupted while waiting, sleeping, or otherwise blocked in an interruptible operation."
  ),
  createQuestion(
    "Memory & Runtime",
    "Why does Java still need garbage collection if objects go out of scope?",
    "Intermediate",
    "Common",
    "Scope rules alone do not reclaim shared heap memory safely.",
    "Java still needs garbage collection because heap objects can outlive a method scope and may be shared by many references. The JVM must determine when they are truly unreachable."
  ),
  createQuestion(
    "Memory & Runtime",
    "Why can garbage collection not prevent all memory problems?",
    "Intermediate",
    "Common",
    "Reachable but useless objects are the catch.",
    "Garbage collection reclaims unreachable objects, but it cannot help if code keeps references to objects that are no longer useful. That is how Java programs can still leak memory."
  ),
  createQuestion(
    "I/O & Files",
    "What is deserialization in Java?",
    "Beginner",
    "Common",
    "It is the reverse of serialization.",
    "Deserialization is the process of reconstructing an object from a serialized byte stream."
  ),
  createQuestion(
    "I/O & Files",
    "Why can serialization be risky or undesirable in some designs?",
    "Advanced",
    "Occasional",
    "Think versioning, security, and hidden coupling.",
    "Serialization can be risky because it creates versioning problems, can expose security concerns, and may tightly couple stored data to internal class structure."
  ),
  createQuestion(
    "Exceptions",
    "Why are custom exceptions useful in application code?",
    "Intermediate",
    "Common",
    "They make error meaning more specific.",
    "Custom exceptions are useful because they let code describe domain-specific failures clearly instead of throwing only generic exception types."
  ),
  createQuestion(
    "Arrays & Collections",
    "What is FIFO behavior in a queue?",
    "Beginner",
    "Common",
    "First in, first out.",
    "FIFO means the first element added to the queue is the first one removed."
  ),
  createQuestion(
    "Arrays & Collections",
    "When is a deque more useful than a queue?",
    "Intermediate",
    "Occasional",
    "You need both ends of the structure.",
    "A deque is more useful when elements need to be added or removed from both the front and the back, such as in stack-like and queue-like use cases."
  ),
  createQuestion(
    "Arrays & Collections",
    "Why are fail-fast iterators useful?",
    "Intermediate",
    "Common",
    "They help surface unsafe modification early.",
    "Fail-fast iterators are useful because they quickly reveal unsafe structural modification during iteration instead of silently producing unpredictable behavior."
  ),
  createQuestion(
    "Arrays & Collections",
    "Why is an unmodifiable collection not always truly immutable?",
    "Intermediate",
    "Common",
    "The wrapped backing collection may still change.",
    "An unmodifiable collection is not always truly immutable because it may be only a read-only view over another collection that can still change elsewhere."
  ),
  createQuestion(
    "Modern Java",
    "What is the benefit of records for immutable data modeling?",
    "Intermediate",
    "Occasional",
    "Less boilerplate for value-like types.",
    "Records reduce boilerplate for immutable data carriers by automatically providing accessors and common methods such as equals(), hashCode(), and toString()."
  ),
  createQuestion(
    "Modern Java",
    "What makes java.time types easier to reason about than older date APIs?",
    "Intermediate",
    "Occasional",
    "Immutability and clearer domain types matter most.",
    "java.time types are easier to reason about because they are immutable, use clearer domain-specific types, and avoid much of the confusing mutability of older date APIs."
  )
];
