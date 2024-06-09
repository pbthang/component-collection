---
title: "Syntax Cheatsheet"
description: "Syntax cheatsheet for parallel computing"
---

## OpenMP

### Critical section

```cpp
#pragma omp critical(name)
{
  // code block
}
```

### Barrier

Explicit:

```cpp
#pragma omp barrier

```

Implicit: parallel, loop single

### Atomic

```cpp
#pragma omp atomic
{
  // code block
}
```

**`atomic read`:** Read the value of a shared variable atomically

```cpp
int x;
#pragma omp atomic read
x = sharedVar; // Read the value of sharedVar atomically
```

**`atomic write`:** Update the value of a shared variable atomically

```cpp
#pragma omp atomic write
sharedVar = newValue; // Update sharedVar atomically
```

**`atomic update`:** Perform arithmetic or logical operations on a shared variable atomically

```cpp
#pragma omp atomic update
sharedVar += 2; // Atomically increment sharedVar by 2
```

**`atomic capture`:** Read the current value of a shared variable and then update it with a new value atomically.

Often used for cases where you need to retrieve and update a shared variable together.

```cpp
int oldValue;
#pragma omp atomic capture
{
    oldValue = sharedVar; // Read the current value
    sharedVar = newValue; // Update with a new value
}
```

### Reduction

Perform a reduction operation on a shared variable across multiple threads

Support `+`, `*`, `min`, `max`, `&`, `|`

```cpp
#pragma omp parallel for reduction(+:sum)
for (int i = 0; i < n; ++i) {
    sum += data[i];
}
```

### Parallel Region

Run stuff in parallel

```cpp
omp_set_num_thread(4);
#pragma omp parallel
{
  // code block
}
```

### Parallel Sections

```cpp
#pragma omp parallel sections
{
    #pragma omp section
    {
        printf ("id = %d, \n", omp_get_thread_num());
    }

    #pragma omp section
    {
        printf ("id = %d, \n", omp_get_thread_num());
    }
}
```

### Parallel For

Parallelize for loops

```cpp
#pragma omp parallel
{
  int id = omp_get_thread_num();
  cout << id << endl;
  #pragma omp for
  for (int i = 0; i < 100; i++) {
    // do stuff
  }
}

// Or
#pragma omp parallel for
for (int i = 0; i < 100; i++) {
  // do stuff
}
```

The **`collapse`** clause is used to convert a nested loop into a single loop then parallelize it.

```cpp
#pragma omp parallel for collapse(2)
for (int i = 0; i < 4; i++)
{
    for (int j = 0; j < 5; j++)
    {
        // do stuff
    }
}
```

### Master

Code is run only by master thread (ID = 0)

```cpp
#pragma omp master
{
  // code block
}
```

### Single

Code is run by only 1 thread (not necessarily master)

```cpp
#pragma omp parallel
{
    // Code executed by all threads

    #pragma omp single [private|firstprivate|copyprivate|nowait]
    {
        // Code executed by a single thread
    }

    // More code executed by all threads
}
```

**`private`:** Specify variables that should have private instances for each thread executing the `omp single` region.

```cpp
int sharedVar = 0;

#pragma omp parallel
{
    int privateVar; // Private to each thread

    #pragma omp single private(privateVar)
    {
        privateVar = 42; // Initialize privateVar
    }

    // privateVar is now thread-local
}
```

- Inside the `omp single` block, `privateVar` is initialized to 42, but this change does not affect the outer scope or other threads.
- After the `omp single` block, each thread has its own `privateVar` with the value 42.

**`firstprivate`:** Similar to `private` but initializes the private copies of variables with values from the outer scope.

```cpp
int initialValue = 10;

#pragma omp parallel
{
    int privateVar; // Private to each thread

    #pragma omp single firstprivate(initialValue, privateVar)
    {
        privateVar = initialValue; // Initialize privateVar with initialValue
    }

    // privateVar is now thread-local with the initial value of 10
}
```

- The `firstprivate` clause initializes the private copies of `privateVar` with the value of `initialValue`, which is 10 in this case.
- After the `omp single` block, each thread has its own `privateVar` with the initial value of 10.

**`copyprivate`:** Specify variables that should be copied from the single thread's context to the context of
all other threads after the **`omp single`** block.

```cpp
int sharedResult;

#pragma omp parallel
{
    int privateResult; // Private to each thread

    #pragma omp single copyprivate(sharedResult, privateResult)
    {
        privateResult = 42; // Compute a result
        sharedResult = privateResult; // Share the result with other threads
    }

    // sharedResult now has the same value for all threads
}
```

**`nowait`:** Indicate that other threads should not wait at a barrier after the **`omp single`** block.

## CUDA

### Kernel Launch

`void Kernel_name<<< gridsize, blocksize >>>(arg1,arg2,…);`

### Memory Management

**`cudaError_t cudaMalloc( void **devPtr, size_t size );`\*\*

- Example: `cudaMalloc( (void **) &d_c, numbytes )`;

**`cudaError_t cudaFree( void *devPtr );`**

- Example: `cudaFree( d_c )`;

**`cudaError_t cudaMemcpy( void *dst, const void src, size_t size, enum cudaMemcpyKind kind );`**

- enum `cudaMemcpyKind`
  - `cudaMemcpyHostToDevice`
  - `cudaMemcpyDeviceToHost`
  - `cudaMemcpyDeviceToDevice`
- Example: `cudaMemcpy( d_c, c, numbytes, cudaMemcpyHostToDevice);`

### Error Checking

