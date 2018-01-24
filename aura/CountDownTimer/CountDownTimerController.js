({
	doInit : function(component, event, helper) {
	},
    
    stopStart : function(component, event, helper) {
        var running;
        var status = component.get("v.simpleRecord.Status");

        if (status == "Received" || status == "Closed" || status == "Closed (in review)") {
            running = false;
            component.set("v.day", 0);
            component.set("v.hour", 0);
            component.set("v.minute", 0);
            component.set("v.second", 0);
        }  else {
            running = true
            helper.performCalculation(component);
        }
        component.set("v.running", running);
    }
})