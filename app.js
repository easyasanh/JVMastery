const STORAGE_KEY = "java-interview-drill-progress-v1";

const topicBlueprints = [
  {
    topic: "Core Java",
    items: [
      ["Explain the difference between JDK, JRE, and JVM.", "The JVM executes bytecode, the JRE bundles the JVM plus runtime libraries, and the JDK adds developer tooling such as the compiler, debugger, and packaging tools.", "Beginner"],
      ["Why is Java considered platform independent?", "Java source compiles to bytecode, and each platform provides a JVM implementation that knows how to execute that bytecode on its own operating system and hardware.", "Beginner"],
      ["What is the purpose of the main method signature in Java?", "The JVM looks for a public static void main(String[] args) entry point because it can invoke it without creating an instance and can pass command-line arguments through the String array.", "Beginner"],
      ["What is the difference between method overloading and method overriding?", "Overloading changes the parameter list in the same class, while overriding replaces inherited behavior in a subclass using the same signature and a compatible return type.", "Beginner"],
      ["What are wrapper classes and why are they useful?", "Wrapper classes such as Integer and Boolean let primitive values behave like objects so they can be stored in collections, participate in generics, and expose utility methods.", "Beginner"],
      ["What is autoboxing and unboxing?", "Autoboxing converts a primitive into its wrapper automatically, while unboxing extracts the primitive value from the wrapper when Java needs the primitive form.", "Beginner"],
      ["What is the difference between == and equals in Java?", "== compares primitive values or object references, while equals is intended to compare logical equality and can be overridden to define domain-specific comparison.", "Beginner"],
      ["Why are strings immutable in Java?", "Immutability makes strings thread-safe, cache-friendly for the string pool, secure for sensitive APIs like class loading and file paths, and simpler to use as hash keys.", "Intermediate"],
      ["What is the string pool?", "The string pool is a JVM-managed cache of string literals and interned strings so identical string values can share the same object instance and reduce memory usage.", "Intermediate"],
      ["When would you choose StringBuilder over String?", "Use StringBuilder when you are performing repeated mutations or concatenations because String creates a new immutable object for each change.", "Beginner"],
      ["What is the difference between StringBuilder and StringBuffer?", "Both are mutable string builders, but StringBuffer is synchronized for thread safety while StringBuilder is usually faster in single-threaded code.", "Beginner"],
      ["Explain pass-by-value in Java.", "Java always passes arguments by value. For object references, the copied value is the reference itself, so methods can mutate the object but cannot replace the caller's reference.", "Intermediate"],
      ["What are varargs in Java and how do they work?", "Varargs let a method accept zero or more arguments of the same type, which the compiler packages into an array when the method is called.", "Beginner"],
      ["What is the purpose of the final keyword on variables, methods, and classes?", "A final variable cannot be reassigned, a final method cannot be overridden, and a final class cannot be subclassed.", "Beginner"],
      ["How does Java handle multiple inheritance?", "Java classes do not support multiple inheritance of implementation, but a class can implement multiple interfaces and inherit behavior from default methods carefully.", "Intermediate"],
      ["What are records in Java and when are they useful?", "Records are concise immutable data carriers that automatically provide a constructor, accessors, equals, hashCode, and toString, making them useful for DTO-style models.", "Intermediate"],
      ["What problem do sealed classes solve?", "Sealed classes restrict which classes or interfaces may extend or implement them, making hierarchies more explicit and safer for pattern matching and domain modeling.", "Advanced"],
      ["What are text blocks in Java?", "Text blocks are multiline string literals that improve readability for embedded JSON, SQL, HTML, or any content that would be noisy with escaped newlines.", "Beginner"],
      ["Explain the difference between checked and unchecked exceptions.", "Checked exceptions must be handled or declared and usually represent recoverable conditions, while unchecked exceptions extend RuntimeException and usually signal programming errors or invalid state.", "Intermediate"],
      ["What is try-with-resources?", "Try-with-resources automatically closes resources that implement AutoCloseable, reducing boilerplate and preventing resource leaks.", "Beginner"],
      ["What is the Optional type and when should it be used?", "Optional models an absent or present return value and is helpful for APIs where a missing value is valid, but it should not normally replace fields, method parameters, or collections.", "Intermediate"],
      ["What is the difference between an abstract class and an interface?", "An abstract class can hold state and shared implementation with single inheritance, while an interface defines a contract and supports multiple inheritance of type.", "Beginner"],
      ["What are default methods in interfaces?", "Default methods let interfaces ship a concrete implementation so APIs can evolve without breaking every existing implementer.", "Intermediate"],
      ["What is the purpose of the static keyword?", "Static members belong to the class rather than an instance, making them appropriate for shared constants, utility methods, and factory-style behavior.", "Beginner"],
      ["How do enums work in Java?", "Enums are full classes with a fixed set of instances, which means they can have fields, methods, constructors, and interfaces while still giving you type-safe constants.", "Beginner"],
      ["When should you use composition over inheritance?", "Prefer composition when behavior should be assembled flexibly and independently because inheritance tightly couples subclasses to superclass implementation details.", "Intermediate"],
      ["What does the transient keyword do?", "Transient marks a field so default Java serialization skips it, which is useful for sensitive, derived, or non-serializable state.", "Intermediate"],
      ["What is the purpose of the volatile keyword?", "Volatile guarantees visibility of reads and writes across threads for a variable, but it does not make compound actions like increment atomic.", "Advanced"],
      ["What is reflection and why should it be used carefully?", "Reflection allows runtime inspection and invocation of classes and members, but it weakens encapsulation, is slower than direct calls, and can complicate maintenance.", "Advanced"],
      ["What are annotations in Java?", "Annotations attach metadata to code elements so tools, frameworks, and the compiler can inspect or process extra information.", "Beginner"]
    ]
  },
  {
    topic: "Collections",
    items: [
      ["What is the difference between List, Set, and Map?", "A List preserves order and allows duplicates, a Set enforces uniqueness, and a Map stores key-value pairs with unique keys.", "Beginner"],
      ["When would you choose ArrayList over LinkedList?", "ArrayList is better for indexed reads and memory efficiency, while LinkedList is rarely preferable unless you need frequent insertions and removals through iterators in the middle of the list.", "Intermediate"],
      ["How does HashMap work internally?", "HashMap hashes the key to choose a bucket, then compares keys with equals within that bucket, using linked nodes or tree bins to resolve collisions.", "Intermediate"],
      ["Why is it important to implement equals and hashCode together?", "Hash-based collections depend on both methods being consistent so logically equal objects land in the same bucket and remain retrievable.", "Intermediate"],
      ["What is the difference between HashMap and ConcurrentHashMap?", "HashMap is not thread-safe, while ConcurrentHashMap supports concurrent access with fine-grained coordination and no single global lock for most operations.", "Intermediate"],
      ["What is the difference between HashSet and TreeSet?", "HashSet stores elements based on hash codes with no sort order, while TreeSet keeps elements sorted using natural ordering or a comparator.", "Beginner"],
      ["What is a fail-fast iterator?", "A fail-fast iterator detects structural modification outside the iterator and throws ConcurrentModificationException to surface unsafe concurrent changes early.", "Intermediate"],
      ["What is the difference between Comparable and Comparator?", "Comparable defines an object's natural ordering inside the class, while Comparator provides external or alternate ordering strategies.", "Beginner"],
      ["How do immutable collections help?", "Immutable collections prevent accidental mutation, make sharing safer across threads and layers, and simplify reasoning about program state.", "Beginner"],
      ["What is the load factor in HashMap?", "The load factor controls how full the map can get before resizing, balancing memory usage against lookup performance.", "Advanced"],
      ["What happens when many keys collide in a HashMap?", "Colliding entries share a bucket; in modern Java large collision chains can be treeified into balanced trees to keep lookups from degrading to linear scans.", "Advanced"],
      ["What are weak references used for in collection-related code?", "Weak references allow objects to be garbage collected when nothing else strongly references them, which is useful for caches or metadata maps that should not prevent cleanup.", "Advanced"],
      ["What is the difference between synchronized collections and concurrent collections?", "Synchronized wrappers serialize access around a backing collection, while concurrent collections are designed for scalable concurrent reads and writes with specialized internal strategies.", "Intermediate"],
      ["Why can mutable keys be dangerous in a HashMap?", "If the fields used in equals or hashCode change after insertion, the map may no longer be able to find the entry in the expected bucket.", "Intermediate"],
      ["When would LinkedHashMap be preferable to HashMap?", "LinkedHashMap preserves insertion order or access order, which makes it useful for predictable iteration and simple LRU-style caches.", "Intermediate"],
      ["What is an EnumMap?", "EnumMap is a specialized map implementation for enum keys that is compact, fast, and usually better than a general-purpose HashMap for that use case.", "Intermediate"],
      ["How does CopyOnWriteArrayList trade performance?", "It makes reads very cheap and thread-safe, but every write creates a fresh copy of the underlying array, so heavy write workloads are expensive.", "Advanced"],
      ["What are NavigableMap and NavigableSet useful for?", "They provide sorted collections with range queries and neighbor lookups like floor, ceiling, lower, and higher.", "Intermediate"],
      ["What is the difference between Arrays.asList and List.of?", "Arrays.asList returns a fixed-size list backed by the array, while List.of returns an unmodifiable list that rejects null elements.", "Intermediate"],
      ["How would you remove duplicates while preserving insertion order?", "Use a LinkedHashSet or stream into a LinkedHashSet-backed collector so uniqueness is enforced without losing original order.", "Beginner"],
      ["What is a priority queue and when is it useful?", "A priority queue orders elements by priority rather than insertion order, making it useful for schedulers, top-K problems, and graph algorithms.", "Intermediate"],
      ["How do streams interact with collections?", "Streams provide a declarative way to process collection data with map, filter, reduce, grouping, and parallel execution when appropriate.", "Beginner"],
      ["Why should collection implementations be exposed via interfaces?", "Returning interfaces like List or Map hides implementation detail and makes future substitutions easier without changing client code.", "Beginner"],
      ["What is the cost of contains on different collection types?", "For HashSet it is typically constant time, for ArrayList it is linear, and for TreeSet it is logarithmic.", "Intermediate"],
      ["When is a TreeMap a better choice than a HashMap?", "Use TreeMap when you need sorted keys, range queries, or predecessor and successor lookups instead of pure constant-time average access.", "Intermediate"],
      ["What does Collections.unmodifiableList actually guarantee?", "It prevents mutation through that wrapper, but if the backing list changes elsewhere the wrapped view reflects those changes.", "Intermediate"],
      ["What is the difference between shallow and deep copying a collection?", "A shallow copy duplicates the container structure but shares the same element references, while a deep copy duplicates the nested objects too.", "Intermediate"],
      ["What is a Spliterator?", "A Spliterator is a traversal and partitioning abstraction designed to support efficient sequential and parallel stream processing.", "Advanced"],
      ["How can poor hashCode implementations hurt performance?", "If many unequal objects produce the same hash code, lookups degrade because too many entries land in the same buckets.", "Intermediate"],
      ["What is the role of collectors like groupingBy and partitioningBy?", "They transform stream results into aggregated structures such as grouped maps, partitions, summaries, or custom reductions.", "Beginner"]
    ]
  },
  {
    topic: "Concurrency",
    items: [
      ["What is a thread in Java?", "A thread is an independent path of execution within a process, allowing multiple tasks to progress concurrently.", "Beginner"],
      ["What is the difference between concurrency and parallelism?", "Concurrency is about managing multiple tasks that overlap in time, while parallelism means tasks actually run simultaneously on multiple cores.", "Beginner"],
      ["Why is shared mutable state dangerous?", "Multiple threads can interleave reads and writes unpredictably, causing race conditions, stale reads, and corrupted invariants.", "Intermediate"],
      ["What does synchronized do?", "Synchronized provides mutual exclusion on a monitor and establishes happens-before visibility guarantees when threads enter and exit the protected block or method.", "Intermediate"],
      ["What is a race condition?", "A race condition happens when the program outcome depends on the timing of unsafely interleaved operations between threads.", "Beginner"],
      ["What is deadlock?", "Deadlock occurs when threads wait forever on locks held by one another, often because they acquire shared resources in inconsistent order.", "Intermediate"],
      ["How can you reduce deadlock risk?", "Use consistent lock ordering, keep critical sections small, avoid nested locks where possible, and prefer higher-level concurrency utilities.", "Intermediate"],
      ["What is a thread pool?", "A thread pool reuses a bounded set of worker threads to execute tasks efficiently without paying the cost of creating a new thread each time.", "Beginner"],
      ["When should you use ExecutorService?", "Use ExecutorService to manage asynchronous task execution, lifecycle, and resource limits instead of manually creating threads.", "Beginner"],
      ["What is the difference between submit and execute?", "Execute runs a Runnable without returning a result, while submit returns a Future and can capture exceptions or return values.", "Intermediate"],
      ["What is a Future?", "A Future represents the eventual result of an asynchronous task and lets you wait, cancel, or inspect completion state.", "Beginner"],
      ["Why are CompletableFuture and reactive styles attractive?", "They allow you to compose asynchronous stages without blocking threads, which can improve throughput and readability for async workflows.", "Intermediate"],
      ["What does volatile guarantee?", "Volatile guarantees visibility and ordering for reads and writes of that variable, but not atomicity for compound operations.", "Advanced"],
      ["What is the happens-before relationship?", "It is the Java Memory Model rule that defines when one action's effects are guaranteed to be visible to another action in another thread.", "Advanced"],
      ["What is atomicity and how do Atomic classes help?", "Atomicity means an operation completes as one indivisible step; AtomicInteger and related classes provide lock-free atomic updates for simple state changes.", "Intermediate"],
      ["When is ReentrantLock preferable to synchronized?", "Use ReentrantLock when you need timed lock acquisition, interruptible waits, multiple condition variables, or more explicit lock management.", "Advanced"],
      ["What are CountDownLatch and CyclicBarrier used for?", "CountDownLatch waits for a fixed number of events before proceeding, while CyclicBarrier lets a group of threads repeatedly wait for each other at synchronization points.", "Intermediate"],
      ["What is a semaphore?", "A semaphore controls access to a limited number of permits, making it useful for throttling and resource pooling.", "Intermediate"],
      ["What problem does BlockingQueue solve?", "BlockingQueue coordinates producers and consumers by waiting automatically when the queue is empty or full.", "Intermediate"],
      ["What is thread starvation?", "Thread starvation happens when a thread rarely gets CPU time or lock access because other threads dominate the resource.", "Intermediate"],
      ["How do parallel streams work and when should they be avoided?", "Parallel streams split work across the common ForkJoinPool, but they can hurt performance when tasks are small, blocking, stateful, or compete with other workloads.", "Advanced"],
      ["What is the ForkJoin framework?", "ForkJoin supports divide-and-conquer tasks that split recursively and use work-stealing to balance load across worker threads.", "Advanced"],
      ["What is false sharing?", "False sharing happens when independent variables on the same cache line are updated by different threads, causing unnecessary cache coherence traffic.", "Advanced"],
      ["Why should interrupts be handled carefully?", "Interrupts are a cooperative cancellation signal, so swallowing them can make shutdown and cancellation logic unreliable.", "Advanced"],
      ["What is a producer-consumer problem?", "It is a coordination pattern where producers create work items and consumers process them, often requiring safe buffering and backpressure.", "Beginner"],
      ["How do immutable objects help concurrency?", "They eliminate synchronization needs for shared reads because their state never changes after construction.", "Beginner"],
      ["What are thread-safe collections appropriate for?", "They help when multiple threads must share a collection, but you still need to reason about larger compound actions that span multiple operations.", "Intermediate"],
      ["What is lock contention?", "Lock contention is the performance cost and delay caused when many threads compete for the same lock.", "Intermediate"],
      ["What is a read-write lock?", "A read-write lock allows multiple concurrent readers but only one writer, which can help workloads dominated by reads.", "Advanced"],
      ["What are virtual threads useful for?", "Virtual threads make it practical to run huge numbers of mostly blocking tasks with much lower overhead than platform threads, especially for request-per-thread server code.", "Advanced"]
    ]
  },
  {
    topic: "JVM & Memory",
    items: [
      ["How does garbage collection work at a high level?", "The JVM identifies objects that are no longer reachable and reclaims their memory automatically, using algorithms tuned for throughput, latency, and heap behavior.", "Intermediate"],
      ["What is the heap?", "The heap is the runtime memory area where objects and arrays are allocated and later reclaimed by the garbage collector.", "Beginner"],
      ["What is the stack in Java?", "Each thread has its own stack containing method frames, local variables, and call history.", "Beginner"],
      ["What causes a StackOverflowError?", "A StackOverflowError usually comes from deep or infinite recursion exhausting the thread's stack frames.", "Beginner"],
      ["What causes an OutOfMemoryError?", "OutOfMemoryError occurs when the JVM cannot allocate required memory and recovery is typically difficult or impossible without reducing pressure or increasing limits.", "Intermediate"],
      ["What is the difference between minor and major GC?", "Minor GC usually cleans young-generation objects, while major or old-generation collection handles longer-lived objects and can be more expensive.", "Advanced"],
      ["Why are most objects cheap to collect?", "Most objects die young, so generational collectors optimize for quickly reclaiming short-lived allocations in the young generation.", "Intermediate"],
      ["What is a memory leak in Java if GC exists?", "A Java memory leak happens when objects remain reachable unintentionally, so the collector cannot reclaim memory even though the application no longer needs those objects.", "Intermediate"],
      ["How would you investigate high memory usage?", "Check heap usage trends, inspect GC logs, capture a heap dump, identify dominant object graphs, and trace why they remain reachable.", "Advanced"],
      ["What does the class loader do?", "The class loader locates class definitions, loads bytecode, and participates in linking and initialization before the class is used.", "Intermediate"],
      ["What is classpath vs module path?", "Classpath is the traditional way to locate classes and jars, while the module path supports the Java Platform Module System with explicit module boundaries.", "Advanced"],
      ["What is JIT compilation?", "The Just-In-Time compiler turns frequently executed bytecode paths into optimized native machine code at runtime to improve performance.", "Intermediate"],
      ["What is escape analysis?", "Escape analysis lets the JVM determine whether an object can be optimized away, stack-allocated conceptually, or synchronized less aggressively if it does not escape the current context.", "Advanced"],
      ["What is metaspace?", "Metaspace is the native-memory area that stores class metadata in modern JVMs, replacing the old permanent generation.", "Intermediate"],
      ["Why might String.intern be dangerous if overused?", "It can increase pressure on the string pool and add lookup overhead, so indiscriminate interning may hurt rather than help.", "Advanced"],
      ["How does GC tuning involve tradeoffs?", "Collectors and heap settings trade throughput, pause time, memory footprint, and predictability, so tuning depends on workload goals.", "Advanced"],
      ["What is the purpose of JVM flags like -Xms and -Xmx?", "They set the initial and maximum heap size, shaping startup memory footprint and how much the heap can grow.", "Intermediate"],
      ["What does safepoint mean?", "A safepoint is a JVM state where all threads are in a known place so the runtime can perform global operations such as GC or deoptimization.", "Advanced"],
      ["What is deoptimization?", "Deoptimization is the JVM's ability to fall back from optimized machine code to interpreted or less optimized execution when assumptions become invalid.", "Advanced"],
      ["Why is object allocation often fast in Java?", "Allocations are usually cheap because the JVM often uses thread-local allocation buffers and bump-the-pointer allocation in contiguous heap regions.", "Advanced"],
      ["What is a heap dump?", "A heap dump is a snapshot of heap memory at a point in time used to analyze object retention and memory issues.", "Intermediate"],
      ["What is profiling and when would you use it?", "Profiling measures runtime behavior such as CPU time, allocations, or lock contention to guide performance investigation.", "Intermediate"],
      ["What is the difference between G1, ZGC, and Shenandoah at a high level?", "G1 aims for balanced pause targets on large heaps, while ZGC and Shenandoah focus on very low pause times with more concurrent work.", "Advanced"],
      ["What is the Java Memory Model?", "It defines how threads interact through memory and what visibility and ordering guarantees synchronization constructs provide.", "Advanced"],
      ["Why can final fields improve safety?", "Properly constructed objects with final fields get stronger initialization safety guarantees, which helps avoid seeing partially initialized state across threads.", "Advanced"],
      ["What is a reference queue used for?", "ReferenceQueue works with soft, weak, or phantom references so cleanup or bookkeeping can happen after the collector determines referents are reclaimable.", "Advanced"],
      ["What is the difference between soft, weak, and phantom references?", "Soft references are useful for memory-sensitive caches, weak references are cleared aggressively once only weakly reachable, and phantom references support post-mortem cleanup with a reference queue.", "Advanced"],
      ["What is bytecode verification?", "The JVM verifies bytecode to ensure type safety and structural correctness before execution, reducing the risk of invalid or malicious code breaking runtime assumptions.", "Advanced"],
      ["Why might startup time matter for JVM applications?", "Cold startup affects CLI tools, serverless workloads, and autoscaling responsiveness, so class loading, JIT warmup, and dependency size all matter.", "Intermediate"],
      ["What is CDS or class data sharing?", "Class data sharing preloads and shares class metadata across JVM processes to reduce startup time and memory footprint.", "Advanced"]
    ]
  },
  {
    topic: "Spring",
    items: [
      ["What is dependency injection?", "Dependency injection supplies a class with its collaborators from the outside rather than letting it construct them directly, improving testability and loose coupling.", "Beginner"],
      ["What does the Spring container manage?", "The Spring container creates, wires, configures, and manages the lifecycle of beans in the application context.", "Beginner"],
      ["What is the difference between @Component, @Service, and @Repository?", "All are stereotype annotations for component scanning, but @Service signals business logic, @Repository signals persistence and can enable exception translation, and @Component is the general-purpose option.", "Beginner"],
      ["What is @Autowired and what is the preferred injection style?", "Autowired resolves dependencies from the context, and constructor injection is preferred because it makes required dependencies explicit and supports immutability.", "Beginner"],
      ["What is Spring Boot and why is it popular?", "Spring Boot reduces setup friction with opinionated auto-configuration, starter dependencies, production-ready actuator features, and embedded servers.", "Beginner"],
      ["What is auto-configuration?", "Auto-configuration conditionally creates beans based on the classpath, properties, and existing beans so common setups work with minimal manual wiring.", "Intermediate"],
      ["What are Spring profiles?", "Profiles let you activate different beans or properties for environments such as local, test, staging, and production.", "Beginner"],
      ["What is the difference between singleton and prototype scope?", "Singleton creates one bean per application context, while prototype creates a new bean each time it is requested.", "Intermediate"],
      ["How does @Transactional work?", "Transactional uses proxies or AOP to start, commit, or roll back database transactions around method execution according to configuration and exceptions.", "Intermediate"],
      ["Why can self-invocation break @Transactional behavior?", "A method call within the same instance bypasses the proxy, so the transactional advice may never run.", "Advanced"],
      ["What is the difference between @Controller and @RestController?", "RestController combines @Controller and @ResponseBody so return values are written directly to the HTTP response body rather than resolving a view.", "Beginner"],
      ["What is the purpose of @Configuration and @Bean?", "Configuration marks a class that declares bean definitions, and Bean tells Spring to register the returned object as a managed bean.", "Intermediate"],
      ["What is component scanning?", "Component scanning searches configured packages for stereotype-annotated classes and registers them as beans automatically.", "Beginner"],
      ["How does Spring handle configuration properties?", "It can bind externalized properties from files, env vars, or command-line arguments into strongly typed classes using @ConfigurationProperties or inject them directly with @Value.", "Intermediate"],
      ["What is Actuator?", "Actuator adds production endpoints and metrics for health, info, tracing, and operational insight into a running Spring Boot app.", "Beginner"],
      ["What is Spring Data JPA?", "Spring Data JPA generates repository implementations and query behavior on top of JPA, reducing boilerplate for CRUD and common query patterns.", "Intermediate"],
      ["What is the difference between CrudRepository and JpaRepository?", "JpaRepository extends simpler repository interfaces with JPA-specific features like flushing and batch operations.", "Intermediate"],
      ["What is lazy loading in JPA and why can it surprise you?", "Lazy loading defers fetching related entities until accessed, which can trigger extra queries or fail outside an open persistence context.", "Intermediate"],
      ["What is the N+1 query problem?", "It happens when loading one set of parent rows triggers an extra query per parent for related data, creating avoidable database overhead.", "Intermediate"],
      ["How can you address the N+1 query problem in Spring applications?", "Use fetch joins, entity graphs, batching, tailored DTO queries, or adjust access patterns so related data is loaded intentionally.", "Advanced"],
      ["What does @EnableScheduling support?", "It enables scheduled tasks such as fixed-rate, fixed-delay, or cron-based jobs through annotations like @Scheduled.", "Intermediate"],
      ["What is the difference between WebMVC and WebFlux?", "WebMVC is the traditional servlet-based model, while WebFlux is a reactive stack designed for non-blocking pipelines and backpressure-aware streams.", "Advanced"],
      ["What is BeanPostProcessor used for?", "A BeanPostProcessor can inspect or modify beans before and after initialization, often powering framework behavior and custom extensions.", "Advanced"],
      ["How does Spring Security fit into a Boot app?", "Spring Security provides authentication, authorization, filter chains, and policy enforcement for HTTP endpoints and method-level security.", "Intermediate"],
      ["What is a filter chain in Spring Security?", "It is an ordered sequence of servlet filters that inspect, authenticate, authorize, and otherwise process incoming requests before controller code runs.", "Advanced"],
      ["What is the difference between @Mock and @MockBean in tests?", "Mock creates a Mockito mock in plain unit tests, while MockBean replaces a bean in the Spring application context for slice or integration tests.", "Intermediate"],
      ["Why is constructor injection friendlier for testing?", "It lets tests instantiate classes directly with fakes or mocks without reflection or framework involvement.", "Beginner"],
      ["What is Spring AOP typically used for?", "Spring AOP is used for cross-cutting concerns like transactions, logging, metrics, retries, and security checks.", "Intermediate"],
      ["What is the role of DispatcherServlet?", "DispatcherServlet is the front controller in Spring MVC that routes requests to handlers, applies interceptors, and coordinates response rendering.", "Intermediate"],
      ["What are starter dependencies in Spring Boot?", "Starters are curated dependency bundles that pull in a consistent set of libraries for a feature area such as web, data-jpa, or security.", "Beginner"]
    ]
  },
  {
    topic: "SQL & Persistence",
    items: [
      ["What is normalization?", "Normalization organizes relational data to reduce redundancy and anomalies, commonly by splitting data into related tables with defined keys.", "Beginner"],
      ["What is denormalization and when might it help?", "Denormalization intentionally introduces redundancy to simplify reads or improve performance for specific access patterns.", "Intermediate"],
      ["What is the difference between INNER JOIN and LEFT JOIN?", "INNER JOIN returns matching rows from both sides, while LEFT JOIN keeps all rows from the left side and fills unmatched right-side columns with null.", "Beginner"],
      ["What is an index and why does it help?", "An index is a data structure that speeds up lookups and ordering on selected columns, trading storage and write overhead for faster reads.", "Beginner"],
      ["What is the difference between clustered and non-clustered indexes at a high level?", "A clustered index influences the physical or primary ordering of table data, while a non-clustered index stores a separate lookup structure.", "Intermediate"],
      ["What causes a full table scan?", "A full table scan happens when the optimizer decides reading all rows is cheaper than using an index or when a useful index does not exist.", "Intermediate"],
      ["What is a transaction?", "A transaction is a unit of work whose changes are committed together or rolled back together to preserve data integrity.", "Beginner"],
      ["What does ACID stand for?", "Atomicity, Consistency, Isolation, and Durability.", "Beginner"],
      ["What is transaction isolation level?", "Isolation level controls how transaction interactions appear to each other, balancing consistency guarantees against concurrency.", "Intermediate"],
      ["What are dirty reads, non-repeatable reads, and phantom reads?", "They are anomalies where one transaction sees uncommitted data, sees different values on reread, or sees rows appear or disappear across repeated queries.", "Intermediate"],
      ["What is optimistic locking?", "Optimistic locking assumes conflicts are rare and detects them at update time, often using a version column.", "Intermediate"],
      ["What is pessimistic locking?", "Pessimistic locking acquires locks earlier to prevent conflicting changes, usually at the cost of reduced concurrency.", "Intermediate"],
      ["Why are prepared statements important?", "Prepared statements reduce SQL injection risk and can improve performance by separating query structure from parameter values.", "Beginner"],
      ["What is the difference between DELETE, TRUNCATE, and DROP?", "DELETE removes rows and can be filtered, TRUNCATE removes all rows quickly while keeping the table, and DROP removes the table definition itself.", "Beginner"],
      ["What is a composite key?", "A composite key is a key made of multiple columns whose combination uniquely identifies a row.", "Intermediate"],
      ["What is the difference between one-to-many and many-to-many mapping?", "One-to-many means each parent can have many children but each child has one parent, while many-to-many means both sides can reference many of the other and usually need a join table.", "Beginner"],
      ["What is lazy versus eager fetching in ORM terms?", "Lazy fetching defers related data until it is accessed, while eager fetching loads it immediately with the parent.", "Intermediate"],
      ["Why can ORM-generated SQL still need review?", "The ORM abstracts mapping, not database performance, so query shape, indexes, fetch strategy, and batching still need deliberate design.", "Intermediate"],
      ["What is a connection pool?", "A connection pool reuses open database connections so the app does not pay full setup cost on every request.", "Beginner"],
      ["What is an execution plan?", "An execution plan shows how the database intends to run a query, including index usage, join strategy, and estimated row counts.", "Intermediate"],
      ["What is a covering index?", "A covering index contains all columns needed for a query so the database can answer it without reading the base table rows.", "Advanced"],
      ["What is pagination and what can go wrong with offset pagination?", "Pagination splits large result sets into pages, but large offsets can become slow and unstable if data changes between requests.", "Intermediate"],
      ["When is keyset pagination better?", "Keyset pagination is better for large, ordered result sets where you want stable next-page performance based on the last seen key.", "Advanced"],
      ["What is a foreign key?", "A foreign key enforces that values in one table reference valid rows in another table, helping maintain referential integrity.", "Beginner"],
      ["Why is idempotency important for write endpoints backed by SQL?", "It prevents accidental duplicate effects when clients retry requests due to timeouts or transient failures.", "Intermediate"],
      ["What is a database migration?", "A migration is a versioned schema change script that lets teams evolve the database safely and repeatably across environments.", "Beginner"],
      ["What is the difference between JDBC and JPA?", "JDBC is the low-level API for executing SQL directly, while JPA is a higher-level object-relational abstraction built on top of persistence providers.", "Beginner"],
      ["What are batching and bulk updates?", "Batching sends multiple similar statements efficiently, while bulk updates modify many rows in a single statement and may bypass entity lifecycle expectations.", "Advanced"],
      ["What is eventual consistency and when might it appear around persistence?", "Eventual consistency means reads may temporarily lag writes in distributed systems or asynchronous pipelines before converging.", "Advanced"],
      ["What is a read replica and what tradeoff does it introduce?", "A read replica offloads read traffic from the primary database, but replication lag can make data briefly stale.", "Advanced"]
    ]
  },
  {
    topic: "Testing",
    items: [
      ["What is the difference between unit, integration, and end-to-end tests?", "Unit tests focus on isolated logic, integration tests validate collaboration with real components like databases or HTTP layers, and end-to-end tests exercise the full system from the outside.", "Beginner"],
      ["Why are deterministic tests important?", "Deterministic tests produce the same result every run, which builds trust and makes failures actionable instead of flaky.", "Beginner"],
      ["What makes a good unit test?", "A good unit test is focused, readable, fast, deterministic, and asserts meaningful behavior rather than implementation noise.", "Beginner"],
      ["What is mocking?", "Mocking replaces real collaborators with test doubles so you can control dependencies and verify interactions in isolated tests.", "Beginner"],
      ["When can too much mocking become a problem?", "Over-mocking can couple tests to implementation details, hide integration problems, and make refactoring painful.", "Intermediate"],
      ["What is the Arrange-Act-Assert pattern?", "It structures tests into setup, execution, and verification stages so intent stays clear.", "Beginner"],
      ["What is TDD?", "Test-driven development is a cycle of writing a failing test, making it pass with the simplest code, and then refactoring safely.", "Beginner"],
      ["What is a slice test in Spring Boot?", "A slice test loads only a focused part of the application, such as MVC or JPA, to keep tests faster while still using framework wiring.", "Intermediate"],
      ["What is @SpringBootTest used for?", "SpringBootTest loads the full application context and is useful for high-confidence integration testing, though it is slower than narrower test styles.", "Intermediate"],
      ["Why are in-memory databases not always enough?", "They can differ from production databases in SQL dialect, transaction behavior, indexing, and query plans, so some issues only appear against the real engine.", "Intermediate"],
      ["What is contract testing?", "Contract testing verifies that two services agree on request and response expectations without requiring full end-to-end environments.", "Advanced"],
      ["What is mutation testing?", "Mutation testing intentionally changes code to see whether tests catch the changes, exposing weak assertions and coverage gaps.", "Advanced"],
      ["Why is code coverage alone not a quality metric?", "Coverage shows which lines executed, not whether tests assert the right behavior or cover meaningful edge cases.", "Intermediate"],
      ["How do you test asynchronous code?", "Use controlled executors, timeouts, latches, futures, or polling utilities so the test can observe completion reliably without flaky sleeps.", "Intermediate"],
      ["What is a test pyramid?", "The test pyramid suggests many fast unit tests, fewer integration tests, and a small number of expensive end-to-end tests.", "Beginner"],
      ["What is the difference between stubs, mocks, fakes, and spies?", "Stubs return canned responses, mocks verify interactions, fakes provide lightweight working implementations, and spies wrap real objects while recording calls.", "Intermediate"],
      ["Why should tests avoid sharing state?", "Shared state can make tests order-dependent and flaky because one test's setup or cleanup affects another's assumptions.", "Beginner"],
      ["What are parameterized tests useful for?", "They let one test body run against many inputs and expected outcomes, which reduces duplication and improves coverage of edge cases.", "Beginner"],
      ["What is a golden master test?", "A golden master test captures current behavior output so refactors can be validated against a stable baseline, especially in legacy code.", "Advanced"],
      ["How do you test REST controllers in Spring?", "For controller-focused tests you can use MockMvc or WebTestClient, asserting request handling, validation, status codes, and serialized responses.", "Intermediate"],
      ["What should integration tests verify around persistence?", "They should verify mapping correctness, query behavior, transaction boundaries, and database-specific constraints or performance-sensitive access patterns.", "Intermediate"],
      ["What is flakiness and how do you reduce it?", "Flakiness is intermittent failure unrelated to code changes; reduce it by controlling time, randomness, concurrency, external dependencies, and shared state.", "Intermediate"],
      ["Why can testing against production-like data matter?", "Realistic volumes and shapes reveal issues in encoding, edge cases, indexing, memory usage, and unexpected schema assumptions.", "Advanced"],
      ["What is property-based testing?", "Property-based testing generates many inputs to validate general invariants instead of a few hand-picked examples.", "Advanced"],
      ["What is the role of assertions in tests?", "Assertions define the expected behavior and are the actual proof that the system did what the test intended.", "Beginner"],
      ["Why is it helpful to test behavior instead of private methods?", "Behavior-focused tests remain stable through refactoring and validate what callers care about rather than internal mechanics.", "Intermediate"],
      ["What is a smoke test?", "A smoke test is a small high-level test that checks whether the system basically starts and its critical path works.", "Beginner"],
      ["How do testcontainers help Java teams?", "Testcontainers spins up real dependencies like databases or brokers in containers so integration tests better match production behavior.", "Intermediate"],
      ["What is a regression test?", "A regression test reproduces a previously found bug so it stays fixed in future changes.", "Beginner"],
      ["What should you do when a test fails intermittently in CI only?", "Investigate timing, environment assumptions, shared resources, and logging first, then reproduce with isolation rather than blindly increasing retries.", "Advanced"]
    ]
  },
  {
    topic: "API & System Design",
    items: [
      ["What makes a good REST API?", "A good REST API uses clear resource modeling, predictable status codes, consistent naming, good documentation, and safe handling of validation and errors.", "Beginner"],
      ["What is idempotency in HTTP?", "An idempotent operation can be repeated without changing the final result beyond the first successful application.", "Beginner"],
      ["Why are GET requests expected to be side-effect free?", "Clients, caches, and intermediaries assume GET is safe to repeat, so changing state in a GET handler creates surprising and risky behavior.", "Beginner"],
      ["What is the difference between authentication and authorization?", "Authentication verifies who the caller is, while authorization determines what that caller is allowed to do.", "Beginner"],
      ["What status codes would you commonly use for create, update, and validation errors?", "201 Created is common for successful creates, 200 or 204 for successful updates depending on response body needs, and 400 or 422 for validation problems.", "Beginner"],
      ["What is pagination and why should APIs support it?", "Pagination limits response size, improves latency, reduces memory usage, and makes large datasets practical for clients to consume.", "Beginner"],
      ["What is caching and where can it help in a Java backend?", "Caching stores reusable results closer to the consumer or application layer so repeated expensive work can be avoided.", "Intermediate"],
      ["What tradeoff does caching introduce?", "Caching improves latency and load but adds invalidation complexity, staleness risk, and extra observability needs.", "Intermediate"],
      ["What is rate limiting?", "Rate limiting constrains how frequently clients can call an endpoint, protecting system capacity and fairness.", "Intermediate"],
      ["What is backpressure?", "Backpressure is a mechanism for preventing fast producers from overwhelming slower consumers in asynchronous or streaming systems.", "Advanced"],
      ["What is circuit breaking?", "Circuit breaking stops repeatedly calling a failing dependency for a period, allowing fast failure and recovery instead of cascading timeouts.", "Intermediate"],
      ["What is eventual consistency?", "Eventual consistency means different parts of a distributed system may temporarily disagree but converge after propagation completes.", "Advanced"],
      ["How would you design a notification service?", "Model channels, preferences, delivery attempts, templates, and retry policies explicitly, then decouple ingestion from dispatch with durable queues and observability.", "Advanced"],
      ["How would you make a job scheduler reliable?", "Persist job state, use distributed locking or lease ownership, make handlers idempotent, support retries with backoff, and capture metrics around lag and failure.", "Advanced"],
      ["What is horizontal scaling?", "Horizontal scaling increases capacity by adding more instances rather than making a single machine larger.", "Beginner"],
      ["What is vertical scaling?", "Vertical scaling increases capacity by giving a single machine more CPU, memory, or storage.", "Beginner"],
      ["What is load balancing?", "Load balancing distributes incoming traffic across instances to improve throughput, resilience, and resource utilization.", "Beginner"],
      ["What is a message broker used for?", "A message broker buffers and routes messages between producers and consumers so systems can be decoupled and scaled independently.", "Intermediate"],
      ["What is the difference between synchronous and asynchronous communication?", "Synchronous calls wait for an immediate response, while asynchronous communication lets work continue and results arrive later.", "Beginner"],
      ["Why does idempotency matter for distributed systems?", "Retries are common when networks fail, so idempotency prevents duplicated side effects when the same request is processed more than once.", "Intermediate"],
      ["What is observability?", "Observability is the ability to understand system behavior through logs, metrics, traces, and meaningful context.", "Intermediate"],
      ["What metrics would you watch on a Java API service?", "Latency, throughput, error rate, saturation, GC behavior, heap usage, thread pool pressure, and downstream dependency health are common starting points.", "Intermediate"],
      ["What is blue-green deployment?", "Blue-green deployment keeps two production environments so traffic can switch from the old version to the new one with fast rollback if needed.", "Intermediate"],
      ["What is canary deployment?", "Canary deployment rolls out a change to a small subset of traffic first so you can detect issues before full release.", "Intermediate"],
      ["What is the CAP theorem at a high level?", "In a distributed system facing a network partition, you must trade off between consistency and availability.", "Advanced"],
      ["What is sharding?", "Sharding splits data across multiple databases or partitions so the system can scale beyond a single node's limits.", "Advanced"],
      ["What is a saga pattern?", "A saga coordinates a long-running business process as a sequence of local transactions with compensating actions instead of a single global transaction.", "Advanced"],
      ["How would you handle duplicate event delivery?", "Make consumers idempotent, track processed identifiers where needed, and design messages so repeats do not corrupt state.", "Advanced"],
      ["What is an API gateway?", "An API gateway provides a single entry point for routing, authentication, rate limiting, and cross-cutting policies across services.", "Intermediate"],
      ["How would you explain eventual consistency to a product manager?", "I would say the system may briefly show slightly old data after a change, but it will catch up automatically, which often buys us better scale and resilience.", "Beginner"]
    ]
  },
  {
    topic: "Behavioral & Interview Strategy",
    items: [
      ["How would you explain a difficult bug you fixed in an interview?", "Use a clear story: the context, the symptoms, how you narrowed it down, the technical fix, and the measurable impact or lesson learned.", "Beginner"],
      ["What makes a strong answer to 'tell me about yourself' for a Java developer?", "A strong answer ties your recent experience, core Java/Spring strengths, the kind of systems you have built, and why that background fits the role.", "Beginner"],
      ["How should you answer a question when you do not know the exact detail?", "State what you do know, make a reasonable inference, explain how you would verify it, and avoid bluffing.", "Beginner"],
      ["How do you talk about tradeoffs in system design answers?", "Name the goal, the main constraints, the options you considered, and why you chose one while acknowledging what you gave up.", "Intermediate"],
      ["What is the STAR format and when is it useful?", "STAR stands for Situation, Task, Action, and Result, and it helps keep behavioral answers concise and evidence-based.", "Beginner"],
      ["How should you discuss a production incident you were involved in?", "Focus on ownership, diagnosis, communication, mitigation, follow-up improvements, and what changed afterward.", "Intermediate"],
      ["What kind of examples should you prepare before interviews?", "Prepare stories about bugs, scaling work, team conflict, mentoring, technical decisions, missed deadlines, and times you improved quality or delivery.", "Beginner"],
      ["How do you show seniority without sounding inflated?", "Be specific about scope, decisions, collaboration, and outcomes instead of making vague claims about leadership or expertise.", "Intermediate"],
      ["How would you explain a legacy modernization project?", "Describe the starting pain, the target architecture, the incremental migration plan, and how you managed risk while delivering value along the way.", "Intermediate"],
      ["What does a good code review example sound like in an interview?", "Describe how you found a real risk, explained it constructively, aligned on a fix, and improved quality or team understanding.", "Beginner"],
      ["How should you answer 'why are you looking to move'?", "Keep it positive and forward-looking, focusing on growth, problem space, scope, team fit, or technology direction rather than venting about your current role.", "Beginner"],
      ["What is a good way to discuss performance improvements you made?", "Quantify the baseline, the bottleneck, your investigation process, the changes you made, and the measurable result.", "Intermediate"],
      ["How can you demonstrate product thinking as a backend engineer?", "Show that you understand user impact, failure modes, operational tradeoffs, and how technical choices affect delivery speed and customer experience.", "Intermediate"],
      ["What if an interviewer challenges your design?", "Treat it like collaboration, not conflict: clarify assumptions, explain tradeoffs, and adapt if new constraints change the best answer.", "Intermediate"],
      ["How should you talk about mistakes?", "Choose a real example, own it clearly, explain the impact honestly, and focus on what changed in your process afterward.", "Beginner"],
      ["Why is clarity important in technical interviews?", "Clear communication lets interviewers assess how you reason, collaborate, and de-risk work, not just whether you know jargon.", "Beginner"],
      ["How do you balance speed and quality when answering delivery questions?", "Explain how you reduce scope intentionally, automate checks, sequence risk early, and keep quality gates proportional to impact.", "Intermediate"],
      ["What is a good answer structure for architecture questions?", "State assumptions, define requirements, propose a baseline design, then walk through scaling, failure handling, data, and tradeoffs.", "Intermediate"],
      ["How should you discuss mentorship?", "Describe how you helped someone grow through context, feedback, pairing, or systems improvements rather than claiming vague mentorship.", "Beginner"],
      ["What questions should you ask the interviewer?", "Ask about system complexity, team ownership, production practices, engineering quality, collaboration model, and how success is measured in the role.", "Beginner"],
      ["How should you handle coding interview dead ends?", "Narrate your thinking, simplify the problem, test assumptions, and pivot deliberately instead of going silent.", "Intermediate"],
      ["What is a good way to explain concurrency experience in interviews?", "Anchor it in a concrete production problem, such as throughput, latency, synchronization bugs, or parallel processing, and describe the constraints and outcome.", "Intermediate"],
      ["How can you show judgment in API design discussions?", "Talk about versioning, backward compatibility, failure behavior, consumer experience, and operational visibility, not just endpoint shapes.", "Intermediate"],
      ["How should you frame working across teams?", "Focus on shared goals, dependency management, communication loops, and how you reduced surprises or unblockers across teams.", "Beginner"],
      ["What does a strong answer about testing culture include?", "It should connect design for testability, layered test strategy, CI confidence, and the balance between speed and reliability.", "Intermediate"],
      ["How do you present a project you are proud of?", "Pick one with clear technical depth and user impact, then explain the problem, your decisions, the tradeoffs, and the measurable result.", "Beginner"],
      ["What should you do if a live interviewer gives ambiguous requirements?", "Clarify them early and restate assumptions so the conversation stays aligned and your solution can be evaluated fairly.", "Beginner"],
      ["How can you stand out in a Java interview loop?", "Combine solid fundamentals with calm communication, practical tradeoff reasoning, and examples that prove you can ship and operate real systems.", "Intermediate"],
      ["Why does tailoring answers to the company matter?", "It shows you understand their problem space and can connect your experience to the systems, scale, and priorities they actually have.", "Beginner"],
      ["What should you review the night before a Java interview?", "Refresh your strongest projects, core Java and Spring fundamentals, common SQL and concurrency topics, and a short set of behavioral stories you can tell cleanly.", "Beginner"]
    ]
  }
];

