/**
 * @author joel
 * 27-11-15.
 */
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/app.d.ts" />

import _ = require('lodash');

class Behavior {
    public allowed : boolean;
    public exceptions : string[];

    constructor(allowed : boolean, exceptions : string);
    constructor(allowed : boolean, exceptions : string[]);
    constructor(allowed : boolean, exceptions : any) {

        // Default to always allowed if no argument was given or the given argument is not a boolean
        this.allowed = (_.isUndefined(allowed) || !_.isBoolean(allowed)) ? true : allowed;

        // If we were given a string, convert it to array
        if (_.isString(exceptions)) {
            exceptions = [ exceptions ];
        }

        // Default to an empty exceptions array if no exceptions argument was given or the given argument is not an array
        this.exceptions = _.isArray(exceptions) ? exceptions : [];
    }

    /**
     * Checks whether the given behavior action is within the behavior exceptions
     * @param {string} action
     * @returns {boolean}
     * @private
     */
    private actionIsInExceptions(action : string) {
        return _.includes(this.exceptions, action);
    }

    /**
     * Checks whether a behavior action is allowed
     *
     * @param {string} action
     * @returns {boolean}
     */
    public isAllowed(action : string) {
        var actionIsInExceptions = this.actionIsInExceptions(action);
        return (this.allowed && !actionIsInExceptions) ||
            (!this.allowed && actionIsInExceptions);
    }
}

export = Behavior;
