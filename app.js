const STORAGE_KEY = "jvmastry-progress-v2";

const createSubject = (
  topic,
  concept,
  difficulty,
  likelihood,
  core,
  importance,
  pitfall,
  useCase
) => ({
  topic,
  concept,
  difficulty,
  likelihood,
  core,
  importance,
  pitfall,
  useCase
});

const subjectBlueprints = [
  createSubject("Platform Basics", "JDK, JRE, and JVM", "Beginner", "Very Common", "The JVM executes bytecode, the JRE bundles the JVM with runtime libraries, and the JDK adds development tools like javac, javadoc, and debuggers.", "Interviewers ask this to check whether you understand the split between runtime, tooling, and the virtual machine itself.", "A common mistake is saying the JVM and JDK are interchangeable or implying Java source code runs directly on the operating system.", "Bring it up when you explain how Java code is compiled, packaged, and finally executed."),
  createSubject("Platform Basics", "platform independence and bytecode", "Beginner", "Very Common", "Java is considered platform independent because source code compiles into bytecode, and each operating system runs that bytecode through its own JVM implementation.", "It is one of the fastest ways for an interviewer to see whether you understand why Java became popular for cross-platform server development.", "Candidates often overstate this by claiming Java has zero platform differences, even though native libraries, file paths, and environment setup can still vary.", "Use it when answering why Java applications can move between environments with relatively little change."),
  createSubject("Platform Basics", "the javac compilation pipeline", "Intermediate", "Common", "The javac compiler turns Java source into bytecode, performs type checking, resolves symbols, and emits .class files that the JVM can load and execute.", "It matters because strong answers connect source code, compilation, bytecode, and runtime execution instead of treating them as one black box.", "A common gap is forgetting that compilation errors are caught before runtime while other issues only appear when the JVM loads or executes classes.", "Mention it when describing build failures, type safety, or the role of compilation in Java tooling."),
  createSubject("Platform Basics", "the classpath", "Beginner", "Common", "The classpath tells the JVM and tooling where to find compiled classes and jars needed at compile time or runtime.", "Classpath problems are common in real projects, so interviewers use this topic to see whether you understand how dependencies are discovered.", "Candidates often confuse the classpath with imports, even though imports are just source-level syntax while the classpath is about locating compiled code.", "Use it when explaining dependency resolution, NoClassDefFoundError, or why a jar works in one environment but not another."),
  createSubject("Platform Basics", "the module path and JPMS", "Advanced", "Occasional", "The module path is used by the Java Platform Module System to load named modules with explicit dependencies and stronger encapsulation than the traditional classpath.", "It matters in interviews because it shows awareness of modern Java features and how modular boundaries differ from legacy jar loading.", "A common mistake is assuming modules replaced the classpath for every project; many applications still use plain classpaths successfully.", "Mention it if a role uses newer Java versions heavily or asks about encapsulation and dependency boundaries."),
  createSubject("Platform Basics", "packages and imports", "Beginner", "Common", "Packages organize classes into namespaces, while imports let source files refer to classes without always writing fully qualified names.", "This matters because it reveals whether you understand how Java structures code and avoids naming collisions across large codebases.", "People sometimes think imports load code dynamically, but they only improve source readability and have no runtime loading behavior by themselves.", "Use it when explaining project structure, naming, or how Java avoids class-name clashes."),
  createSubject("Platform Basics", "access modifiers", "Beginner", "Very Common", "Public, protected, package-private, and private control where classes, fields, and methods are visible, enforcing encapsulation boundaries.", "Interviewers use access modifiers to test whether you understand basic API design and how Java hides implementation detail.", "A common slip is mixing up protected with package-private or forgetting that top-level classes cannot be private or protected.", "Bring it up when discussing encapsulation, library design, or how you restrict mutability."),
  createSubject("Platform Basics", "the main method and static entry point", "Beginner", "Common", "The JVM looks for a public static void main(String[] args) method because it can invoke it without creating an object and can pass command-line arguments through the String array.", "It matters because it connects language syntax to how Java applications start in the runtime.", "Candidates often memorize the signature without understanding why static is required or how args are supplied.", "Use it when explaining Java application startup or command-line programs."),
  createSubject("Types & OOP", "primitive types versus reference types", "Beginner", "Very Common", "Primitive types store raw values like int and boolean, while reference types store references to objects allocated elsewhere.", "This matters because many Java questions on memory, equality, nullability, and performance depend on this distinction.", "A frequent mistake is treating references as objects themselves instead of pointers to objects managed by the JVM.", "Bring it up when discussing memory layout, null handling, or why wrappers exist."),
  createSubject("Types & OOP", "wrapper classes and autoboxing", "Beginner", "Very Common", "Wrapper classes like Integer and Boolean let primitive values behave like objects, and autoboxing and unboxing convert between the two forms automatically.", "Interviewers ask this because wrappers show up in collections, generics, null handling, and API design.", "Candidates often ignore the fact that wrappers can be null and that repeated boxing can add overhead or surprise comparisons.", "Use it when explaining why List<int> does not exist or why Integer equality can behave differently from int equality."),
  createSubject("Types & OOP", "pass-by-value in Java", "Intermediate", "Very Common", "Java is always pass-by-value. When you pass an object, Java copies the reference value, which means methods can mutate the object but cannot replace the caller's variable itself.", "This is a classic interview topic because it exposes whether someone can reason clearly about references and mutation.", "A common misconception is saying Java is pass-by-reference just because object state can be changed inside a method.", "Bring it up when an interview question involves modifying objects inside helper methods."),
  createSubject("Types & OOP", "method overloading", "Beginner", "Very Common", "Overloading means defining multiple methods with the same name but different parameter lists inside the same class.", "It matters because it shows whether you understand compile-time method resolution and API ergonomics.", "A common mistake is confusing overloading with overriding or assuming return type alone can distinguish overloaded methods.", "Use it when discussing constructors, utility APIs, or compile-time polymorphism."),
  createSubject("Types & OOP", "method overriding", "Beginner", "Very Common", "Overriding happens when a subclass provides its own implementation of an inherited method using the same signature and a compatible return type.", "Interviewers ask this to test runtime polymorphism and inheritance fundamentals.", "Candidates often forget that static methods are hidden rather than overridden and that access cannot usually be made more restrictive.", "Mention it when discussing polymorphism, template methods, or subclass behavior."),
  createSubject("Types & OOP", "abstraction", "Beginner", "Very Common", "Abstraction means exposing essential behavior while hiding unnecessary implementation details behind clear contracts.", "It matters because strong Java design depends on separating what an object does from how it does it.", "A weak answer treats abstraction as just an abstract class instead of a broader design principle.", "Use it when discussing interfaces, clean APIs, or maintainable object-oriented design."),
  createSubject("Types & OOP", "abstract classes versus interfaces", "Intermediate", "Very Common", "Abstract classes support shared state and implementation with single inheritance, while interfaces define contracts and support multiple inheritance of type plus default methods.", "This is a staple topic because it reveals whether you can choose the right modeling tool rather than memorizing syntax.", "Candidates often give outdated answers that ignore default methods or modern Java interface capabilities.", "Bring it up when explaining how you model shared behavior across multiple implementations."),
  createSubject("Types & OOP", "composition over inheritance", "Intermediate", "Common", "Composition builds behavior by combining objects, while inheritance couples subclasses to a superclass hierarchy. Composition is often safer because it reduces tight coupling.", "Interviewers like this because it tests design judgment rather than syntax recall.", "A common mistake is treating inheritance as automatically object-oriented and composition as secondary, instead of comparing coupling and flexibility.", "Use it when explaining design tradeoffs or refactoring rigid class hierarchies."),
  createSubject("Types & OOP", "polymorphism", "Beginner", "Very Common", "Polymorphism lets the same interface or superclass reference call different concrete implementations at runtime.", "It matters because Java design and frameworks often rely on substituting one implementation for another behind a stable contract.", "Candidates sometimes describe polymorphism only as method overloading and miss the more important runtime form.", "Use it when discussing interfaces, dependency inversion, or test doubles."),
  createSubject("Types & OOP", "the final keyword", "Beginner", "Very Common", "Final prevents reassignment of variables, overriding of methods, or extension of classes depending on where it is applied.", "Interviewers ask this because final affects immutability, API stability, and inheritance design.", "A common gap is assuming final makes an object deeply immutable when it only prevents rebinding of the reference.", "Bring it up when discussing immutable objects, constants, or locked-down APIs."),
  createSubject("Types & OOP", "the static keyword", "Beginner", "Very Common", "Static members belong to the class itself rather than to individual instances, which makes them useful for shared state, utilities, and factory methods.", "It matters because many Java APIs and startup semantics rely on static behavior.", "Candidates often overuse static and ignore how it increases global state and hurts testability when misapplied.", "Use it when explaining utility methods, the main method, or shared constants."),
  createSubject("Types & OOP", "equals and hashCode", "Intermediate", "Very Common", "Equals defines logical equality and hashCode supports hash-based collections. Equal objects must produce the same hash code to behave correctly in maps and sets.", "This topic matters because it sits at the intersection of object identity, domain modeling, and collection behavior.", "A common mistake is overriding equals without hashCode, or basing either one on mutable fields used after insertion into a map.", "Bring it up when discussing domain entities, keys, or collection correctness."),
  createSubject("Types & OOP", "Comparable versus Comparator", "Intermediate", "Common", "Comparable defines an object's natural ordering inside the class, while Comparator supplies external or alternate ordering logic.", "Interviewers ask this because it shows whether you understand reusable ordering strategies and API design.", "Candidates often remember the names but miss when to keep ordering inside the type versus outside it.", "Use it when describing sorting, TreeSet or TreeMap behavior, or domain-specific ordering."),
  createSubject("Types & OOP", "enums", "Intermediate", "Common", "Enums are classes with a fixed set of instances, which means they can carry fields, methods, interfaces, and behavior while remaining type-safe constants.", "It matters because many developers still think enums are just fancy integers, which undersells how useful they are in Java.", "A common mistake is using strings or ints where an enum would give stronger domain safety and clearer code.", "Mention it when talking about state machines, fixed categories, or switch logic."),
  createSubject("Strings & APIs", "String immutability", "Intermediate", "Very Common", "Strings are immutable, so every apparent modification creates a new String. This helps with safe sharing, hashing, caching, and string pooling.", "Interviewers ask this because it combines API behavior, memory reasoning, and language design.", "Candidates often stop at 'thread safety' and miss benefits around caching, security, and stable hash codes.", "Bring it up when asked why repeated concatenation can be expensive or why strings are safe as map keys."),
  createSubject("Strings & APIs", "the string pool", "Intermediate", "Common", "The string pool stores shared string literals and interned strings so identical values can reuse the same object instead of allocating duplicates.", "This matters because it shows deeper understanding of memory optimization and why == can be misleading with strings.", "A common misconception is relying on pooling semantics for equality checks instead of using equals consistently.", "Use it when explaining String literals, intern, or why some identical strings share references."),
  createSubject("Strings & APIs", "StringBuilder versus StringBuffer", "Beginner", "Common", "Both are mutable string builders. StringBuffer is synchronized for thread safety, while StringBuilder is usually faster in single-threaded code.", "Interviewers use this topic to test whether you understand mutability and simple concurrency tradeoffs.", "Candidates often say StringBuffer is always better because it is thread-safe without considering the overhead or actual threading model.", "Bring it up when discussing repeated concatenation or efficient string assembly."),
  createSubject("Strings & APIs", "String.intern()", "Advanced", "Rare", "String.intern() asks the JVM to use the canonical pooled instance for a string value, which can save memory in some narrow cases.", "It matters mainly as a depth signal. Knowing it exists is useful, but it is not a must-know topic for most interviews.", "A common mistake is recommending intern everywhere without considering memory pressure, lookup overhead, or whether pooling really helps.", "Mention it only when discussing advanced memory behavior or highly repetitive string datasets."),
  createSubject("Strings & APIs", "text blocks", "Beginner", "Occasional", "Text blocks are multiline string literals that make embedded JSON, SQL, HTML, or templates much easier to read than heavily escaped normal strings.", "They matter because modern Java interviews increasingly expect some awareness of post-Java-8 language improvements.", "Candidates sometimes over-explain them as a runtime feature when they are mostly a readability improvement in source code.", "Use it when describing readable multiline literals in newer Java versions."),
  createSubject("Strings & APIs", "varargs", "Beginner", "Common", "Varargs let a method accept zero or more arguments of the same type, which the compiler packages into an array at the call site.", "It matters because many standard Java APIs use varargs and it reflects comfort with method signatures.", "A common mistake is forgetting that varargs still become an array and can have ambiguity with overloaded methods.", "Bring it up when discussing convenient APIs or method signature design."),
  createSubject("Strings & APIs", "Optional", "Intermediate", "Common", "Optional models presence or absence for return values and encourages callers to handle missing data explicitly instead of depending on null.", "Interviewers ask this because Optional sits at the boundary between API design, readability, and null safety.", "A common mistake is using Optional as a field, parameter, or collection element when plain design choices are clearer.", "Use it when discussing null handling or expressive return types."),
  createSubject("Strings & APIs", "annotations", "Intermediate", "Common", "Annotations attach metadata to classes, methods, fields, and parameters so frameworks, tools, or the compiler can process extra information.", "It matters because annotations are everywhere in modern Java, from tests to dependency injection to code generation.", "Candidates often treat annotations as magic and skip the idea that they are metadata interpreted by some processor or framework.", "Mention it when describing framework configuration, custom metadata, or compile-time tools."),
  createSubject("Exceptions", "checked versus unchecked exceptions", "Intermediate", "Very Common", "Checked exceptions must be handled or declared and typically model recoverable conditions, while unchecked exceptions represent programming errors or invalid state.", "Interviewers ask this because exception design strongly affects API clarity and error handling style.", "A common mistake is claiming checked exceptions are always better or always worse instead of discussing tradeoffs and caller burden.", "Use it when discussing API design, validation failures, or recoverability."),
  createSubject("Exceptions", "throw versus throws", "Beginner", "Common", "Throw is the statement that actually throws an exception object, while throws declares that a method may let certain exceptions escape.", "It matters because even simple exception questions test whether you understand syntax and flow clearly.", "Candidates sometimes memorize the keywords without understanding the difference between declaring and actually signaling an error.", "Bring it up when explaining exception propagation or method contracts."),
  createSubject("Exceptions", "try-catch-finally", "Beginner", "Very Common", "Try contains risky code, catch handles matching exceptions, and finally runs cleanup logic whether or not an exception occurred.", "Interviewers use this topic because it tests basic control flow and resource-management understanding.", "A common mistake is assuming finally always runs no matter what, even though abrupt JVM termination can bypass it.", "Use it when explaining cleanup, error handling, or control flow after failures."),
  createSubject("Exceptions", "try-with-resources", "Beginner", "Very Common", "Try-with-resources automatically closes resources that implement AutoCloseable, reducing cleanup boilerplate and leak risk.", "It matters because it is the idiomatic Java way to manage files, streams, sockets, and similar resources.", "Candidates sometimes forget that resource closing can also throw exceptions and that suppressed exceptions may be attached.", "Bring it up when discussing file I/O, JDBC, or safer cleanup patterns."),
  createSubject("Exceptions", "AutoCloseable", "Intermediate", "Common", "AutoCloseable is the contract that lets objects participate in try-with-resources by exposing a close() method.", "This matters because it connects interface design to safe resource handling patterns.", "A common mistake is thinking only standard library resources can use try-with-resources; your own types can implement AutoCloseable too.", "Use it when explaining custom resource wrappers or deterministic cleanup."),
  createSubject("Exceptions", "custom exceptions", "Intermediate", "Common", "Custom exceptions model domain-specific failure cases and can make APIs clearer when generic IllegalStateException or RuntimeException would be too vague.", "Interviewers ask this to see whether you think about error semantics, not just control flow.", "A common mistake is creating deep exception hierarchies with no clear handling value or wrapping everything in meaningless custom types.", "Bring it up when discussing expressive APIs or domain-specific error handling."),
  createSubject("Generics & Collections", "generics and type safety", "Intermediate", "Very Common", "Generics let you parameterize types so the compiler can catch mismatched usage early and reduce unsafe casts at runtime.", "This matters because generics are central to modern Java collection APIs and type-safe library design.", "A common mistake is describing generics as purely runtime behavior even though most of their benefits are compile-time guarantees.", "Use it when discussing collections, APIs, or why raw types are discouraged."),
  createSubject("Generics & Collections", "type erasure", "Advanced", "Common", "Java implements generics with type erasure, which means most generic type information is removed at runtime and compiled into ordinary classes plus casts and bridge methods where needed.", "Interviewers ask this to test deeper understanding of why Java generics behave differently from reified generic systems.", "A common mistake is expecting runtime checks like new T() or instanceof List<String> to work the way they would in fully reified systems.", "Mention it when explaining generic limitations, reflection quirks, or why overloading on generic parameters can fail."),
  createSubject("Generics & Collections", "generic invariance", "Advanced", "Common", "In Java, List<Integer> is not a subtype of List<Number>. Generic types are invariant unless you use wildcards to widen what a method accepts.", "This matters because many interview questions on API design and compiler errors come back to invariance.", "A common mistake is assuming inheritance between element types automatically carries over to the generic containers.", "Use it when explaining why wildcard bounds exist or why collection APIs need careful type signatures."),
  createSubject("Generics & Collections", "PECS with wildcards", "Advanced", "Occasional", "PECS means producer extends, consumer super. Use ? extends when you only read values out and ? super when you mainly write values in.", "It matters because it shows you can design flexible generic APIs instead of fighting the compiler.", "Candidates often memorize the slogan without relating it to whether the structure is producing values, consuming values, or both.", "Bring it up when discussing reusable library methods or generic collection helpers."),
  createSubject("Generics & Collections", "List, Set, and Map", "Beginner", "Very Common", "List preserves order and allows duplicates, Set enforces uniqueness, and Map stores key-value pairs keyed by unique keys.", "This matters because it is one of the most common interview entry points into Java collections design.", "A common mistake is describing Map as a kind of Collection rather than a separate abstraction in the Java Collections Framework.", "Use it when explaining data-structure choices in Java code."),
  createSubject("Generics & Collections", "ArrayList versus LinkedList", "Intermediate", "Common", "ArrayList is usually better for indexed access and memory locality, while LinkedList is rarely preferable outside niche insertion or removal patterns through iterators.", "Interviewers ask this because it tests whether you understand data-structure tradeoffs beyond API names.", "A common mistake is assuming LinkedList is generally faster for inserts without considering traversal cost and cache behavior.", "Bring it up when discussing performance tradeoffs in collection choice."),
  createSubject("Generics & Collections", "HashMap internals", "Advanced", "Very Common", "HashMap uses hash codes to place keys into buckets and uses equals to disambiguate keys within a bucket, with collision handling that can switch from linked structures to tree bins in heavy collisions.", "It matters because HashMap sits at the center of many Java interviews on equality, performance, and data structure behavior.", "Candidates often mention hashing but forget the equally important role of equals or the effect of poor hash distribution.", "Use it when discussing map lookup performance, key design, or collision behavior."),
  createSubject("Generics & Collections", "fail-fast iterators", "Intermediate", "Common", "Fail-fast iterators detect structural modification outside the iterator and usually throw ConcurrentModificationException to surface unsafe usage early.", "Interviewers ask this because it tests whether you understand collection iteration guarantees and modification rules.", "A common mistake is assuming fail-fast is a hard concurrency guarantee when it is really a best-effort safety mechanism.", "Bring it up when discussing iteration, removal patterns, or concurrent modification."),
  createSubject("Generics & Collections", "immutable collections", "Intermediate", "Common", "Immutable collections cannot be structurally modified after creation, which simplifies reasoning, sharing, and defensive API design.", "This matters because immutability is one of the easiest ways to reduce bugs and coordination costs in Java systems.", "Candidates sometimes confuse unmodifiable views with truly immutable underlying data structures.", "Use it when discussing defensive copies, safe sharing, or API design."),
  createSubject("Generics & Collections", "HashSet versus TreeSet", "Intermediate", "Common", "HashSet uses hashing and has no sort order, while TreeSet keeps elements sorted using natural ordering or a Comparator.", "It matters because collection choice depends on whether you need uniqueness only or also deterministic ordering and range operations.", "A common mistake is focusing only on uniqueness and ignoring the cost and ordering behavior differences.", "Bring it up when discussing sorted results or uniqueness constraints."),
  createSubject("Generics & Collections", "Collections.unmodifiableList versus List.of", "Intermediate", "Occasional", "Collections.unmodifiableList creates a read-only view over an existing list, while List.of creates an unmodifiable list instance that also rejects null elements.", "Interviewers use this to test modern Java knowledge and whether you understand views versus owned immutable values.", "A common mistake is treating an unmodifiable view as a deep immutable snapshot even though the wrapped list can still change elsewhere.", "Mention it when discussing immutable API returns in modern Java."),
  createSubject("Streams & Functional", "lambda expressions", "Beginner", "Common", "Lambda expressions provide concise implementations of single-method interfaces, making behavior easier to pass around as data.", "It matters because lambdas changed how Java expresses callbacks, stream logic, and short functional-style operations.", "Candidates sometimes explain lambdas as if Java became purely functional instead of seeing them as a syntax and API improvement.", "Bring it up when discussing Streams, comparators, or event-driven code."),
  createSubject("Streams & Functional", "functional interfaces", "Intermediate", "Common", "A functional interface has exactly one abstract method and can therefore be implemented with a lambda or method reference.", "Interviewers ask this because it connects language features like lambdas to the interfaces they target.", "A common mistake is forgetting that default methods do not break functional-interface eligibility because only abstract methods count.", "Use it when explaining Consumer, Supplier, Function, Predicate, or your own callback contracts."),
  createSubject("Streams & Functional", "method references", "Beginner", "Common", "Method references are shorthand forms that point to existing methods when they already match a target functional interface signature.", "It matters because it shows fluency with readable Java 8+ idioms rather than just raw lambda syntax.", "A common mistake is using method references when they make code less clear or misunderstanding the different forms like instance versus static references.", "Bring it up when discussing clean stream pipelines or concise callback code."),
  createSubject("Streams & Functional", "stream laziness", "Intermediate", "Common", "Most intermediate stream operations are lazy, meaning they do not run until a terminal operation like collect, reduce, or forEach consumes the pipeline.", "This matters because many stream bugs and performance surprises come from misunderstanding when work actually executes.", "Candidates often assume each stream method runs immediately instead of seeing the pipeline as deferred computation.", "Use it when explaining why a stream chain appears to do nothing without a terminal operation."),
  createSubject("Streams & Functional", "map, filter, and reduce", "Intermediate", "Very Common", "Map transforms each element, filter removes elements based on a predicate, and reduce combines elements into one result or summary.", "Interviewers ask this because it quickly reveals whether you understand the core vocabulary of Java streams.", "A common mistake is using reduce where a clearer collector or simpler loop would express the intention better.", "Bring it up when discussing data processing pipelines in modern Java."),
  createSubject("Streams & Functional", "collectors like groupingBy", "Intermediate", "Common", "Collectors turn stream pipelines into concrete results, and groupingBy is a collector that aggregates elements by a classifier into a map of groups.", "It matters because real stream usage is often more about collection and aggregation than about simple mapping alone.", "A common mistake is building overly clever collector pipelines when straightforward code would be easier to maintain.", "Use it when describing summaries, grouping, counting, or aggregation tasks."),
  createSubject("Streams & Functional", "parallel streams", "Advanced", "Occasional", "Parallel streams split work across the common ForkJoinPool, which can help for large CPU-bound workloads but often hurts when tasks are tiny, blocking, or stateful.", "Interviewers ask this to test judgment, because parallelism is rarely free and Java developers need to understand when not to use it.", "A common mistake is assuming .parallel() is an automatic performance upgrade without considering workload size and thread-pool side effects.", "Mention it when comparing simple sequential processing with controlled concurrency."),
  createSubject("Concurrency", "threads versus processes", "Beginner", "Common", "Threads share a process's memory space, while separate processes have isolated memory and usually communicate more explicitly through inter-process mechanisms.", "It matters because concurrency questions often start by testing whether you know what is actually sharing memory in Java.", "A common mistake is treating threads as completely isolated units or ignoring the risks created by shared mutable memory.", "Use it when explaining why thread-safety matters inside a single Java process."),
  createSubject("Concurrency", "synchronized", "Intermediate", "Very Common", "Synchronized provides mutual exclusion using a monitor and also establishes visibility guarantees when threads enter and exit synchronized sections.", "Interviewers ask this because it is the foundational Java concurrency primitive and ties into both locking and memory visibility.", "A common mistake is describing synchronized only as locking and missing the happens-before visibility effect.", "Bring it up when discussing critical sections, race conditions, or simple thread-safe code."),
  createSubject("Concurrency", "volatile", "Advanced", "Common", "Volatile guarantees visibility and ordering for a variable across threads, but it does not make compound operations like increment atomic.", "It matters because many concurrency interview questions hinge on the difference between visibility and atomicity.", "Candidates often recommend volatile for counters or multi-step invariants when atomic classes or locks are actually required.", "Use it when describing flags, publication, or simple state that does not need compound atomic updates."),
  createSubject("Concurrency", "atomic classes", "Advanced", "Common", "Atomic classes like AtomicInteger provide lock-free atomic updates for simple shared state by using compare-and-swap style operations under the hood.", "Interviewers use this to test whether you know alternatives to coarse locking for simple concurrency problems.", "A common mistake is assuming atomics automatically solve larger invariants that span multiple variables or operations.", "Mention it when discussing counters, sequence numbers, or simple concurrent state transitions."),
  createSubject("Concurrency", "race conditions and deadlocks", "Intermediate", "Very Common", "Race conditions happen when outcomes depend on unsafe thread interleavings, while deadlocks occur when threads wait forever on locks held by each other.", "This matters because interviewers want to know whether you can reason about correctness under concurrency, not just name APIs.", "A common mistake is lumping all concurrency bugs together instead of distinguishing lost updates, stale reads, starvation, and deadlock patterns.", "Bring it up when describing production incidents or safe locking strategies."),
  createSubject("Concurrency", "ExecutorService", "Intermediate", "Common", "ExecutorService manages task execution using reusable thread pools, helping you separate task submission from low-level thread creation.", "Interviewers ask this because real Java applications rarely spawn raw threads for every unit of work.", "A common mistake is using thread pools without thinking about sizing, shutdown, or whether tasks are CPU-bound versus I/O-bound.", "Use it when discussing background work, bounded concurrency, or service lifecycle management."),
  createSubject("Concurrency", "Future versus CompletableFuture", "Advanced", "Common", "Future mainly represents an eventual result you can wait for, while CompletableFuture also supports explicit completion and composition of asynchronous stages.", "It matters because async Java code often becomes much clearer when you understand the jump from blocking futures to composable futures.", "A common mistake is using CompletableFuture chains but then blocking immediately, which throws away much of the async benefit.", "Bring it up when discussing asynchronous workflows or combining dependent tasks."),
  createSubject("Concurrency", "immutability and thread safety", "Intermediate", "Common", "Immutable objects are naturally easier to share across threads because their state cannot change after construction.", "Interviewers ask this because one of the best concurrency strategies is to avoid shared mutable state altogether.", "A common mistake is focusing only on locks and forgetting that immutability can remove the need for coordination entirely.", "Use it when discussing DTOs, value objects, or safe publication."),
  createSubject("Concurrency", "virtual threads", "Advanced", "Occasional", "Virtual threads are lightweight threads managed by the JVM that make request-per-task or request-per-thread styles more scalable for blocking workloads.", "It matters because newer Java interviews may ask about Loom-era concurrency and how it changes traditional thread-cost assumptions.", "A common mistake is assuming virtual threads make all concurrency concerns disappear; shared mutable state and synchronization rules still matter.", "Mention it when discussing modern Java concurrency, especially for server workloads with lots of waiting."),
  createSubject("JVM & Memory", "heap versus stack", "Beginner", "Very Common", "The heap stores objects and arrays shared through references, while each thread's stack stores call frames, local variables, and method execution state.", "This matters because many memory and lifecycle questions depend on whether data lives in object memory or in a thread's call stack.", "A common mistake is assuming primitive values always live only on the stack or that object references and objects are the same thing.", "Bring it up when discussing recursion, object allocation, or memory errors."),
  createSubject("JVM & Memory", "garbage collection", "Intermediate", "Very Common", "Garbage collection reclaims memory for objects that are no longer reachable so Java developers do not manually free most heap allocations.", "Interviewers ask this because it is a defining Java runtime feature and leads into performance and memory reasoning.", "A common mistake is saying GC prevents all memory leaks when logical retention can still keep unused objects reachable.", "Use it when explaining memory management, pause tradeoffs, or why Java code still needs lifecycle discipline."),
  createSubject("JVM & Memory", "minor versus major garbage collection", "Advanced", "Occasional", "Minor collections usually reclaim young-generation objects, while major or old-generation work deals with longer-lived objects and can be more expensive.", "It matters because generational behavior explains why short-lived allocations are often cheap and why some pauses hurt more than others.", "Candidates often speak about 'GC' generically without understanding that not all collections touch the same regions or cost the same.", "Mention it when discussing heap behavior or tuning tradeoffs in JVM-heavy roles."),
  createSubject("JVM & Memory", "memory leaks in Java", "Intermediate", "Common", "Java can still leak memory when objects remain strongly reachable through caches, listeners, static collections, or long-lived references even though the program no longer needs them.", "Interviewers ask this to test whether you understand that GC only frees unreachable objects, not merely unused ones in a business sense.", "A common mistake is assuming managed memory means leaks cannot happen at all.", "Use it when discussing caches, retention paths, or debugging high heap usage."),
  createSubject("JVM & Memory", "class loaders", "Advanced", "Occasional", "Class loaders locate and load class definitions, and separate class-loader hierarchies can create isolation boundaries even for classes with the same name.", "It matters because class loading underpins plugins, containers, hot-reload behavior, and some subtle runtime bugs.", "A common mistake is treating class loading as a one-time global action instead of something influenced by different loaders and delegation.", "Mention it when talking about modular systems, application servers, or reflection-heavy frameworks."),
  createSubject("JVM & Memory", "JIT compilation", "Advanced", "Common", "The Just-In-Time compiler observes hot code paths and compiles frequently executed bytecode into optimized machine code during runtime.", "Interviewers ask this because it shows you understand why Java can perform well despite starting from bytecode.", "A common mistake is thinking Java is either only interpreted or only compiled; in practice the JVM uses staged runtime compilation and optimization.", "Use it when discussing warmup, startup cost, or runtime performance."),
  createSubject("JVM & Memory", "metaspace", "Advanced", "Rare", "Metaspace stores class metadata in native memory and replaced the old permanent generation in modern JVMs.", "It matters mostly as a deeper JVM-internals topic that occasionally appears in senior or performance-focused interviews.", "A common mistake is speaking about PermGen as if it still exists unchanged in modern Java versions.", "Mention it when explaining class metadata memory or class-loader leaks."),
  createSubject("JVM & Memory", "the Java Memory Model", "Advanced", "Rare", "The Java Memory Model defines visibility and ordering guarantees across threads and explains when writes by one thread must become observable to another.", "Interviewers ask this to go beyond APIs and see whether you understand the formal rules behind synchronized, volatile, and safe publication.", "A common mistake is hand-waving with 'the CPU eventually sees it' instead of grounding answers in happens-before relationships.", "Bring it up when discussing visibility bugs, publication, or advanced concurrency correctness."),
  createSubject("JVM & Memory", "OutOfMemoryError versus StackOverflowError", "Intermediate", "Common", "OutOfMemoryError signals that the JVM cannot allocate required memory, while StackOverflowError usually comes from exhausting a thread stack through deep or infinite recursion.", "This matters because both are common interview examples of different memory failure modes.", "A common mistake is describing both as generic 'memory issues' without distinguishing heap pressure from stack exhaustion.", "Use it when discussing recursion, leaks, or resource limits."),
  createSubject("Advanced Features", "reflection", "Advanced", "Common", "Reflection lets Java inspect and invoke classes, fields, methods, and constructors at runtime even without compile-time coupling.", "It matters because many frameworks rely on reflection, and interviewers want to know both its power and its tradeoffs.", "A common mistake is treating reflection as free convenience instead of acknowledging the costs in encapsulation, performance, and maintainability.", "Bring it up when discussing frameworks, dependency injection, serialization, or dynamic tooling."),
  createSubject("Advanced Features", "records", "Intermediate", "Common", "Records are concise immutable data carriers that automatically provide a canonical constructor, accessors, equals, hashCode, and toString.", "They matter because modern Java interviews increasingly expect awareness of language features introduced after Java 8.", "A common mistake is assuming records are just syntax sugar for mutable POJOs rather than a stronger semantic commitment to data-carrier style objects.", "Use it when discussing DTOs, event payloads, or immutable value types."),
  createSubject("Advanced Features", "sealed classes", "Advanced", "Occasional", "Sealed classes restrict which classes or interfaces may extend or implement them, making domain hierarchies more explicit and safer for exhaustive reasoning.", "Interviewers ask this to see whether you understand modern language support for closed polymorphic hierarchies.", "A common mistake is using sealed classes where the hierarchy needs to stay open to extension, which defeats the feature's main value.", "Mention it when discussing domain modeling, algebraic-style hierarchies, or pattern matching."),
  createSubject("Advanced Features", "pattern matching for instanceof and switch", "Intermediate", "Occasional", "Pattern matching reduces boilerplate by combining type tests with variable binding and, in newer switch forms, can make branching on known shapes more expressive.", "It matters because it shows you know how newer Java versions are improving readability around conditional logic.", "A common mistake is overselling it as changing Java's type system rather than seeing it as syntax and control-flow improvement.", "Use it when discussing modern Java readability improvements or sealed-class hierarchies."),
  createSubject("Advanced Features", "serialization and the transient keyword", "Advanced", "Rare", "Serialization converts object state into a transportable or storable form, and transient marks fields that default Java serialization should skip.", "It matters mostly as a legacy or niche topic, but it still appears sometimes because many older Java systems used built-in serialization heavily.", "A common mistake is assuming transient is a general security feature rather than a serialization-specific instruction.", "Mention it when discussing legacy systems, object transport, or why built-in serialization is often avoided in newer designs.")
];

