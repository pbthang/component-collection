---
title: "Relational Algebra"
---

## Relational Algebra

Basic relational algebra operators:

- Unary operators: selection $$\sigma$$, projection $$\pi$$, renaming $$\rho$$
- Binary operators: cross-product $\times$, union $\cup$, intersect $\cap$, difference $-$

**Closure property**: Relations are closed under relational operators. Operators can be composed to form relational algebra expressions

## Selection $\sigma_c$

$\sigma_c(R)$ selects tuples from relation R that satisfy the selection condition c

- $\forall t \in R, t \in \sigma_c(R)$ iff c evaluates to true on t
- The output table has the same schema as R

Selection condition is a boolean combination of terms. A term is one of the following forms:

1. attribute **op** constant (op ∈ {=, <>, <, ≤, >, ≥})
2. attribute1 **op** attribute2
3. term1 **and** term2
4. term1 **or** term2
5. **not** term1
6. **(**term1**)**

Operator precedence: (), op, not, and, or

Selection conditions with `null` values:

- Result of a comparison operation involving `null` value is unknown
- Result of an arithmetic operation involving `null` value is `null`
- Three-valued logic system: true, false, & unknown

| x       | y       | x AND y | x OR y  | NOT x   |
| ------- | ------- | ------- | ------- | ------- |
| FALSE   | FALSE   | FALSE   | FALSE   | TRUE    |
| FALSE   | UNKNOWN | FALSE   | UNKNOWN | TRUE    |
| FALSE   | TRUE    | FALSE   | TRUE    | TRUE    |
| UNKNOWN | FALSE   | FALSE   | UNKNOWN | UNKNOWN |
| UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN |
| UNKNOWN | TRUE    | UNKNOWN | TRUE    | UNKNOWN |
| TRUE    | FALSE   | FALSE   | TRUE    | FALSE   |
| TRUE    | UNKNOWN | UNKNOWN | TRUE    | FALSE   |
| TRUE    | TRUE    | TRUE    | TRUE    | FALSE   |

## Projection $\pi_\ell$

$\pi_\ell(R)$ projects attributes given by a list $\ell$ of attributes from relation R

- Each attribute in $\ell$ must be an attribute in R
- The schema of the output table is determined by $\ell$

Duplicate records are removed in the output relation

## Renaming $\rho_\ell$

$\rho_\ell(R)$ renames the attributes in R based on a list of attribute renamings $\ell$

- The schema of the output table is the same as R except that some
  attributes are renamed based on $\ell$

$\ell$ is a list of attribute renamings of the form $a_1:b_1, \cdots, a_n:b_n$

- Each renaming $a_i:b_i$ renames attribute $a_i$ to $b_i$
- Each $a_i$ must be an attribute in R
- Each attribute in R can be renamed at most once
- The order of the attribute renamings in $\ell$ does not matter

## Set Operations

**Union**: $R \cup S$ returns a relation containing all tuples that occur in R or S (or both)

**Intersection**: $R \cap S$ returns a relation containing all tuples that occur in both R and S

**Set-difference**: $R - S$ returns a relation containing all tuples in R but not in S

Union ($\cup$), intersection ($\cap$), and set-difference () operators require input relations to be union compatible

### Union Compatibility

Two relations are union compatible if

1. they have the same number of attributes, and
2. the corresponding attributes have the same domains

Union compatible relations do not necessarily use the same attribute names

### Cross Product $\times$

Consider relations R(A, B, C) and S(X, Y). Cross-product: R × S outputs a relation with schema (A, B, C, X, Y) deﬁned as follows:

$$
R \times S = \{ (a, b, c, x, y) \mid (a, b, c) \in R, (x, y) \in S \}
$$

Cross-product operation is also known as **cartesian product**

## Writing Relational Algebra Queries

A complex relational algebra (RA) query presented as a single lengthy expression can be unreadable. Two methods to improve readability of RA queries

- Method 1: Operator trees
- Method 2: Sequence of steps

## Join Operators in Relational Algebra

A join operator combines cross-product, selection, and possibly projection operators

### Inner Join (aka Join): $R \bowtie_c S$

The inner join of R and S is deﬁned as:

$$
R \bowtie_c S = \sigma_c(R\times S)
$$

### Natural Join: $R \bowtie S$

The natural join of R and S is deﬁned as:

$$
R\bowtie S = \pi_\ell(R \bowtie_c \rho_{a_1:b_1, \cdots, a_n:b_n}(S))
$$

where

- A = common attributes between R & S = $\{ a_1, a_2, \cdots, a_n \}$
- c is $\{ a_1=b_1 \ and \ a_2=b_2 \ and \ \cdots \ and \ a_n=b_n \}$
- $\ell$ is the list of attributes in R that are also in A, followed by the list of attributes in R that are not in A, and the list of attributes in S that are not in A

### Dangling Tuples

A dangling tuple is a tuple in a join operand that does not participate in the join operation

Let attr(R) denote the list of attributes in the schema of R. We say that $t \in R$ is a dangling tuple in R w.r.t. $R \bowtie_c S$ if $t \notin \pi_{attr(R)}(R \bowtie_c S)$

To preserve dangling tuples in the join result, use outer joins

### Left/Right/Full Outer Joins

Let $dangle(R\bowtie_c S)$ denote the set of dangling tuples in R w.r.t. . Thus $dangle(R\bowtie_c S) \subseteq R$

Let $null(R)$ denote a n-component tuple of null values, where n = arity of relation R

The left outer join (left join) of R and S is deﬁned as:

$$
R \rarr_c S = (R\bowtie_c S)\cup (dangle(R\bowtie_c S)\times \{null(S)\})
$$

The right outer join (right join) of R and S is deﬁned as:

$$
R \larr_c S = (R\bowtie_c S)\cup (\{null(R)\} \times dangle(S\bowtie_c R))
$$

The full outer join (full join) of R and S is deﬁned as:

$$
R\lrarr_c S = (R\rarr_c S)\cup (\{null(R)\} \times dangle(S\bowtie_c R))
$$

### Natural Left/Right/Full Outer Joins

Natural left outer join of R & S:

$$
R\rarr S = \pi_\ell(R \rarr_c \rho_{a_1:b_1, \cdots, a_n:b_n}(S))
$$

Natural right outer join of R & S:

$$
R\larr S = \pi_\ell(R \larr_c \rho_{a_1:b_1, \cdots, a_n:b_n}(S))
$$

Natural full outer join of R & S:

$$
R\lrarr S = \pi_\ell(R \lrarr_c \rho_{a_1:b_1, \cdots, a_n:b_n}(S))
$$

where

- A = common attributes between R & S = $\{ a_1, a_2, \cdots, a_n \}$
- c is $\{ a_1=b_1 \ and \ a_2=b_2 \ and \ \cdots \ and \ a_n=b_n \}$
- $\ell$ is the list of attributes in R that are also in A, followed by the list of attributes in R that are not in A, and the list of attributes in S that are not in A

## Relational Algebra Expressions (RAEs)

- A relation is a RAE
- If R is a RAE, then $\sigma_c(R)$, $\pi_\ell(R)$, and $\rho_\ell(R)$ are also RAEs
- If R and S are RAEs, then $R\cup S$, $R\cap S$, $R - S$, and $R\times S$,
  $R\bowtie_c S$, $R\rarr_c S$, $R \larr_c S$, $R \lrarr_c S$, $R \bowtie S$, $R\rarr S$, $R \larr S$
  and $R\lrarr S$ are also RAEs
- If R is a RAE, then (R) is also a RAE
