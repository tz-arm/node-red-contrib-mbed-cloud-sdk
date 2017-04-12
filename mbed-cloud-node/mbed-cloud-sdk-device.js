module.exports = function(RED) {
        
    function listDevices(cfg) {
        RED.nodes.createNode(this,cfg);
        
        var mbed = require("mbed-cloud-sdk");
    
        this.connect = RED.nodes.getNode(cfg.connect);
        if(this.connect)
        {
            this.log("Get connect config ok!");
        }
        else{
            this.error("Get connect config fail!");
        }
        
        this.log(this.connect);
        
        //var msg = cfg.connect;
        //node.send(msg);
        
        this.log(this.connect.credentials);
        this.log(this.connect.credentials.apikey);     
        
        var deviceApi = new mbed.DevicesApi({
            apiKey: this.connect.credentials.apikey
        });
        
        this.log(deviceApi);  
     
        var node = this; 
        //var msg = "test";
        //node.send(msg);
        node.log("get devices before");
        node.on('input', function(msg) {
            deviceApi.listConnectedDevices(function(error, devices) {
                    if (error) {
                        node.error("listconnect devices fail:",error);
                    } else {
                        node.log("get devices");
                        node.log(devices);
                        //node.log(devices.data);
                        msg.payload = devices;
                        node.send(msg);
                    }
                });
        });
    }
    RED.nodes.registerType("mbed-cloud-device", listDevices);
}