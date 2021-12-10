<p align="center">
  <a href="https://www.linx.com.br/" rel="noopener">
 <img width=192px height=192px src="https://i.imgur.com/rldslwZ.png" alt="logo"></a>
</p>

<div align="center">

[![Status](https://img.shields.io/badge/status-ativo-success.svg)]()
[![LinkedIn](https://img.shields.io/badge/platform-linkedin-blue.svg)](https://www.linkedin.com/in/icaroparanhos/)

</div>

---

## 📝 Tabela de conteúdos

- [Sobre](#about)
- [Requisitos para rodar o projeto](#developmentrequirements)
- [Instalação](#installation)
- [Rota da API](#routesapi)

## 🧐 Sobre <a name="about"></a>

Projeto desenvolvido como parte de um processo seletivo da empresa [Linx](https://www.linx.com.br/). Nesse projeto foi desenvolvido um site de previsão do tempo, utilizando Python para back-end onde foi construida uma API com a biblioteca [Flask](https://flask.palletsprojects.com/en/2.0.x/) e no front-end foi utilizado [React](https://reactjs.org/) para framework Web, [Craco](https://github.com/gsoft-inc/craco) para pós processamento de CSS e [TailwindCSS](https://tailwindcss.com) como framework de CSS.

## 📝 Requisitos para rodar o projeto <a name="developmentrequirements"></a>

- Python3
- Node.js

## 💭 Instalação <a name="installation"></a>

1.Clone este repositório usando o seguinte comando:

```terminal
$ git clone git@github.com:smookeydev/linx-test.git
```

2.Acesse a pasta do projeto em seu terminal:

```terminal
$ cd linx-test
```

3.Rode os comados abaixo para instalar as dependências:

```terminal
$ npm i

$ pip3 install -r requirements.txt
```

4.Copie o arquivo de configuração de exemplo para um arquivo de configuração real:

```terminal
$ cp ./api/.env.example ./api/.env
```

5.Troque o valor existente no arquivo de configuração, o valor é:

- **API_KEY**: Chave da [API](https://openweathermap.org/api) de previsões do tempo. (Obrigatório)

6.Inicie a API rodando o seguinte comando:

```terminal
$ npm run start-api
```

7.Inicie a aplicação rodando o seguinte comando:

```terminal
$ npm run start
```

## 📲 Rota da API <a name="routesapi"></a>

| Método | Rota         | Argumentos    |
| ------ | ------------ | ------------- |
| GET    | /get_weather | ?q=Localidade |

---
