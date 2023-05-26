<?php
include_once "../model/rol.php";

$rolM = new \modelo\rol();
$response = $rolM->read();

echo json_encode($response);
unset($rolM);
unset($response);