<?php
Class Database {

	private    $db_host = "";
	private    $db_username = "";
	private    $db_password = "";
	protected  $db_name = "";
	public  $connection;


	public function __construct() {
		$setting_charset = $this->connect();
		$setting_charset->exec("SET NAMES utf8");
		$this->connection = $setting_charset; 
	}

	public function connect() {
		try {
			return new PDO('mysql:host='.$this->db_host.';dbname='.$this->db_name, $this->db_username, $this->db_password);
		} catch (PDOException $e) {
			echo "<span style='color: red'>Erro: ".$e->getMessage()."<br>Entre em contato com o desenvolvedor e informe-o.</span>";
			exit();
		}
	}
} 