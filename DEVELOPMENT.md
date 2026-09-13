# Guia de Desenvolvimento

Este documento descreve como configurar e trabalhar com o projeto Vida com Deus em ambiente de desenvolvimento.

## Configuração do Ambiente

### Requisitos
- Node.js v16+
- npm v8+ ou yarn v3+
- Git
- Um editor de código (VS Code recomendado)

### Extensões VS Code Recomendadas
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense
- Thunder Client ou Postman (para testes de API)

### Instalação
```bash
# Clone o repositório
git clone https://github.com/cavalcantegabriel1000-cmyk/vida-com-deus.git
cd vida-com-deus

# Instale as dependências
npm install

# Copie o arquivo .env
cp .env.example .env

# Inicie o servidor de desenvolvimento
npm run dev
```

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev        # Inicia o servidor de desenvolvimento

# Build
npm run build      # Build para produção
npm run preview    # Preview do build de produção

# Linting
npm run lint       # Verifica erros de linting
```

## Estrutura de Pastas

```
vida-com-deus/
├── src/
│   ├── components/      # Componentes React reutilizáveis
│   ├── pages/          # Páginas/telas da aplicação
│   ├── store/          # Stores Zustand (estado global)
│   ├── types/          # Definições de tipos TypeScript
│   ├── utils/          # Funções utilitárias
│   ├── App.tsx         # Componente raiz
│   ├── main.tsx        # Entry point
│   └── index.css       # Estilos globais
├── public/             # Arquivos estáticos
├── index.html          # HTML principal
├── vite.config.ts      # Configuração Vite
├── tsconfig.json       # Configuração TypeScript
├── tailwind.config.js  # Configuração Tailwind
└── package.json        # Dependências do projeto
```

## Workflow de Desenvolvimento

### 1. Criar um Novo Componente
```tsx
// src/components/MyComponent.tsx
import { FC } from 'react';

interface MyComponentProps {
  title: string;
}

export const MyComponent: FC<MyComponentProps> = ({ title }) => {
  return (
    <div className="bg-dark-900 p-4 rounded-lg">
      <h2 className="text-white font-serif font-bold">{title}</h2>
    </div>
  );
};
```

### 2. Usar o Componente
```tsx
import { MyComponent } from '@/components';

export const Home = () => {
  return (
    <div>
      <MyComponent title="Bem-vindo" />
    </div>
  );
};
```

### 3. Usar Estado Global
```tsx
import { useDevotionStore } from '@/store';

export const Devotions = () => {
  const { devotions, addDevotion } = useDevotionStore();
  
  return (
    <div>
      {devotions.map(devotion => (
        <div key={devotion.id}>{devotion.title}</div>
      ))}
    </div>
  );
};
```

## Paleta de Cores

```css
/* Tailwind Utilities */
bg-dark-950  /* #030712 */
bg-dark-900  /* #111827 */
bg-dark-800  /* #1f2937 */
text-spirit-gold    /* #d4af37 */
text-spirit-silver  /* #c0c0c0 */
```

## Convenções de Código

### Naming
- Componentes: PascalCase (e.g., `Header.tsx`)
- Arquivos: PascalCase para componentes, camelCase para utilitários
- Variáveis: camelCase
- Constantes: UPPER_SNAKE_CASE

### Organização de Imports
```tsx
// 1. React/Third-party imports
import { FC } from 'react';
import { Link } from 'react-router-dom';

// 2. Local imports
import { useDevotionStore } from '@/store';
import { Devotion } from '@/types';
import { formatDate } from '@/utils';
```

## Git Workflow

```bash
# Crie uma branch para sua feature
git checkout -b feature/nova-feature

# Faça commits frequentes com mensagens claras
git commit -m "Descrição clara do que foi feito"

# Push para o repositório
git push origin feature/nova-feature

# Abra um Pull Request no GitHub
```

## Debugging

### React DevTools
- Instale a extensão React DevTools no navegador
- Inspecione componentes e estado

### Zustand DevTools
- Use Redux DevTools com Zustand para debug de estado

### Console
```tsx
console.log('Debug:', variable);
console.error('Error:', error);
console.warn('Warning:', warning);
```

## Recursos Úteis

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Router Documentation](https://reactrouter.com)

---

Para dúvidas, abra uma issue ou entre em contato com os mantenedores do projeto!