const generatedQuestions = topicBlueprints.flatMap(({ topic, items }, topicIndex) =>
  items.map(([prompt, answer, difficulty], index) => ({
    id: `${topicIndex + 1}-${index + 1}`,
    topic,
    prompt,
    answer,
    difficulty
  }))
);

const scenarioTemplates = [
  {
    topic: "Core Java",
    difficulty: "Intermediate",
    stems: [
      "A teammate wants to use {concept} everywhere. How would you explain when it helps and when it hurts?",
      "In a code review, how would you justify choosing {concept} for a backend service?",
      "What pitfalls would you watch for when introducing {concept} into an existing Java codebase?"
    ],
    concepts: [
      "Optional as a return type",
      "records for DTOs",
      "sealed classes for domain hierarchies",
      "interfaces with default methods",
      "reflection-based utilities"
    ],
    answers: {
      "Optional as a return type": "Optional is helpful when absence is a valid return state, but using it for fields, parameters, or collections usually adds ceremony without improving clarity.",
      "records for DTOs": "Records are great for immutable data carriers with value semantics, but they are less suitable when you need mutable state, framework constraints, or custom inheritance.",
      "sealed classes for domain hierarchies": "Sealed classes help when the set of subtypes should be explicit and closed, especially for domain modeling and exhaustive pattern matching, but they add ceremony if the hierarchy needs to stay open.",
      "interfaces with default methods": "Default methods are useful for evolving APIs without breaking implementers, but relying on them for heavy shared behavior can blur contracts and create inheritance surprises.",
      "reflection-based utilities": "Reflection can reduce boilerplate for generic tooling, but it weakens encapsulation, can be slower, and often makes refactoring and debugging harder."
    }
  },
  {
    topic: "Collections",
    difficulty: "Intermediate",
    stems: [
      "You are optimizing a feature that depends on {concept}. What tradeoff would you explain to the team?",
      "What interview answer would you give if asked why you selected {concept} in production?",
      "How would you decide whether {concept} is the right collection choice for a new feature?"
    ],
    concepts: [
      "ArrayList",
      "LinkedHashMap",
      "ConcurrentHashMap",
      "TreeSet",
      "CopyOnWriteArrayList"
    ],
    answers: {
      "ArrayList": "ArrayList is usually the default list because indexed reads are fast and memory overhead is low, but insertions and removals in the middle can be expensive because elements shift.",
      "LinkedHashMap": "LinkedHashMap is useful when iteration order matters or you want access-order behavior for an LRU cache, but it adds some overhead compared with a plain HashMap.",
      "ConcurrentHashMap": "ConcurrentHashMap is the right fit for shared mutable maps in multi-threaded code, but you still need to think about compound operations that span multiple calls.",
      "TreeSet": "TreeSet is helpful when you need sorted data or range navigation, but it has logarithmic operations and requires a consistent ordering strategy.",
      "CopyOnWriteArrayList": "CopyOnWriteArrayList shines when reads dominate and writes are rare, but frequent writes are costly because each mutation copies the backing array."
    }
  },
  {
    topic: "Concurrency",
    difficulty: "Advanced",
    stems: [
      "A production service slowed down after introducing {concept}. How would you investigate and explain the likely tradeoffs?",
      "When would you reject {concept} even though it sounds technically correct?",
      "How would you compare {concept} with a simpler alternative during an interview?"
    ],
    concepts: [
      "parallel streams",
      "a fixed thread pool",
      "volatile state",
      "a read-write lock",
      "CompletableFuture chains"
    ],
    answers: {
      "parallel streams": "Parallel streams can help with large CPU-bound, stateless work, but they often backfire for small tasks, blocking operations, or services already using the common pool heavily.",
      "a fixed thread pool": "A fixed thread pool protects resources and avoids unbounded thread creation, but the right size depends on whether tasks are CPU-bound or mostly waiting on I/O.",
      "volatile state": "Volatile helps with visibility for simple state flags, but it does not make compound updates atomic, so using it for counters or multi-step invariants is unsafe.",
      "a read-write lock": "A read-write lock can improve read-heavy contention, but it adds complexity and may not outperform simpler locking if write traffic or critical sections are substantial.",
      "CompletableFuture chains": "CompletableFuture can make async composition elegant, but long chains become hard to debug if execution pools, exception handling, and blocking boundaries are not explicit."
    }
  },
  {
    topic: "Spring",
    difficulty: "Intermediate",
    stems: [
      "A backend team is debating whether to rely on {concept}. How would you frame the decision?",
      "What would you say in an interview if asked when {concept} becomes risky?",
      "How would you explain the operational impact of {concept} in a Spring application?"
    ],
    concepts: [
      "@Transactional on service methods",
      "Spring Data derived queries",
      "@SpringBootTest",
      "profiles for environment config",
      "WebFlux"
    ],
    answers: {
      "@Transactional on service methods": "Transactional boundaries belong where business work should commit or roll back together, but you need to watch proxy limitations, long-running transactions, and accidental lazy loading.",
      "Spring Data derived queries": "Derived queries are productive for common cases, but once the query shape gets subtle or performance-sensitive explicit JPQL or SQL is often clearer.",
      "@SpringBootTest": "SpringBootTest gives high confidence for full-context behavior, but using it everywhere slows feedback loops and makes failures harder to localize.",
      "profiles for environment config": "Profiles help keep environment-specific behavior explicit, but too many profile combinations can become hard to reason about and test.",
      "WebFlux": "WebFlux is valuable for non-blocking pipelines and high-concurrency I/O workloads, but it adds cognitive overhead and is a poor fit if the stack remains mostly blocking."
    }
  },
  {
    topic: "SQL & Persistence",
    difficulty: "Advanced",
    stems: [
      "You are diagnosing a slowdown related to {concept}. What would you look at first?",
      "How would you explain the tradeoffs behind {concept} to an interviewer?",
      "What mistake do teams commonly make when using {concept}?"
    ],
    concepts: [
      "an index-heavy table",
      "offset pagination",
      "optimistic locking",
      "a read replica",
      "bulk updates through JPA"
    ],
    answers: {
      "an index-heavy table": "Too many indexes can speed reads but slow writes and consume storage, so I would check write latency, index selectivity, and whether each index still serves a real query pattern.",
      "offset pagination": "Offset pagination is easy to implement but gets slower on deep pages and can produce unstable results if rows are inserted or removed between requests.",
      "optimistic locking": "Optimistic locking works well when conflicts are uncommon, but high-contention workflows can see many retries and a worse user experience.",
      "a read replica": "A read replica helps offload traffic, but replication lag means some reads may be stale, so you must decide which endpoints can tolerate that.",
      "bulk updates through JPA": "Bulk updates can be efficient, but they may bypass the persistence context and entity callbacks, so stale in-memory state and unexpected side effects are common traps."
    }
  },
  {
    topic: "Testing",
    difficulty: "Intermediate",
    stems: [
      "A test suite is struggling because of {concept}. How would you improve the situation?",
      "How would you explain the limits of {concept} in an interview?",
      "What practical rule would you use before reaching for {concept}?"
    ],
    concepts: [
      "heavy mocking",
      "@SpringBootTest everywhere",
      "coverage targets",
      "sleep-based async tests",
      "shared test fixtures"
    ],
    answers: {
      "heavy mocking": "Heavy mocking can keep tests fast but often couples them to implementation details, so I would prefer simpler collaborators, more slice tests, or clearer seams where it matters.",
      "@SpringBootTest everywhere": "Using the full Spring context for every test raises confidence but slows the suite and hides ownership, so I would keep it for real integration boundaries and use narrower tests elsewhere.",
      "coverage targets": "Coverage targets can be useful as a floor, but they should never replace meaningful assertions, good edge cases, and tests that capture business risk.",
      "sleep-based async tests": "Sleeping introduces flakiness because timing varies by machine and load, so I would use latches, futures, or polling with timeouts tied to actual completion.",
      "shared test fixtures": "Shared fixtures reduce setup duplication, but they can create hidden coupling and brittle tests if one case mutates state another case assumes."
    }
  }
];

