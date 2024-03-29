exports.resetPassword = (email, name, link) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Update Confirmation</title>
        <style>
            body{
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
            .container{
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo{
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message{
                font-size: 20px;
                font-weight:bolder;
                margin-bottom: 20px;
            }
            .body{
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .support{
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight{
                font-weight: bold;
            }
            .email{
                text-decoration:none;
                font-weight:bold;
                font-size:20px;
                color:black;
            }
            a{
    
            }
            button{
                background-color: #FFD60A;
                border: 2px solid black;
                padding: 10px 8px;
                font-size: large;
                border-radius: 10px;
                cursor: pointer;
            }
            .name{
                font-size: large;
                font-weight: bold;
            }
    
        </style>
    </head>
    <body>
        <div class="container">
            <img class="logo" src="https://res.cloudinary.com/dnkp2gm1d/image/upload/v1711551777/StudyNotion/Studynotion_Logo_wanqnk.png" alt="StudyNotion Logo" >
            <div class="message">Reset Password</div>
            <div class="body">
                <p>Hey <span class="name">${name},</span></p>
                <P>We have received a reset password request from your email <span class="email">${email}</span>.
                If you have request it then please use the link provided below for  the same.</p>
                <a  href="${link}">
                    <button >
                        Reset Password
                    </button>
                </a>
                <p>If you did not request this password change, please contact us immediately to secure your account.</p>
            </div>
            <div class="support">
                If you have any questions or need futher assistance, please feel free to reach us at
                <a href="mailto:cannon.khan786@gmail.com">info@studynotion.com</a>. We are here to help!
            </div>
        </div>
    </body>
    </html>`;
};