const promptFamilies = {
  explain: [
    (concept) => `What is ${concept} in Java?`,
    (concept) => `How would you explain ${concept} in a Java interview?`
  ],
  importance: [
    (concept) => `Why does ${concept} matter in Java interviews or production code?`,
    (concept) => `Why should a Java developer understand ${concept}?`
  ],
  pitfall: [
    (concept) => `What mistake or nuance should you call out when discussing ${concept}?`,
    (concept) => `What is a common misconception about ${concept}?`
  ],
  useCase: [
    (concept) => `When would you deliberately bring up ${concept} in an interview answer?`,
    (concept) => `Where does ${concept} become practically useful in Java code?`
  ]
};

const baseQuestions = subjectBlueprints.flatMap((subject, subjectIndex) => {
  const variants = [
    {
      prompt: promptFamilies.explain[subjectIndex % promptFamilies.explain.length](subject.concept),
      answer: subject.core
    },
    {
      prompt:
        promptFamilies.importance[subjectIndex % promptFamilies.importance.length](subject.concept),
      answer: subject.importance
    },
    {
      prompt: promptFamilies.pitfall[subjectIndex % promptFamilies.pitfall.length](subject.concept),
      answer: subject.pitfall
    },
    {
      prompt: promptFamilies.useCase[subjectIndex % promptFamilies.useCase.length](subject.concept),
      answer: subject.useCase
    }
  ];

  return variants.map((variant, variantIndex) => ({
    id: `q-${subjectIndex + 1}-${variantIndex + 1}`,
    topic: subject.topic,
    concept: subject.concept,
    difficulty: subject.difficulty,
    likelihood: subject.likelihood,
    prompt: variant.prompt,
    answer: variant.answer
  }));
});

