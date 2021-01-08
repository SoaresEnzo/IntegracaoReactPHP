<?php

class Connection
{
    public static function getDB()
    {
        $conn = new PDO("mysql:host=localhost;dbname=recode;charset=utf8",
        "root",
        ""
        );
        
        if($conn) {
            return $conn;
        } else {
            return "<h1>Erro na conexão com o banco de dados</h1>";
        }
    }
}