- `cudaError_t cudaGetLastError(void);`
- `char cudaGetErrorString( cudaError_t code );`
- `printf(“%s\n”, cudaGetErrorString( cudaGetLastError() ) );`

## MPI

### Set up and tear down

```cpp
// Starts up the MPI runtime environment at the beginning of a run.
MPI_Init(&argc, &argv);

// Shuts down the MPI runtime environment at the end of a run.
MPI_Finalize();
```

### Blocking Point-to-Point

```cpp
// Send a message to one process.
int MPI_Send (void *buf, int count, MPI_Datatype datatype, int dest, int tag, MPI_Comm comm)

// Receive a message from one process.
int MPI_Recv (void *buf, int count, MPI_Datatype datatype, int source, int tag, MPI_Comm comm, MPI_Status *status)

// Count received data elements.
int MPI_Get_count (MPI_Status *status, MPI_Datatype datatype, int *count)

// Wait for message arrival.
int MPI_Probe (int source, int tag, MPI_Comm comm, MPI_Status *status)
```

**Related Functions:** `MPI_Bsend`, `MPI_Ssend`, `MPI_Rsend`, `MPI_Buffer_attach`, `MPI_Buffer_detach`, `MPI_Sendrecv`, `MPI_Sendrecv_replace`, `MPI_Get_elements`

### Non-blocking Point-to-Point

```cpp
// Begin to receive a message.
int MPI_Irecv (void *buf, int count, MPI_Datatype, int source, int tag, MPI_Comm comm, MPI_Request *request)

// Complete a non-blocking operation.
int MPI_Wait (MPI_Request *request, MPI_Status *status)

// Check or complete a non-blocking operation.
int MPI_Test (MPI_Request *request, int *flag, MPI_Status *status)

//Check message arrival.
int MPI_Iprobe (int source, int tag, MPI_Comm comm, int *flag, MPI_Status *status)
```

### Derived Datatypes

```cpp
// Create a strided homogeneous vector.
int MPI_Type_vector (int count, int blocklength, int stride, MPI_Datatype oldtype, MPI_Datatype *newtype)

// Save a derived datatype
int MPI_Type_commit (MPI_Datatype *datatype)
```

### Collective

```cpp
// Send one message to all group members.
int MPI_Bcast (void *buf, int count, MPI_Datatype datatype, int root, MPI_Comm comm)

// Receive from all group members.
int MPI_Gather (void *sendbuf, int sendcount, MPI_Datatype sendtype,
                void *recvbuf, int recvcount, MPI_Datatype recvtype, int root, MPI_Comm comm)

// Send separate messages to all group members. (§4.6)
int MPI_Scatter (void *sendbuf, int sendcount, MPI_Datatype sendtype,
                 void *recvbuf, int recvcount, MPI_Datatype recvtype, int root, MPI_Comm comm)

// Combine messages from all group members. (§4.9.1)
int MPI_Reduce (void *sendbuf, void *recvbuf, int count, MPI_Datatype datatype,
                MPI_Op op, int root, MPI_Comm comm)

// performs a reduction of a variable on all processes, and sends result to all processes (and therefore takes longer)
MPI_Allreduce(&value, &value_sum, count, MPI_INT, MPI_SUM, MPI_COMM_WORLD);
```

### Communicators

```cpp
// Count group members in communicator.
int MPI_Comm_size (MPI_Comm comm, int *size)

// Determine group rank of self. (§5.4.1)
int MPI_Comm_rank (MPI_Comm comm, int *rank)

// Duplicate with new context. (§5.4.2)
int MPI_Comm_dup (MPI_Comm comm, MPI_Comm *newcomm)

// Split into categorized sub-groups. (§5.4.2)
int MPI_Comm_split (MPI_Comm comm, int color, int key, MPI_Comm *newcomm)
```

### Communicators with Topology

```cpp
// Create with cartesian topology. (§6.5.1)
int MPI_Cart_create (MPI_Comm comm_old, int ndims, int *dims, int *periods,
                     int reorder, MPI_Comm *comm_cart)

// Suggest balanced dimension ranges. (§6.5.2)
int MPI_Dims_create (int nnodes, int ndims, int *dims)

// Determine rank from cartesian coordinates. (§6.5.4)
int MPI_Cart_rank (MPI_Comm comm, int *coords, int *rank)

// Determine cartesian coordinates from rank. (§6.5.4)
int MPI_Cart_coords (MPI_Comm comm, int rank, int maxdims, int *coords)

// Determine ranks for cartesian shift. (§6.5.5)
int MPI_Cart_shift (MPI_Comm comm, int direction, int disp, int *rank_source, int *rank_dest)

// Split into lower dimensional sub-grids. (§6.5.6)
int MPI_Cart_sub (MPI_Comm comm, int *remain_dims, MPI_Comm *newcomm)
```

### Constants

- Wildcards: `MPI_ANY_TAG`, `MPI_ANY_SOURCE`
- Elementary Datatypes
  `MPI_CHAR, MPI_SHORT, MPI_INT, MPI_LONG, MPI_UNSIGNED_CHAR, MPI_UNSIGNED_SHORT, MPI_UNSIGNED, MPI_UNSIGNED_LONG, MPI_FLOAT, MPI_DOUBLE, MPI_LONG_DOUBLE, MPI_BYTE, MPI_PACKED`
- Reserved Communicators: `MPI_COMM_WORLD`, `MPI_COMM_SELF`
- Reduction Operations
  `MPI_MAX, MPI_MIN, MPI_SUM, MPI_PROD, MPI_BAND, MPI_BOR, MPI_BXOR, MPI_LAND, MPI_LOR, MPI_LXOR`
