<?php
    // header("Location: /#contact");

    $data = json_decode(file_get_contents('php://input'), true);

    $headers = 'Content-Type: text/plain; charset=utf-8' . "\r\n";
    $headers .= 'Content-Transfer-Encoding: base64' . "\r\n";

    $email = $data['email'];
    $headers .= "From:$email";
    $subject = $data['subject'];
    $message = $data['message'];
    $to_email = 'team@happydoomsday.com';

    $isDataValid = validateData($subject, $message, $email);

    $subject = '=?UTF-8?B?' . base64_encode($data['subject']) . '?=';
    $message = base64_encode($data['message']);
    
    if($isDataValid) {
        mail($to_email, $subject, $message, $headers);
        echo json_encode(['status' => 'ok']);
        return;
    }

    echo json_encode(['status' => 'error']);
    return;

    function validateData($subject, $message, $email) {
        if(empty($subject)) return false;
        if(empty($email)) return false;
        if(empty($message)) return false;

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }

        if(strlen($subject) < 1 || strlen($subject) > 1000) return false;
        if(strlen($email) < 1 || strlen($email) > 200) return false;
        if(strlen($message) < 1 || strlen($message) > 30000) return false;

        return true;
    }
?>