let ticket = [303030, 404040, 505050, 101010, 202020, 495867, 456783];

function selectWinner() {
    if (ticket.length === 0) {
        console.log("No lottery ticket numbers left.");
        document.getElementById('Html').innerHTML = "No lottery ticket numbers left.";
    } else {
        let index = Math.floor(Math.random() * ticket.length);  
        let winnerTicket = ticket[index]; 
        
        console.log("Winner Ticket Number:", winnerTicket);

        document.getElementById('Html').innerHTML = "Winner Ticket Number " + winnerTicket;
        document.getElementById('Modal').style.color = "red";
        document.getElementById('Modal').innerHTML = "Winner Ticket Number " + winnerTicket;
        $('#winnerModal').modal('show');
    }
}
  