const scenarioQuestions = scenarioTemplates.flatMap((template, templateIndex) =>
  template.stems.flatMap((stem, stemIndex) =>
    template.concepts.map((concept, conceptIndex) => ({
      id: `s-${templateIndex + 1}-${stemIndex + 1}-${conceptIndex + 1}`,
      topic: template.topic,
      difficulty: template.difficulty,
      prompt: stem.replace("{concept}", concept),
      answer: template.answers[concept]
    }))
  )
);

const questions = [...generatedQuestions, ...scenarioQuestions];

const state = {
  currentQuestionId: null,
  filteredQuestions: [...questions],
  progress: loadProgress()
};

const elements = {
  questionCount: document.querySelector("#question-count"),
  reviewedCount: document.querySelector("#reviewed-count"),
  masteredCount: document.querySelector("#mastered-count"),
  searchInput: document.querySelector("#search-input"),
  difficultySelect: document.querySelector("#difficulty-select"),
  topicSelect: document.querySelector("#topic-select"),
  statusSelect: document.querySelector("#status-select"),
  topicPills: document.querySelector("#topic-pills"),
  questionTopic: document.querySelector("#question-topic"),
  questionDifficulty: document.querySelector("#question-difficulty"),
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

function getTopics() {
  return [...new Set(questions.map((question) => question.topic))].sort();
}

function populateTopics() {
  getTopics().forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    elements.topicSelect.append(option);

    const pill = document.createElement("button");
    pill.className = "pill";
    pill.type = "button";
    pill.textContent = topic;
    pill.addEventListener("click", () => {
      elements.topicSelect.value = topic;
      applyFilters();
    });
    elements.topicPills.append(pill);
  });
}

