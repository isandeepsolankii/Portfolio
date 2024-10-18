<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userName = trim($_POST["inputName"]);
    $userEmail = trim($_POST["inputEmail"]);
    $userMessage = trim($_POST["inputComments"]);
    $toEmail = "sandeepsolanki672s@gmail.com";
    $message = '';

    // Basic validation
    if (!empty($userName) && !empty($userEmail)) {
        // Initialize PHPMailer
        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                     // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'sandeepsolanki672s@gmail.com';       // SMTP username (replace with your verified email)
            $mail->Password   = 'vxmq ghzt axrq ljfb';                  // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; PHPMailer::ENCRYPTION_SMTPS for SSL
            $mail->Port       = 587;                                    // TCP port to connect to

            // Recipients
            $mail->setFrom($userEmail, $userName);                      // Set sender of the email (user's email)
            $mail->addAddress($toEmail);                                // Add a recipient (your email)
            $mail->addReplyTo($userEmail, $userName);                   // Add reply-to as user's email

            // Content
            $mail->isHTML(true);                                        // Set email format to HTML
            $mail->Subject = "New Message from " . $userName;
            $mail->Body    = "<strong>Full Name:</strong> " . $userName . "<br>" .
                             "<strong>Email:</strong> " . $userEmail . "<br>" .
                             "<strong>Message:</strong> " . nl2br($userMessage);

            // Send email
            if ($mail->send()) {
                $message = "Your contact information is received successfully.";
                header("Location: ../../pages/thankyou.html?message=" . urlencode($message));
            } else {
                $message = "There was an error sending your message.";
                header("Location: ./?error=" . urlencode($message));
            }
            exit();

        } catch (Exception $e) {
            $message = "Mailer Error: {$mail->ErrorInfo}";
            header("Location: ./?error=" . urlencode($message));
            exit();
        }

    } 
}
?>
