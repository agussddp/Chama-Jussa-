CREATE DATABASE Chama_Jussa

CREATE TABLE tb_Usuario (
ID_Usuario  INT IDENTITY (1,1) PRIMARY KEY

,nome_completo	 NVARCHAR(255)			NOT NULL
,email			 NVARCHAR(255)	UNIQUE	NOT NULL
,senha			 NVARCHAR(50)			NOT NULL
,foto_perfil_url NVARCHAR(150)			NULL


)