function applyFilters() {
  const searchValue = elements.searchInput.value.trim().toLowerCase();
  const difficulty = elements.difficultySelect.value;
  const topic = elements.topicSelect.value;
  const status = elements.statusSelect.value;

  state.filteredQuestions = questions.filter((question) => {
    const matchesSearch =
      !searchValue ||
      [question.prompt, question.answer, question.topic, question.difficulty]
        .join(" ")
        .toLowerCase()
        .includes(searchValue);
    const matchesDifficulty = difficulty === "all" || question.difficulty === difficulty;
    const matchesTopic = topic === "all" || question.topic === topic;
    const questionStatus = getQuestionStatus(question.id);
    const matchesStatus =
      status === "all" ||
      (status === "reviewed" && questionStatus === "reviewed") ||
      (status === "mastered" && questionStatus === "mastered") ||
      (status === "unseen" && questionStatus === "unseen");

    return matchesSearch && matchesDifficulty && matchesTopic && matchesStatus;
  });

  renderDeckSummary();
  renderQuestionList();

  const currentStillVisible = state.filteredQuestions.some(
    (question) => question.id === state.currentQuestionId
  );

  if (!currentStillVisible) {
    pickNextQuestion();
  }
}

function renderDeckSummary() {
  const total = state.filteredQuestions.length;
  const byDifficulty = ["Beginner", "Intermediate", "Advanced"]
    .map((difficulty) => {
      const count = state.filteredQuestions.filter((question) => question.difficulty === difficulty).length;
      return `${difficulty}: ${count}`;
    })
    .join(" · ");

  elements.deckSummary.textContent =
    total > 0
      ? `${total} questions in the current deck. ${byDifficulty}.`
      : "No questions match the current filters yet.";
}

