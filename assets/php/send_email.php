<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['full_name'];
    $email = $_POST['email_address'];
    $phone = $_POST['phone_number'];
    $location = $_POST['property_location'];
    $comments = $_POST['other_comments'];

    $to = "sandeepsolanki672s@gmail.com"; // Replace with your email address
    $subject = "Safe Homes New Message from Client";
    $message = "Full Name: $name\nEmail: $email\nPhone Number: $phone\nLocation of Property: $location\nComments: $comments";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
