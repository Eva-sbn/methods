
let phone = {
    name: "iphone",
    model: "iponeX",
    memory: 256,
    color: "white",
    power: false,
    call: function(name) {
        return "Я звоню" + name
    },
    batteryPower: 35,
    getBatteryPower: function() { 
        return `Ваша зарядка ${this.batteryPower}%`
    },
    isOn: function() {
        if(this.power === true) {
            return "Телефон включен"
           }   else {
               return "Телефон выключен"
           }
        },
        switch: function() {
           this.power = !(this.power)
        },

        sent: [
            {to: "+7919 555 23 11", 
            time: "03:12", 
            message: "Сплю!"}
        ],
            inbox: [
            {from: "+2124 312 48 24", 
            time: "11:25", 
            message: "Все еще спишь?"}
        ],
            sentMessage: function(to, time, message){
            this.inbox.push({
                to:to, 
                time: time
            })
        },
            clearInbox: function (){
                for (let i = 0; i < this.sent.length;i++) {
                    delete this.sent[i];
                  }
            },
            clearSent: function(){
                for (let i = 0; i < this.inbox.length;i++) {
                    delete this.inbox[i];
                  }
            }
        
        };
