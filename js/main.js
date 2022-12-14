var inizio = new Vue({

    el: "#app",

    data: {

        myMsgValue: "",
        mySearchValue: "",
        indiceDisplay: 0,
        contacts: [
            {   
                mySearch: true,
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: false,
                messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
            ],
            },
            {   
                mySearch: true,
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },
            {
            mySearch: true,
            name: 'Samuele',
            avatar: 'img/avatar_3.jpg',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            mySearch: true,
            name: 'Alessandro B.',
            avatar: 'img/avatar_4.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            },
            {
            mySearch: true,
            name: 'Alessandro L.',
            avatar: 'img/avatar_5.jpg',
            visible: true,
            messages: [
            {

            mySearch: true,
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
            ],
            },
            {
            
            mySearch: true,
            name: 'Claudia',
            avatar: 'img/avatar_6.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novit???',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
            }
            ],
            },
            {
            mySearch: true,
            name: 'Federico',
            avatar: 'img/avatar_7.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
            }
            ],
            },
            {
            mySearch: false,
            name: 'Davide',
            avatar: 'img/avatar_8.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
            }
            ],
            }
            ]

    },

    computed: {

        filteredSearch: function(){
            return this.contacts.filter((contatto)=>{
                return contatto.name.toLowerCase().includes(this.mySearchValue.toLowerCase())
            })
            
        }

   
    },

    methods: {

        selectedCT(index) {

            for(let i = 0 ; i < this.contacts.length ; i++){

                if(this.contacts[i].visible == false){
                    this.contacts[i].visible = true                  
                }
               
            }

            if(this.contacts[index].visible == true) {
                this.contacts[index].visible = false
            }
    
            
           
        },

        sendMessage(myMessage){

            let myMsgs 
            for(let i = 0 ; i < this.contacts.length ; i++){

                    myMsgs =  this.contacts[i].messages
                    if(this.contacts[i].visible == false){
                        myMsgs.push( 
                            {
                            date: '10/01/2020 15:30:55',
                            message: myMessage,
                            status: 'sent'
                            },)
                       
                    }
                    setTimeout(() => {
                        let automaticMsg =  this.contacts[i].messages

                        if(this.contacts[i].visible == false){
                       
                            automaticMsg.push( 
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'ok',
                                status: 'received'
                                },)
                           
                        }
                            
                    }, 1000);
                   
            }
            this.myMsgValue = ""; 
        }
    }
})