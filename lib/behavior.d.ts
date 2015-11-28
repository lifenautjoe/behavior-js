/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/app.d.ts" />
declare class Behavior {
    allowed: boolean;
    exceptions: string[];
    constructor(allowed: boolean, exceptions: string);
    constructor(allowed: boolean, exceptions: string[]);
    private actionIsInExceptions(action);
    isAllowed(action: string): boolean;
}
export = Behavior;
