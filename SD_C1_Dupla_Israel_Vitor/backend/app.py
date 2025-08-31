from flask import Flask, request, jsonify
from flask_cors import CORS  # <-- importe CORS

app = Flask(__name__)
CORS(app)  # <-- habilita CORS para todas as rotas

# Usuário e senha fixos
USUARIO_CORRETO = "admin"
SENHA_CORRETA = "1234"

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    if not data or "usuario" not in data or "senha" not in data:
        return jsonify({"erro": "Requisição inválida"}), 400

    usuario = data["usuario"]
    senha = data["senha"]

    if usuario == USUARIO_CORRETO and senha == SENHA_CORRETA:
        return jsonify({"mensagem": "Login realizado com sucesso!"}), 200
    else:
        return jsonify({"erro": "Usuário ou senha inválidos"}), 401

if __name__ == "__main__":
    app.run(debug=True)
