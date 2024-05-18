import { createClient } from "smtpexpress";


    document.getElementById('contact-btn').addEventListener('click', async () => {
      const firstName = document.getElementById('name').value;
      const recipientEmail = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const smtpexpressClient = createClient({
        projectSecret: "311f0c72175e900415baf6c5c67a782018bffd9908aa2ca7dd",
        projectId: "sm0pid-n1tsWXjLgFCWWFGMwB2JwJa_f"
      
      });


      try {
        const result = await smtpexpressClient.sendApi.sendMail({
          subject:`${firstName} Sends a message through your Birthday site`,
          
          message: `Hello there! 
          ${message}
          Email: ${recipientEmail}`,
          sender: {
            name: 'smtpExpress' ,
            email: "sm0pid-allfF1rxQJs-x2SMhVax9eP91@projects.smtpexpress.com"
          },
          recipients: {
            email: "umercy001@gmail.com",
          }
        });

        console.log('Email sent successfully:', result);
        alert('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending email. Please check the console for details.');
      }
    });