export const questions = [
  {
    id: "core-1",
    topic: "Core Java / Fundamentals",
    prompt: "What is Java?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Think: language + platform + runtime model.",
    answer:
      "Java is a high-level, object-oriented programming language and platform. Java code is compiled into bytecode, which runs on the JVM, so the same program can run on many operating systems."
  },
  {
    id: "core-2",
    topic: "Core Java / Fundamentals",
    prompt: "What are the main features of Java?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Focus on portability, OOP, memory management, and ecosystem.",
    answer:
      "Common features of Java are platform independence, object-oriented design, automatic garbage collection, strong type checking, rich standard libraries, multithreading support, and a large ecosystem."
  },
  {
    id: "core-3",
    topic: "Core Java / Fundamentals",
    prompt: "What are the differences between JDK, JRE, and JVM?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "One runs bytecode, one is the runtime bundle, one is for developers.",
    answer:
      "The JVM runs Java bytecode. The JRE is the JVM plus the libraries needed to run Java programs. The JDK is the JRE plus developer tools like the compiler, debugger, and javadoc."
  },
  {
    id: "core-4",
    topic: "Core Java / Fundamentals",
    prompt: "How does the JVM work?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "Think: class loading, bytecode execution, memory management.",
    answer:
      "The JVM loads compiled class files, verifies the bytecode, creates runtime memory areas, and executes the code. It can interpret bytecode or compile hot code paths to native machine code with JIT."
  },
  {
    id: "core-5",
    topic: "Core Java / Fundamentals",
    prompt: "What is JIT compilation?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "Hot code paths are important here.",
    answer:
      "JIT stands for Just-In-Time compilation. The JVM watches which bytecode is executed often and compiles those hot parts into native machine code at runtime to improve performance."
  },
  {
    id: "core-6",
    topic: "Core Java / Fundamentals",
    prompt: "What is a classloader?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "It is responsible for bringing class definitions into the JVM.",
    answer:
      "A classloader loads Java classes into the JVM at runtime. It finds class definitions, reads the bytecode, and hands it to the JVM so the class can be linked and used."
  },
  {
    id: "core-7",
    topic: "Core Java / Fundamentals",
    prompt: "What is the difference between stack and heap memory?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Method calls vs objects.",
    answer:
      "The stack stores method call frames, local variables, and temporary execution data for each thread. The heap stores objects and arrays. Stack memory is tied to method execution, while heap memory is shared."
  },
  {
    id: "core-8",
    topic: "Core Java / Fundamentals",
    prompt: "Is Java pass-by-value or pass-by-reference?",
    difficulty: "Intermediate",
    likelihood: "Very Common",
    hint: "Even object references are copied by value.",
    answer:
      "Java is always pass-by-value. When you pass an object, Java copies the reference value, not the object itself. That means a method can change the object's state, but it cannot replace the caller's reference."
  },
  {
    id: "oop-1",
    topic: "OOP Concepts",
    prompt: "What is object-oriented programming?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Think in terms of objects with state and behavior.",
    answer:
      "Object-oriented programming is a way of designing programs around objects. Each object combines state, stored in fields, with behavior, defined by methods."
  },
  {
    id: "oop-2",
    topic: "OOP Concepts",
    prompt: "What are the four pillars of OOP?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "The standard four terms.",
    answer:
      "The four pillars are encapsulation, inheritance, polymorphism, and abstraction."
  },
  {
    id: "oop-3",
    topic: "OOP Concepts",
    prompt: "What is encapsulation?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Data hiding is the key idea.",
    answer:
      "Encapsulation means keeping data and the methods that work on that data together inside a class, while controlling access to the internal state through methods and access modifiers."
  },
  {
    id: "oop-4",
    topic: "OOP Concepts",
    prompt: "What is inheritance?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "One class reuses or extends another.",
    answer:
      "Inheritance lets one class reuse and extend the behavior of another class. A subclass inherits fields and methods from a superclass and can add new behavior or override existing behavior."
  },
  {
    id: "oop-5",
    topic: "OOP Concepts",
    prompt: "What is polymorphism?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Same interface, different behavior.",
    answer:
      "Polymorphism means the same method call can behave differently depending on the actual object involved. In Java, this is most commonly seen when a superclass or interface reference points to a subclass object."
  },
  {
    id: "oop-6",
    topic: "OOP Concepts",
    prompt: "What is abstraction?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Hide details, expose essentials.",
    answer:
      "Abstraction means exposing only the important parts of an object or system while hiding unnecessary implementation details. In Java, this is commonly done with interfaces and abstract classes."
  },
  {
    id: "oop-7",
    topic: "OOP Concepts",
    prompt: "What is the difference between method overloading and method overriding?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Same class vs subclass.",
    answer:
      "Overloading means using the same method name with different parameter lists in the same class. Overriding means a subclass provides its own implementation of a method already defined in a superclass."
  },
  {
    id: "lang-1",
    topic: "Java Language Basics",
    prompt: "What is a constructor?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "It runs when an object is created.",
    answer:
      "A constructor is a special method used to initialize an object when it is created. It has the same name as the class and does not have a return type."
  },
  {
    id: "lang-2",
    topic: "Java Language Basics",
    prompt: "What are access modifiers and how do they differ?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "public, protected, private, and package-private.",
    answer:
      "Access modifiers control visibility. public is visible everywhere. private is visible only inside the same class. protected is visible in the same package and in subclasses. Package-private is visible only in the same package."
  },
  {
    id: "lang-3",
    topic: "Java Language Basics",
    prompt: "What other modifiers exist in Java (static, final, etc.)?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "Think about meaning, not just names.",
    answer:
      "Common modifiers include static, final, abstract, synchronized, transient, volatile, and native. For example, static belongs to the class, final prevents change or extension, abstract marks incomplete implementations."
  },
  {
    id: "lang-4",
    topic: "Java Language Basics",
    prompt: "What is the purpose of the main() method?",
    difficulty: "Beginner",
    likelihood: "Common",
    hint: "Program entry point.",
    answer:
      "The main() method is the entry point for a standard Java application. The JVM looks for it when starting the program and begins execution there."
  },
  {
    id: "lang-5",
    topic: "Java Language Basics",
    prompt: "What is the void type?",
    difficulty: "Beginner",
    likelihood: "Common",
    hint: "It means no return value.",
    answer:
      "void means a method does not return any value."
  },
  {
    id: "lang-6",
    topic: "Java Language Basics",
    prompt: "What are variables in Java?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Named storage with a type.",
    answer:
      "A variable is a named storage location for data. In Java, every variable has a declared type, such as int, double, or String."
  },
  {
    id: "lang-7",
    topic: "Java Language Basics",
    prompt: "What are Java data types?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Two big groups.",
    answer:
      "Java data types are split into primitive types and reference types. Primitive types include values like int, double, char, and boolean. Reference types include objects, arrays, and classes."
  },
  {
    id: "lang-8",
    topic: "Java Language Basics",
    prompt: "What is the difference between primitive types and wrapper classes?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Think raw values vs objects.",
    answer:
      "Primitive types store raw values directly, such as int or boolean. Wrapper classes, such as Integer and Boolean, wrap those values inside objects so they can be used where objects are required."
  },
  {
    id: "lang-9",
    topic: "Java Language Basics",
    prompt: "What is the difference between primitive types and objects?",
    difficulty: "Beginner",
    likelihood: "Common",
    hint: "Memory and behavior both matter.",
    answer:
      "Primitive types hold simple values directly and are not objects. Objects are instances of classes, are accessed through references, and can contain fields and methods."
  },
  {
    id: "str-1",
    topic: "Strings",
    prompt: "What is a String in Java?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "It is not a primitive.",
    answer:
      "A String in Java is an object that represents a sequence of characters."
  },
  {
    id: "str-2",
    topic: "Strings",
    prompt: "Why are Strings immutable?",
    difficulty: "Intermediate",
    likelihood: "Very Common",
    hint: "Think safety, caching, and reuse.",
    answer:
      "Strings are immutable so they can be shared safely, used reliably as map keys, stored in the string pool, and handled more securely. Once a String is created, its value cannot change."
  },
  {
    id: "str-3",
    topic: "Strings",
    prompt: "What is the difference between == and equals()?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Reference vs logical equality.",
    answer:
      "== compares whether two references point to the same object, or compares primitive values directly. equals() compares logical equality, meaning whether two objects represent the same value."
  },
  {
    id: "str-4",
    topic: "Strings",
    prompt: "What is the difference between String, StringBuilder, and StringBuffer?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "Immutable vs mutable, synchronized vs not.",
    answer:
      "String is immutable. StringBuilder is mutable and usually faster for building strings in single-threaded code. StringBuffer is also mutable, but it is synchronized, so it is safer for multithreading."
  },
  {
    id: "col-1",
    topic: "Collections & Data Structures",
    prompt: "What is the Java Collections Framework?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Interfaces + implementations + utilities.",
    answer:
      "The Java Collections Framework is a set of interfaces, classes, and algorithms for storing and working with groups of objects. It includes structures like List, Set, Map, Queue, and helper utilities."
  },
  {
    id: "col-2",
    topic: "Collections & Data Structures",
    prompt: "What is the difference between List, Set, and Map?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Order, uniqueness, key-value pairs.",
    answer:
      "A List keeps elements in order and allows duplicates. A Set stores unique elements only. A Map stores key-value pairs and uses unique keys."
  },
  {
    id: "col-3",
    topic: "Collections & Data Structures",
    prompt: "What is the difference between Array and ArrayList?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Fixed size vs resizable.",
    answer:
      "An array has a fixed size once it is created and can store primitives or objects. An ArrayList is a resizable collection class that stores objects and provides many built-in methods."
  },
  {
    id: "col-4",
    topic: "Collections & Data Structures",
    prompt: "What is the difference between ArrayList and LinkedList?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "Think memory layout and access patterns.",
    answer:
      "ArrayList is backed by a dynamic array, so indexed access is fast. LinkedList is based on linked nodes, so inserting or removing near known positions can be easier, but random access is slower."
  },
  {
    id: "col-5",
    topic: "Collections & Data Structures",
    prompt: "What is a HashMap and how does it work?",
    difficulty: "Advanced",
    likelihood: "Very Common",
    hint: "Hashing + buckets + equals.",
    answer:
      "A HashMap stores key-value pairs using hashing. It uses the key's hashCode() to choose a bucket, then uses equals() to find the correct key inside that bucket. This gives very fast average lookup times."
  },
  {
    id: "col-6",
    topic: "Collections & Data Structures",
    prompt: "What is a HashSet?",
    difficulty: "Beginner",
    likelihood: "Common",
    hint: "Think uniqueness backed by hashing.",
    answer:
      "A HashSet is a collection that stores unique elements using hashing. It does not keep insertion order and does not allow duplicates."
  },
  {
    id: "col-7",
    topic: "Collections & Data Structures",
    prompt: "What is a TreeMap?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "Sorted keys are the main point.",
    answer:
      "A TreeMap is a Map implementation that stores entries sorted by key. It usually uses a balanced tree structure, so operations are slower than HashMap on average but keys stay ordered."
  },
  {
    id: "col-8",
    topic: "Collections & Data Structures",
    prompt: "What is the difference between Comparable and Comparator?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "Inside the class vs outside the class.",
    answer:
      "Comparable defines a natural ordering inside the class itself through compareTo(). Comparator defines an external sorting rule in a separate object through compare()."
  },
  {
    id: "exc-1",
    topic: "Exception Handling",
    prompt: "What is exception handling in Java?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Think runtime error control.",
    answer:
      "Exception handling is Java's way of detecting and managing runtime errors so a program can respond in a controlled way instead of crashing immediately."
  },
  {
    id: "exc-2",
    topic: "Exception Handling",
    prompt: "What are checked vs unchecked exceptions?",
    difficulty: "Intermediate",
    likelihood: "Very Common",
    hint: "Compiler enforcement is the key difference.",
    answer:
      "Checked exceptions must be handled or declared by the method signature, and the compiler enforces this. Unchecked exceptions are subclasses of RuntimeException and do not need to be declared."
  },
  {
    id: "exc-3",
    topic: "Exception Handling",
    prompt: "What is try-catch-finally?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Risky code, handling, cleanup.",
    answer:
      "try contains code that may throw an exception. catch handles the exception if it happens. finally contains cleanup code that usually runs whether or not an exception was thrown."
  },
  {
    id: "exc-4",
    topic: "Exception Handling",
    prompt: "What is the difference between throw and throws?",
    difficulty: "Beginner",
    likelihood: "Common",
    hint: "One does it, one declares it.",
    answer:
      "throw is used to actually throw an exception object. throws is used in a method signature to declare that the method may pass certain exceptions to the caller."
  },
  {
    id: "exc-5",
    topic: "Exception Handling",
    prompt: "What is a NullPointerException?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Null reference, method or field access.",
    answer:
      "A NullPointerException happens when code tries to use a null reference as if it were a real object, for example by calling a method or accessing a field on null."
  },
  {
    id: "thr-1",
    topic: "Multithreading & Concurrency",
    prompt: "What is a thread?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Smallest unit of execution inside a process.",
    answer:
      "A thread is a path of execution inside a process. Multiple threads let a Java program do multiple tasks at the same time or appear to do so."
  },
  {
    id: "thr-2",
    topic: "Multithreading & Concurrency",
    prompt: "What is the lifecycle of a thread?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "Think new, runnable, running, waiting, terminated.",
    answer:
      "A thread is created, becomes runnable, may run, may go into waiting or blocked states, and eventually terminates when its run() method finishes."
  },
  {
    id: "thr-3",
    topic: "Multithreading & Concurrency",
    prompt: "What is synchronization?",
    difficulty: "Intermediate",
    likelihood: "Very Common",
    hint: "Control shared access to data.",
    answer:
      "Synchronization is a way to control access to shared data so that only safe thread interactions happen. It helps prevent race conditions and inconsistent state."
  },
  {
    id: "thr-4",
    topic: "Multithreading & Concurrency",
    prompt: "What does the synchronized keyword do?",
    difficulty: "Intermediate",
    likelihood: "Very Common",
    hint: "Locking plus visibility.",
    answer:
      "The synchronized keyword ensures that only one thread at a time can execute a synchronized block or method on the same monitor. It also helps make shared changes visible across threads."
  },
  {
    id: "thr-5",
    topic: "Multithreading & Concurrency",
    prompt: "What is volatile?",
    difficulty: "Advanced",
    likelihood: "Common",
    hint: "Visibility, not full thread safety.",
    answer:
      "volatile tells the JVM that a variable's latest value must be read from main memory and written back there, so updates are visible across threads. It does not make compound operations atomic."
  },
  {
    id: "thr-6",
    topic: "Multithreading & Concurrency",
    prompt: "What is deadlock?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "Two or more threads waiting forever.",
    answer:
      "Deadlock happens when two or more threads wait on each other forever because each one is holding a resource the other needs."
  },
  {
    id: "thr-7",
    topic: "Multithreading & Concurrency",
    prompt: "What is ExecutorService?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "Think thread pool management.",
    answer:
      "ExecutorService is a framework interface for managing asynchronous tasks and thread pools. Instead of creating threads manually, you submit tasks to an executor."
  },
  {
    id: "java8-1",
    topic: "Java 8+ / Functional Programming",
    prompt: "What is a lambda expression?",
    difficulty: "Beginner",
    likelihood: "Very Common",
    hint: "Short way to represent behavior.",
    answer:
      "A lambda expression is a short way to write an anonymous function in Java. It is commonly used to provide behavior to functional interfaces."
  },
  {
    id: "java8-2",
    topic: "Java 8+ / Functional Programming",
    prompt: "What is a functional interface?",
    difficulty: "Beginner",
    likelihood: "Common",
    hint: "Single abstract method.",
    answer:
      "A functional interface is an interface with exactly one abstract method. Because of that, it can be implemented with a lambda expression."
  },
  {
    id: "java8-3",
    topic: "Java 8+ / Functional Programming",
    prompt: "What is the Stream API?",
    difficulty: "Intermediate",
    likelihood: "Very Common",
    hint: "Declarative processing of collections.",
    answer:
      "The Stream API lets you process collections of data in a declarative way using operations like filter, map, sort, and collect. It helps write concise and readable data-processing code."
  },
  {
    id: "adv-1",
    topic: "Advanced Java",
    prompt: "What is reflection in Java?",
    difficulty: "Advanced",
    likelihood: "Common",
    hint: "Inspect and use classes at runtime.",
    answer:
      "Reflection is a feature that lets Java inspect classes, fields, methods, and constructors at runtime, and even invoke them dynamically."
  },
  {
    id: "adv-2",
    topic: "Advanced Java",
    prompt: "What is serialization?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "Object state to bytes.",
    answer:
      "Serialization is the process of converting an object's state into a byte stream so it can be saved, sent over a network, or restored later."
  },
  {
    id: "adv-3",
    topic: "Advanced Java",
    prompt: "Is there a destructor in Java?",
    difficulty: "Intermediate",
    likelihood: "Occasional",
    hint: "Think garbage collection instead.",
    answer:
      "Java does not have destructors like C++. Memory cleanup is handled by garbage collection. Resource cleanup is usually handled with try-with-resources or explicit close methods."
  },
  {
    id: "adv-4",
    topic: "Advanced Java",
    prompt: "What is dynamic vs static binding?",
    difficulty: "Advanced",
    likelihood: "Occasional",
    hint: "Compile time vs runtime method resolution.",
    answer:
      "Static binding happens at compile time, such as with static, private, or final methods. Dynamic binding happens at runtime, where the JVM chooses the overridden method based on the actual object type."
  },
  {
    id: "adv-5",
    topic: "Advanced Java",
    prompt: "What is garbage collection and how does it work?",
    difficulty: "Intermediate",
    likelihood: "Very Common",
    hint: "Unreachable objects are the key idea.",
    answer:
      "Garbage collection is the JVM process of freeing memory used by objects that are no longer reachable. The JVM tracks object references and removes objects that can no longer be reached by the program."
  },
  {
    id: "adv-6",
    topic: "Advanced Java",
    prompt: "What are different garbage collection algorithms?",
    difficulty: "Advanced",
    likelihood: "Occasional",
    hint: "Name a few modern collectors and their goal.",
    answer:
      "Java has several garbage collectors, such as Serial GC, Parallel GC, G1, ZGC, and Shenandoah. They mainly differ in goals like throughput, pause time, memory usage, and how much work they do concurrently."
  },
  {
    id: "adv-7",
    topic: "Advanced Java",
    prompt: "What is lock-free programming?",
    difficulty: "Advanced",
    likelihood: "Rare",
    hint: "Concurrency without traditional locks.",
    answer:
      "Lock-free programming is a style of concurrency where threads coordinate without using traditional locks. It usually relies on atomic operations such as compare-and-swap to reduce blocking."
  },
  {
    id: "adv-8",
    topic: "Advanced Java",
    prompt: "What is reactive programming?",
    difficulty: "Advanced",
    likelihood: "Occasional",
    hint: "Asynchronous streams and backpressure.",
    answer:
      "Reactive programming is a style of programming built around asynchronous data streams and non-blocking processing. It is useful when systems must handle lots of events or I/O efficiently."
  },
  {
    id: "adv-9",
    topic: "Advanced Java",
    prompt: "What are virtual threads (Project Loom)?",
    difficulty: "Advanced",
    likelihood: "Occasional",
    hint: "Much lighter than platform threads.",
    answer:
      "Virtual threads are lightweight threads introduced by Project Loom. They let Java run a very large number of concurrent tasks with much lower overhead than traditional platform threads."
  },
  {
    id: "misc-1",
    topic: "Misc / Practical",
    prompt: "What is a JAR file?",
    difficulty: "Beginner",
    likelihood: "Common",
    hint: "Think Java archive.",
    answer:
      "A JAR file is a Java Archive. It packages compiled class files, metadata, and other resources into one file so Java applications and libraries are easier to distribute."
  },
  {
    id: "misc-2",
    topic: "Misc / Practical",
    prompt: "What are the methods of the Object class?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "Think equality, string form, cloning, thread methods.",
    answer:
      "Important Object class methods include equals(), hashCode(), toString(), getClass(), clone(), wait(), notify(), and notifyAll(). These methods form the base behavior for all Java objects."
  },
  {
    id: "misc-3",
    topic: "Misc / Practical",
    prompt: "What is casting in Java?",
    difficulty: "Beginner",
    likelihood: "Common",
    hint: "Convert one type to another.",
    answer:
      "Casting is converting a value or reference from one type to another. It can be automatic, such as widening, or explicit, such as narrowing or casting object references."
  },
  {
    id: "misc-4",
    topic: "Misc / Practical",
    prompt: "What is the difference between final and const?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "One exists in Java, one does not.",
    answer:
      "Java uses final, not const. final can prevent reassignment of variables, prevent method overriding, or prevent class inheritance. const is a reserved word in Java, but it is not actually used."
  },
  {
    id: "misc-5",
    topic: "Misc / Practical",
    prompt: "What are design patterns?",
    difficulty: "Intermediate",
    likelihood: "Common",
    hint: "Reusable solutions, not finished code.",
    answer:
      "Design patterns are common, reusable solutions to recurring design problems in software. They are templates for structuring code, not copy-paste code by themselves."
  },
  {
    id: "misc-6",
    topic: "Misc / Practical",
    prompt: "How would you design a distributed system in Java?",
    difficulty: "Advanced",
    likelihood: "Occasional",
    hint: "Think services, communication, reliability, scaling.",
    answer:
      "I would start by defining the services, data flow, communication style, and failure handling. In Java, I would think about APIs, message queues, caching, persistence, scaling, and observability."
  }
];