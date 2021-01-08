<?php

require "Connection.php";

class Student
{
    public $id;
    public $name;
    public $telephone;

    public static function getAll()
    {
        //$conn = new Connection;
        //$connection = $conn->getDb();

        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM students");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function getTotalStudents()
    {
        $connection = Connection::getDb();
        $stmt = $connection->query("SELECT count(*) as total_students FROM students");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function registerStudent()
    {
        $connection = Connection::getDb();
        $stmt = $connection->query("INSERT INTO students(name,telephone) VALUES ('$this->name','$this->telephone')");
        if($stmt->rowCount()>0){
            return true;
        } else {
            return false;
        }
    }
}
