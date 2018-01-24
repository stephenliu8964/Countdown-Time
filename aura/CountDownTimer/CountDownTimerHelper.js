({
    performCalculation : function (component) {
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        timer = setInterval(function () {
            var end = new Date(component.get("v.simpleRecord.Date_Due__c"));
            var now = new Date();
            var distance = end - now;
            if (distance > 0) {
                component.set("v.expired", false);
                var days = Math.floor(distance / _day);
                var hours = Math.floor((distance % _day) / _hour);
                var minutes = Math.floor((distance % _hour) / _minute);
                var seconds = Math.floor((distance % _minute) / _second);

                if (component.get("v.running")) {
                    component.set("v.day", days);
                    component.set("v.hour", hours);
                    component.set("v.minute", minutes);
                    component.set("v.second", seconds);
                }
            } else {
                component.set("v.expired", true);
                clearInterval(timer);
            }
        }, 1000);
    }
})