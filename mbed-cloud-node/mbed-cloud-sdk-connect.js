module.exports = function(RED) {
    
    function mbed_CloudConnect(config) {
        RED.nodes.createNode(this,config);
        
        //this.log("mbed required to connec to the cloud!");
        //this.log("name before:",this.name);
        this.name = config.name;
        //this.log("name after:",this.name);
        this.apikey = this.apikey;
        //this.log("apikey:",this.key);
                
        this.on('close', function(msg) {
            this.log("node closeed!");
        });
        
    }
    RED.nodes.registerType("mbed-cloud-connect",mbed_CloudConnect,{
        credentials: {
            apikey: {type: "text"}
        }
    });
}



