document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita o reload da página

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    try {
        const response = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ usuario, senha })
        });

        const data = await response.json();

        if (response.status === 200) {
            document.getElementById("mensagem").innerText = data.mensagem;
            document.getElementById("mensagem").style.color = "green";
        } else {
            document.getElementById("mensagem").innerText = data.erro;
            document.getElementById("mensagem").style.color = "red";
        }
    } catch (error) {
        document.getElementById("mensagem").innerText = "Erro de conexão com o servidor.";
        document.getElementById("mensagem").style.color = "red";
    }
});
