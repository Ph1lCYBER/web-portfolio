<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

// Get the JSON data from React
$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];

    // For now, let's just send a success response back to React
    // You could also use mail() or save to MySQL here
    echo json_encode(["status" => "success", "received" => $name]);
} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "No data received"]);
}
?>