<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Student.php";

$student = new Student;
$student->name = $_POST['name'];
$student->telephone = $_POST['telefone'];

$validate = $student->registerStudent();

if ($validate == true) {
    print_r(json_encode(true));
} else {
    print_r(json_encode(false));
}

