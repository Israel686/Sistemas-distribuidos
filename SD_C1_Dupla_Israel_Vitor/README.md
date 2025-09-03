# Trabalho Prático – Ciclo 01 (Sistemas Distribuídos)

## Integrantes
- Vitor Eduardo Dutra de Oliveira
- Israel Eduardo Lucena de Oliveira

## Tecnologias Utilizadas
- Backend: Python, Flask, Flask-CORS
- Frontend: HTML, CSS, JavaScript

## Como Executar o Projeto

### 1. Estrutura da Pasta
Depois de extrair o .zip, a estrutura deve ser assim:

SD_C1_Dupla_Israel_Vitor/
└─ SD_C1_Dupla_Israel_Vitor/
   ├─ backend/
   │  └─ app.py
   ├─ frontend/
   │  ├─ index.html
   │  ├─ script.js
   │  └─ style.css

Agora arraste a pasta para dentro do VSCode.


### 2. Executar o Backend
1. Abra o Prompt de Comando ou PowerShell no Windows. Para abrir o terminal dentro do VSCode,
basta usar os atalhos Ctrl + '

2. Acesse a pasta backend:
Execute o comando -> cd SD_C1_Dupla_Israel_Vitor/backend

3. Instale as dependências (somente na primeira vez):
Execute o comando -> pip install flask flask-cors

4. Inicie o servidor backend:
Execute o comando -> python app.py

O servidor ficará disponível em:
http://localhost:5000/login


### 3. Executar o Frontend
1. Entre em extensões:
Baixe a seguinte extensão -> "Live Server".

2. Entre na pasta frontend:
Dê dois cliques no arquivo -> index.html.

3. Acessando a URL no navegador:
No canto inferior direito, clique em "Go Live".

A tela de login será exibida.


### 4. Testar o Sistema
Usuário correto: *admin*
Senha correta: *1234*

Fluxo esperado:
Se as credenciais estiverem corretas → mensagem verde: "Login realizado com sucesso!"
Se as credenciais estiverem incorretas → mensagem vermelha: "Usuário ou senha inválidos!"
Se a requisição estiver errada → erro 400.

Estrutura do Sistema:
Frontend: exibe a tela de login e envia as credenciais ao backend.
Backend: recebe as credenciais no endpoint POST /login, valida usuário e senha estáticos, e retorna o resultado.