const scenarioTemplates = [
  {
    topic: "Types & OOP",
    difficulty: "Intermediate",
    likelihood: "Very Common",
    subjects: [
      "pass-by-value in Java",
      "equals and hashCode",
      "abstract classes versus interfaces",
      "composition over inheritance",
      "polymorphism"
    ],
    stems: [
      "A teammate gives a shaky explanation of {concept}. How would you correct it in an interview-style answer?",
      "If an interviewer pushed back on your answer about {concept}, what nuance would you add?",
      "How would you turn {concept} from a textbook answer into a practical Java example?"
    ]
  },
  {
    topic: "Generics & Collections",
    difficulty: "Advanced",
    likelihood: "Common",
    subjects: [
      "HashMap internals",
      "type erasure",
      "generic invariance",
      "PECS with wildcards",
      "fail-fast iterators"
    ],
    stems: [
      "What deeper follow-up would you expect after mentioning {concept} in a Java interview?",
      "How would you explain the tradeoff behind {concept} without sounding overly academic?",
      "What practical bug or design issue can {concept} help you explain?"
    ]
  },
  {
    topic: "Concurrency",
    difficulty: "Advanced",
    likelihood: "Common",
    subjects: [
      "synchronized",
      "volatile",
      "atomic classes",
      "Future versus CompletableFuture",
      "immutability and thread safety"
    ],
    stems: [
      "How would you explain {concept} to show real concurrency judgment rather than just vocabulary?",
      "What wrong recommendation do candidates often make when discussing {concept}?",
      "If asked for a production example of {concept}, what would you say?"
    ]
  },
  {
    topic: "JVM & Memory",
    difficulty: "Intermediate",
    likelihood: "Common",
    subjects: [
      "garbage collection",
      "heap versus stack",
      "memory leaks in Java",
      "JIT compilation",
      "class loaders"
    ],
    stems: [
      "How would you keep an answer about {concept} clear and non-esoteric in an interview?",
      "What detail about {concept} is worth mentioning to sound practically strong, not just theoretical?",
      "Where does {concept} show up in real Java troubleshooting?"
    ]
  }
];

