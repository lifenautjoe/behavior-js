var Behavior = require('../lib/index');
var _ = require('lodash');

describe('Behavior', function () {

    describe('when instantiating', function () {

        describe('when arguments are missing', function () {

            describe('when no "exceptions" argument was given', function () {

                var someBehavior;

                beforeEach(function () {
                    someBehavior = new Behavior(false);
                });

                it('should set an empty exceptions array', function () {
                    expect(_.isArray(someBehavior.exceptions) && someBehavior.exceptions.length == 0).toBe(true);
                });
            });

            describe('when no "allowed" argument was given', function () {

                var someBehavior;

                beforeEach(function () {
                    someBehavior = new Behavior();
                });

                it('should be allowed', function () {
                    expect(_.isBoolean(someBehavior.allowed) && someBehavior.allowed).toBe(true);
                });
            });
        });

        describe('when arguments were given', function () {

            describe('when the "exceptions" argument was given', function () {

                describe('when the given "exceptions" argument is a string', function () {

                    var someBehavior;
                    var someBehaviorException = '';


                    beforeEach(function () {
                        someBehavior = new Behavior(undefined,someBehaviorException);
                    });


                   it('should store an "exceptions" array with the given string', function () {
                        expect(_.isArray(someBehavior.exceptions) && _.includes(someBehavior.exceptions,someBehaviorException)).toBe(true);
                   });

                });

                describe('when the given "exceptions" argument is an array', function () {

                    var someBehavior;
                    var someBehaviorExceptions = [
                        'an exception'
                    ];


                    beforeEach(function () {
                        someBehavior = new Behavior(undefined,someBehaviorExceptions);
                    });

                    it('should store it', function () {
                        expect(someBehavior.exceptions).toEqual(someBehaviorExceptions);
                    });
                })
            });

            describe('when allowed was given', function () {

                var someBehavior;
                var someBehaviorAllowed = false;

                beforeEach(function () {
                    someBehavior = new Behavior(someBehaviorAllowed);
                });

                it('should store it', function () {
                    expect(someBehavior.allowed).toEqual(someBehaviorAllowed);
                });
            })
        });
    });

    describe('when allowed', function () {

        var honesty;
        var honestyAllowed = true;
        var honestyExceptions = [
            'lying'
        ];

        beforeEach(function () {
            honesty = new Behavior(honestyAllowed,honestyExceptions);
        });

        describe('when an exempted value is given', function () {

            var honestyExemption;

            beforeEach(function () {
                honestyExemption = honestyExceptions[0];
            });

            it('should return false', function () {
                var result = honesty.isAllowed(honestyExemption);
                expect(result).toBe(false);
            });

        });

        describe('when a non-exempted value is given', function () {

            var honestyNonExemption;

            beforeEach(function () {
                honestyNonExemption = 'being a nice person';
            });

            it('should return true', function () {
                var result = honesty.isAllowed(honestyNonExemption);
                expect(result).toBe(true);
            });

        })
    });

    describe('when not allowed', function () {

        var honesty;
        var honestyAllowed = false;
        var honestyExceptions = [
            'tell the truth'
        ];

        beforeEach(function () {
            honesty = new Behavior(honestyAllowed,honestyExceptions);
        });

        describe('when an exempted value is given', function () {

            var honestyExemption;

            beforeEach(function () {
                honestyExemption = honestyExceptions[0];
            });

            it('should return true', function () {
                var result = honesty.isAllowed(honestyExemption);
                expect(result).toBe(true);
            });

        });

        describe('when a non-exempted value is given', function () {

            var honestyNonExemption;

            beforeEach(function () {
                honestyNonExemption = 'being a nice person';
            });

            it('should return false', function () {
                var result = honesty.isAllowed(honestyNonExemption);
                expect(result).toBe(false);
            });

        })
    });

});
