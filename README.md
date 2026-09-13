<!-- markdownlint-disable-next-line -->
<div align="center">

# 🙏 Vida com Deus

**Um app de devoção e espiritualidade para fortalecer sua fé**

[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

</div>

---

## 📋 Sobre o Projeto

**Vida com Deus** é um aplicativo web moderno e elegante criado para oferecer uma experiência espiritual enriquecedora. O app combina devoções diárias, orações inspiradoras, reflexões e recursos bíblicos em uma interface minimalista com tema preto, cinza e branco.

### ✨ Características

- 📖 **Devoções Diárias**: Mensagens inspiradoras para fortalecer sua fé
- 🙏 **Orações**: Coletânea curada de orações para diferentes momentos
- 📚 **Bíblia**: Acesso a versículos e reflexões espirituais
- 👤 **Perfil do Usuário**: Acompanhe seu progresso espiritual
- 🎨 **Design Elegante**: Interface minimalista com tema escuro
- 📱 **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile

---

## 🛠️ Stack Tecnológico

- **Frontend Framework**: React 18.2
- **Linguagem**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.3
- **Roteamento**: React Router DOM 6
- **Estado Global**: Zustand 4.4
- **Bundler**: Vite 5
- **Ícones**: Lucide React

---

## 🚀 Como Começar

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/cavalcantegabriel1000-cmyk/vida-com-deus.git
cd vida-com-deus
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Build para Produção

```bash
npm run build
# ou
yarn build
```

---

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── DevotionCard.tsx
│   └── ...
├── pages/               # Páginas da aplicação
│   ├── Home.tsx
│   ├── Devotions.tsx
│   ├── Prayers.tsx
│   └── ...
├── store/               # Gerenciamento de estado (Zustand)
│   ├── useAuthStore.ts
│   ├── useDevotionStore.ts
│   └── ...
├── types/               # Definições de tipos TypeScript
│   └── index.ts
├── utils/               # Funções utilitárias
├── styles/              # Estilos globais
├── App.tsx              # Componente raiz
├── main.tsx             # Entry point
└── index.css            # Estilos globais
```

---

## 🎨 Paleta de Cores

```
Preto:        #000000 / #1A1A1A
Branco:       #FFFFFF
Cinza Claro:  #E5E5E5 / #F0F0F0
Cinza Médio:  #808080 / #A9A9A9
Ouro:         #D4AF37 (Destaques)
```

---

## 📝 Rotas Disponíveis

| Rota | Descrição |
|------|----------|
| `/` | Página inicial |
| `/devocoes` | Lista de devoções |
| `/devocoes/:id` | Devoção individual |
| `/oracoes` | Lista de orações |
| `/biblia` | Leitor de bíblia |
| `/perfil` | Perfil do usuário |
| `/sobre` | Sobre o app |
| `/contato` | Entre em contato |

---

## 🔐 Autenticação

O projeto inclui estrutura para autenticação via:
- Email/Senha
- (Em desenvolvimento) OAuth com Google
- (Em desenvolvimento) Autenticação com Apple ID

Atualmente, a autenticação está em fase de mock/desenvolvimento.

---

## 💾 Banco de Dados

(Em desenvolvimento) O projeto será integrado com:
- **Firebase Firestore** para dados em tempo real
- **Firebase Authentication** para autenticação
- **Alternativa**: Supabase para solução open-source

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 📧 Contato

- **Email**: contato@vidacomdeus.com
- **GitHub**: [@cavalcantegabriel1000-cmyk](https://github.com/cavalcantegabriel1000-cmyk)

---

## 🙌 Agradecimentos

- React Community
- Tailwind CSS
- Lucide Icons
- Todos os contribuidores

---

<div align="center">

Feito com ❤️ para a comunidade cristã

**Que Deus abençoe sua jornada espiritual!** 🙏

</div>