const subjectByConcept = Object.fromEntries(
  subjectBlueprints.map((subject) => [subject.concept, subject])
);

const scenarioQuestions = scenarioTemplates.flatMap((template, templateIndex) =>
  template.stems.flatMap((stem, stemIndex) =>
    template.subjects.map((concept, conceptIndex) => {
      const subject = subjectByConcept[concept];
      return {
        id: `s-${templateIndex + 1}-${stemIndex + 1}-${conceptIndex + 1}`,
        topic: template.topic,
        concept,
        difficulty: template.difficulty,
        likelihood: template.likelihood,
        prompt: stem.replace("{concept}", concept),
        answer: `${subject.importance} ${subject.pitfall} ${subject.useCase}`
      };
    })
  )
);

const questions = [...baseQuestions, ...scenarioQuestions];

const state = {
  currentQuestionId: null,
  filteredQuestions: [...questions],
  selectedDifficulty: "all",
  selectedLikelihood: "all",
  progress: loadProgress()
};

const elements = {
  questionCount: document.querySelector("#question-count"),
  reviewedCount: document.querySelector("#reviewed-count"),
  masteredCount: document.querySelector("#mastered-count"),
  searchInput: document.querySelector("#search-input"),
  statusSelect: document.querySelector("#status-select"),
  difficultyPills: document.querySelector("#difficulty-pills"),
  likelihoodPills: document.querySelector("#likelihood-pills"),
  questionTopic: document.querySelector("#question-topic"),
  questionDifficulty: document.querySelector("#question-difficulty"),
  questionLikelihood: document.querySelector("#question-likelihood"),
  questionPrompt: document.querySelector("#question-prompt"),
  answerBox: document.querySelector("#question-answer"),
  answerText: document.querySelector("#question-answer-text"),
  revealButton: document.querySelector("#reveal-button"),
  nextButton: document.querySelector("#next-button"),
  randomQuestionButton: document.querySelector("#random-question-button"),
  shuffleFilteredButton: document.querySelector("#shuffle-filtered-button"),
  markReviewedButton: document.querySelector("#mark-reviewed-button"),
  markMasteredButton: document.querySelector("#mark-mastered-button"),
  reviewedPercent: document.querySelector("#reviewed-percent"),
  masteredPercent: document.querySelector("#mastered-percent"),
  reviewedBar: document.querySelector("#reviewed-bar"),
  masteredBar: document.querySelector("#mastered-bar"),
  deckSummary: document.querySelector("#deck-summary"),
  questionList: document.querySelector("#question-list"),
  resetProgressButton: document.querySelector("#reset-progress-button")
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function getQuestionStatus(questionId) {
  return state.progress[questionId] ?? "unseen";
}

function updateQuestionStatus(questionId, status) {
  state.progress[questionId] = status;
  saveProgress();
  updateProgressUI();
  renderQuestionList();
}

function renderFilterPills(container, options, selected, variantClass, onSelect) {
  container.innerHTML = "";
  options.forEach((option) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = `pill ${variantClass} ${selected === option ? "pill--active" : ""}`.trim();
    pill.textContent = option === "all" ? "All" : option;
    pill.addEventListener("click", () => onSelect(option));
    container.append(pill);
  });
}

