"use strict";
import { contacts } from './contacts.js';

// VUEJS APP
const {createApp} = Vue;                                             

createApp({
        data(){                                
            return{           
                // array dei contatti
                contacts: contacts,

                // indice attivo (selezionato)
                activeIndex: 0,

                // classe sfondo messaggio white
                receivedClass: 'bg_color_white',

                // nuovo messaggio
                newMessage: "",

                // nuova ricerca
                newSearch: "",

                // messaggio di errore
                error_message: "",
            }     
        },

        methods: {

            // funzione di invio del nuovo messaggio
            sendMessage(){
                if (this.newMessage.trim() === '') {
                    this.error_message = 'Il campo non può essere vuoto';
                    return;
                }
                let sendOneMessage = {
                    date: '13/06/2023 09:30:00',
                    message: this.newMessage,
                    status: 'sent'
                };

                this.contacts[this.activeIndex].messages.push(sendOneMessage);
                this.newMessage = '';
                // azzera il messaggio di errore
                this.error_message = '';
                this.autoReply();
            },

            // funzione del messaggio di risposta
            autoReply(){
                setTimeout(() => {    
                    let sendOneMessage = {
                        date: '13/06/2023 09:31:00',
                        message: 'ok',
                        status: 'received'
                    };

                    this.contacts[this.activeIndex].messages.push(sendOneMessage)
                }, 1000);
            },

            // funzione della nuova ricerca chat
            newSearchList(){
                this.contacts.forEach((element) => {
                    if(element.name.toLowerCase().includes(this.newSearch.toLowerCase())) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                });
            },

            // funzione che azzera il messaggio di errore
            clearErrorMessage() {
                this.error_message = '';
            }
        }
}).mount('#app');