function pickNextQuestion() {
  if (state.filteredQuestions.length === 0) {
    state.currentQuestionId = null;
    renderCurrentQuestion();
    return;
  }

  const unseenFirst = state.filteredQuestions.filter(
    (question) => getQuestionStatus(question.id) === "unseen"
  );
  const source = unseenFirst.length > 0 ? unseenFirst : state.filteredQuestions;
  const randomIndex = Math.floor(Math.random() * source.length);
  state.currentQuestionId = source[randomIndex].id;
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const question = questions.find((item) => item.id === state.currentQuestionId);

  if (!question) {
    elements.questionTopic.textContent = "No match";
    elements.questionDifficulty.textContent = "Update filters";
    elements.questionPrompt.textContent = "No question is available for the current selection.";
    elements.answerText.textContent = "";
    elements.answerBox.classList.add("answer--hidden");
    return;
  }

  elements.questionTopic.textContent = question.topic;
  elements.questionDifficulty.textContent = question.difficulty;
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

    meta.append(topic, difficulty);

    const title = document.createElement("h3");
    title.textContent = question.prompt;

    const status = document.createElement("div");
    status.className = "question-list__status";
    status.textContent = `Status: ${getQuestionStatus(question.id)}`;

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
  [elements.searchInput, elements.difficultySelect, elements.topicSelect, elements.statusSelect].forEach(
    (element) => {
      element.addEventListener("input", applyFilters);
      element.addEventListener("change", applyFilters);
    }
  );

  elements.revealButton.addEventListener("click", () => {
    if (!state.currentQuestionId) {
      return;
    }
    elements.answerBox.classList.remove("answer--hidden");
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
  populateTopics();
  bindEvents();
  updateProgressUI();
  applyFilters();
  pickNextQuestion();
}

init();
