---
title: "L1: Introduction to Parallel Computing"
sidebar:
  order: 1
---

## Course objectives

For major parts:

- Parallel arch
- Parallel computation models
- Parallel algorithm design and programming
- Performance of parallel programs

Design and write scalable parallel program, emphasis on performance

Parallel computer hardware implementation

Efficiency of running parallel programs on parallel hardware → efficiency ≠ fast

L1-L7 → Shared memory models: OpenMP, CUDA, etc

L8-L11 → Distributed memory model: MPI

## Program parallelization

**Sequential algorithm** —decompose—> **Tasks** —Schedule—> **Processes or Threads** —map—> **Physical cores/processors**

## Parallel computing

**Processing units** could be: A single processor with multiple cores, A single computer with multiple processors, A number of computers connected by a network, Combinations of the above

**Processor**: multiple cores

**Core**: single execution flow

**CPU:** processor + caches and all

**Machine**: includes VM

**Node**: machine that is connected to other machines → work together

**Interconnect**: buses, connection between different components within a machine
