var Behavior = require('behavior-js');

// Whether the behavior is allowed
var politenessAllowed = true;

// The exception to the behavior
var politenessException = 'crude honesty';

// Instantiate it
var politeness = new Behavior(politenessAllowed,politenessException);

// Evaluate it
var isAllowed = politeness.isAllowed('crude honesty');