function renderDifficultyPills() {
  renderFilterPills(
    elements.difficultyPills,
    ["all", "Beginner", "Intermediate", "Advanced"],
    state.selectedDifficulty,
    "pill--difficulty",
    (option) => {
      state.selectedDifficulty = option;
      renderDifficultyPills();
      applyFilters();
    }
  );
}

function renderLikelihoodPills() {
  renderFilterPills(
    elements.likelihoodPills,
    ["all", "Very Common", "Common", "Occasional", "Rare"],
    state.selectedLikelihood,
    "pill--likelihood",
    (option) => {
      state.selectedLikelihood = option;
      renderLikelihoodPills();
      applyFilters();
    }
  );
}

function applyFilters() {
  const searchValue = elements.searchInput.value.trim().toLowerCase();
  const difficulty = state.selectedDifficulty;
  const likelihood = state.selectedLikelihood;
  const status = elements.statusSelect.value;

  state.filteredQuestions = questions.filter((question) => {
    const matchesSearch =
      !searchValue ||
      [
        question.prompt,
        question.answer,
        question.topic,
        question.concept,
        question.difficulty,
        question.likelihood
      ]
        .join(" ")
        .toLowerCase()
        .includes(searchValue);
    const matchesDifficulty = difficulty === "all" || question.difficulty === difficulty;
    const matchesLikelihood = likelihood === "all" || question.likelihood === likelihood;
    const questionStatus = getQuestionStatus(question.id);
    const matchesStatus =
      status === "all" ||
      (status === "reviewed" && questionStatus === "reviewed") ||
      (status === "mastered" && questionStatus === "mastered") ||
      (status === "unseen" && questionStatus === "unseen");

    return matchesSearch && matchesDifficulty && matchesLikelihood && matchesStatus;
  });

  renderDeckSummary();
  renderQuestionList();

  if (!state.filteredQuestions.some((question) => question.id === state.currentQuestionId)) {
    pickNextQuestion();
  }
}

