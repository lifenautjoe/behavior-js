behavior-js
===============

Motivation
--------
Provide a minimal way to represent a behavior, whether it's allowed and the exceptions to the allowance

Installation
--------

``` bash
npm install behavior-js
```

Usage
--------
* [Instantiation](#instantiation)
* [Evaluation](#evaluation)
* [Sample use case](#sample-use-case)

## Instantiation

### new Behavior(allowed : boolean, exceptions : array | string)

#### Single exception

**Let**

``` js
// Whether the behavior is allowed
var politenessAllowed = true;

// The exception to the behavior
var politenessException = 'crude honesty';
```
**Instantiation**
```js
var politeness = new Behavior(politenessAllowed,politenessException);
```

#### Multiple exceptions

**Let**

``` js
// Whether the behavior is allowed
var leadershipAllowed = true;

// The exceptions to the behavior
var leadershipExceptions = [
	'ego',
	'superiority'
];
```
**Instantiation**
```js
var leadership = new Behavior(leadershipAllowed,leadershipExceptions);
```

## Evaluation

### behavior.isAllowed(action) : boolean

**Let**

``` js
// Whether the behavior is allowed
var agressionAllowed = false;

// The exceptions to the behavior
var agressionExceptions = [
	// These are good to have, will be allowed.
	'competitiveness',
	'power desire'
];

// The initialization
var agression = new Behavior(agressionAllowed,agressionExceptions);
```
**Evaluation with an exempted value**
```js
// Returns true
agression.isAllowed('competitiveness');
```
**Evaluation with a non-exempted value**
```js
// Returns false
agression.isAllowed('anger');
```
## Sample use case

### Background

> I have a library that parses url query parameters but I would like to
> prevent some parameters from getting parsed

### Solution

#### Instantiation

```js
// These are the query parameters we want to prevent from getting parsed
var parsingExceptions = [
	'onSuccess',
	'isNewUser'
];

// We instantiate the behavior, allow it and pass it's exceptions
var parsing = new Behavior(true,parsingExceptions);
```

#### Usage

```js
// .. somewhere in your awesome query parsing library
queryParser.parseParameter = function(name,value){
	if(parsing.isAllowed(name)){
		// Do your parsing with complete peace of mind
	}
}
```

## Tests

### Requirements

``` bash
npm install gulp typescript tslint tsd -g
npm install
```
### Run

``` bash
npm test
```

#### Author: [Joel Hernández](https://github.com/thefabulousdev)
