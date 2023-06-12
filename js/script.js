"use strict";

// VUEJS APP
const {createApp} = Vue;                                             

createApp({
        data(){                                
            return{           
                message: 'Hello vuejs!',
            }     
        }
}).mount('#app');                        