function renderDeckSummary() {
  const total = state.filteredQuestions.length;
  const difficultySummary = ["Beginner", "Intermediate", "Advanced"]
    .map(
      (difficulty) =>
        `${difficulty}: ${state.filteredQuestions.filter((q) => q.difficulty === difficulty).length}`
    )
    .join(" · ");
  const likelihoodSummary = ["Very Common", "Common", "Occasional", "Rare"]
    .map(
      (likelihood) =>
        `${likelihood}: ${state.filteredQuestions.filter((q) => q.likelihood === likelihood).length}`
    )
    .join(" · ");

  elements.deckSummary.textContent =
    total > 0
      ? `${total} questions in the current deck. ${difficultySummary}. ${likelihoodSummary}.`
      : "No questions match the current filters yet.";
}

function pickNextQuestion() {
  if (state.filteredQuestions.length === 0) {
    state.currentQuestionId = null;
    renderCurrentQuestion();
    return;
  }

  const unseenFirst = state.filteredQuestions.filter((question) => getQuestionStatus(question.id) === "unseen");
  const source = unseenFirst.length > 0 ? unseenFirst : state.filteredQuestions;
  state.currentQuestionId = source[Math.floor(Math.random() * source.length)].id;
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const question = questions.find((item) => item.id === state.currentQuestionId);

  if (!question) {
    elements.questionTopic.textContent = "No match";
    elements.questionDifficulty.textContent = "Update filters";
    elements.questionLikelihood.textContent = "No question";
    elements.questionPrompt.textContent = "No question is available for the current selection.";
    elements.answerText.textContent = "";
    elements.answerBox.classList.add("answer--hidden");
    return;
  }

  elements.questionTopic.textContent = question.topic;
  elements.questionDifficulty.textContent = question.difficulty;
  elements.questionLikelihood.textContent = question.likelihood;
  elements.questionPrompt.textContent = question.prompt;
  elements.answerText.textContent = question.answer;
  elements.answerBox.classList.add("answer--hidden");
}

