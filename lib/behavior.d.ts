/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/app.d.ts" />
declare class Behavior {
    allowed: boolean;
    exceptions: string[];
    constructor(allowed: boolean, exceptions: string);
    constructor(allowed: boolean, exceptions: string[]);
    isAllowed(action: string): boolean;
}
export = Behavior;
