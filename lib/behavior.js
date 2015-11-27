/**
 * @author joel
 * 27-11-15.
 */
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/app.d.ts" />
var _ = require('lodash');
var Behavior = (function () {
    function Behavior(allowed, exceptions) {
        this.allowed = (_.isUndefined(allowed) || !_.isBoolean(allowed)) ? true : allowed;
        if (_.isString(exceptions)) {
            exceptions = [exceptions];
        }
        this.exceptions = _.isArray(exceptions) ? exceptions : [];
    }
    Behavior.prototype.isAllowed = function (action) {
        return (this.allowed && !_.includes(this.exceptions, action)) ||
            (!this.allowed && _.includes(this.exceptions, action));
    };
    return Behavior;
})();
module.exports = Behavior;