function renderQuestionList() {
  elements.questionList.innerHTML = "";

  state.filteredQuestions.forEach((question) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "question-list__item";
    button.addEventListener("click", () => {
      state.currentQuestionId = question.id;
      renderCurrentQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const meta = document.createElement("div");
    meta.className = "question-list__meta";

    const topic = document.createElement("span");
    topic.className = "pill";
    topic.textContent = question.topic;

    const difficulty = document.createElement("span");
    difficulty.className = "pill pill--difficulty";
    difficulty.textContent = question.difficulty;

    const likelihood = document.createElement("span");
    likelihood.className = "pill pill--likelihood";
    likelihood.textContent = question.likelihood;

    meta.append(topic, difficulty, likelihood);

    const title = document.createElement("h3");
    title.textContent = question.prompt;

    const status = document.createElement("div");
    status.className = "question-list__status";
    status.textContent = `Status: ${getQuestionStatus(question.id)} · Concept: ${question.concept}`;

    button.append(meta, title, status);
    elements.questionList.append(button);
  });
}

function updateProgressUI() {
  const reviewedCount = Object.values(state.progress).filter((value) => value === "reviewed").length;
  const masteredCount = Object.values(state.progress).filter((value) => value === "mastered").length;
  const total = questions.length;
  const reviewedCoverage = Math.round(((reviewedCount + masteredCount) / total) * 100);
  const masteredCoverage = Math.round((masteredCount / total) * 100);

  elements.questionCount.textContent = total.toString();
  elements.reviewedCount.textContent = (reviewedCount + masteredCount).toString();
  elements.masteredCount.textContent = masteredCount.toString();
  elements.reviewedPercent.textContent = `${reviewedCoverage}%`;
  elements.masteredPercent.textContent = `${masteredCoverage}%`;
  elements.reviewedBar.style.width = `${reviewedCoverage}%`;
  elements.masteredBar.style.width = `${masteredCoverage}%`;
}

function bindEvents() {
  [elements.searchInput, elements.statusSelect].forEach((element) => {
    element.addEventListener("input", applyFilters);
    element.addEventListener("change", applyFilters);
  });

  elements.revealButton.addEventListener("click", () => {
    if (state.currentQuestionId) {
      elements.answerBox.classList.remove("answer--hidden");
    }
  });

  elements.nextButton.addEventListener("click", pickNextQuestion);
  elements.randomQuestionButton.addEventListener("click", pickNextQuestion);
  elements.shuffleFilteredButton.addEventListener("click", pickNextQuestion);

  elements.markReviewedButton.addEventListener("click", () => {
    if (state.currentQuestionId) {
      updateQuestionStatus(state.currentQuestionId, "reviewed");
    }
  });

  elements.markMasteredButton.addEventListener("click", () => {
    if (state.currentQuestionId) {
      updateQuestionStatus(state.currentQuestionId, "mastered");
    }
  });

  elements.resetProgressButton.addEventListener("click", () => {
    state.progress = {};
    saveProgress();
    updateProgressUI();
    applyFilters();
  });
}

function init() {
  renderDifficultyPills();
  renderLikelihoodPills();
  bindEvents();
  updateProgressUI();
  applyFilters();
  pickNextQuestion();
}

init();
