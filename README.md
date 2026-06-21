# Trabalho de conclusão da disciplina de Integração Contínua utilizando GitHub Actions

Este projeto demonstra a implementação de uma pipeline automatizada de Integração Contínua (CI) utilizando o **GitHub Actions** para um projeto desenvolvido em **Node.js** com testes automatizados utilizando o framework **Mocha** e geração de relatórios com **Mochawesome**. Foi utilizado o trabalho de conclusão da disciplina do professor **Júlio de Lima** de **Serviço de Pagamento** 

## Sobre o Projeto

Este é um **trabalho de conclusão da disciplina de Integração Contínua** que demonstra a implementação de uma pipeline automatizada de CI/CD utilizando GitHub Actions. 

O projeto baseia-se no exercício acadêmico **"Serviço de Pagamento"** do professor **Júlio de Lima**, expandido com:
- ✅ Testes automatizados com **Mocha** e relatórios visuais com **Mochawesome**
- ✅ Pipeline CI/CD completa com **GitHub Actions**
- ✅ Automatização de múltiplos gatilhos (Push, Manual, Agendado)
- ✅ Publicação automática de relatórios de teste

## Estrutura da Pipeline

O arquivo de configuração está localizado em `.github/workflows/pipelines.yaml` e contempla três tipos de gatilhos (*triggers*):

1.  **Push:** Execução automática sempre que um novo código for enviado para a main.
2.  **Manual (workflow_dispatch):** Permite disparar a pipeline sob demanda através da aba "Actions" no GitHub.
3.  **Agendada (Schedule - Cron):** Configurada para rodar periodicamente (a cada 5 minutos no ambiente de testes utilizando a sintaxe `*/5 * * * *`).


### Passos Executados

1. 📥 **Clonagem do repositório** - Baixa o código mais recente
2. 📦 **Instalação do Node.js** - Configura Node.js v20.x
3. 📚 **Instalação de dependências** - Executa `npm ci`
4. 🧪 **Execução de testes** - Roda `npm test`
5. 📤 **Upload de relatórios** - Publica relatório de testes nos Artifacts do GitHub

Todos os relatórios de teste são salvos como Artifacts e podem ser consultados no histórico da pipeline.

## Tecnologias e Conceitos Utilizados

*   **CI (Continuous Integration):** Prática de desenvolvimento que consiste em integrar alterações de código ao repositório central com frequência, disparando automaticamente compilações e testes para detectar problemas o mais rápido possível.
*   **GitHub Actions:** Plataforma de automação integrada ao GitHub que permite criar fluxos de trabalho (workflows) orientados a eventos diretamente no repositório.
*   **Workflows, Jobs e Steps:** 
    *   **Workflow:** O fluxo automatizado completo (configurado no arquivo `pipelines.yaml`).
    *   **Job:** Um conjunto de passos executados na mesma máquina virtual (Runner).
    *   **Step:** Uma tarefa individual dentro de um Job (como rodar um comando ou executar uma Action pronta).
*   **Mocha & Mochawesome:** Framework de testes para Node.js acoplado a um gerador de relatórios visuais personalizáveis em formato HTML/JSON.

## Começando

### Pré-requisitos

- **Node.js** v20.x ou superior
- **npm** (gerenciador de pacotes do Node.js)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/wanessatsantos/trabalho-de-conclusao-integracao-continua.git
cd trabalho-de-conclusao-integracao-continua
```

2. Instale as dependências:
```bash
npm install
```

## 🧪 Testes

### Executar Testes

```bash
npm test
```

O Mocha executará todos os testes e exibirá o resultado no terminal.

### Gerar Relatório de Testes (HTML)

```bash
npm run test:report
```

Os relatórios serão gerados em `test/reports/index.html` com visualização interativa do Mochawesome.


## 📁 Estrutura do Projeto

```
servico-de-pagamento/
├── src/
│   └── servicoDePagamento.js      # Classe principal do serviço
├── test/
│   ├── servicoDePagamento.test.js # Testes unitários
│   └── reports/                   # Relatórios de testes gerados
├── .github/
│   └── workflows/
│       └── pipelines.yaml         # Configuração do CI/CD
├── package.json                   # Configuração do projeto
├── mochawesome-report/            # Relatórios anteriores de testes
└── README.md                       # Este arquivo
```

## 🛠️ Dependências do Projeto

### Dependências de Desenvolvimento
- **mocha** ^11.7.6 - Framework de testes
- **mochawesome** ^7.1.4 - Reporter visual para testes

### Configuração
- **Tipo de módulo**: ES6 modules (`"type": "module"`)
- **Node.js**: 20.x
- **Licença**: ISC

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm test` | Executa os testes unitários |
| `npm run test:report` | Executa testes e gera relatório visual |

## 🤝 Contribuindo

Para contribuir com melhorias:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para reportar problemas ou sugestões, abra uma [issue no GitHub](https://github.com/wanessatsantos/trabalho-de-conclusao-integracao-continua/issues).

---

**Versão**: 1.0.0  
**Autor**: Wanessa Teles dos Santos  
**Repositório**: [github.com/wanessatsantos/trabalho-de-conclusao-integracao-continua](https://github.com/wanessatsantos/trabalho-de-conclusao-integracao-continua)
