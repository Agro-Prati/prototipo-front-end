# Protótipo Front-End - Agro Prati

## 📋 Instruções para Desenvolvimento

Este repositório contém o protótipo front-end do projeto Agro Prati. Siga as instruções abaixo para configurar seu ambiente de desenvolvimento e contribuir com o projeto.

## 🚀 Primeiros Passos

### 1. Clonar o Repositório

```bash
# Clone o repositório para sua máquina local
git clone git@github.com:Agro-Prati/prototipo-front-end.git

# Entre na pasta do projeto
cd prototipo-front-end
```

### 2. Configurar Git (caso ainda não tenha feito)

```bash
# Configure seu nome (substitua pelo seu nome)
git config --global user.name "Seu Nome"

# Configure seu email (substitua pelo seu email)
git config --global user.email "seu.email@exemplo.com"
```

## 🌿 Fluxo de Desenvolvimento

### 3. Criar uma Branch de Desenvolvimento

**IMPORTANTE:** Nunca trabalhe diretamente na branch `main`. Sempre crie uma nova branch para suas modificações.

```bash
# Certifique-se de estar na branch main atualizada
git checkout main
git pull origin main

# Crie e mude para uma nova branch (substitua 'nome-da-sua-feature' por um nome descritivo)
git checkout -b nome-da-sua-feature

# Exemplos de nomes de branch:
# git checkout -b adicionar-menu-navegacao
# git checkout -b corrigir-responsividade
# git checkout -b implementar-formulario-contato
```

### 4. Fazer Alterações no Código

- Faça suas modificações nos arquivos
- Teste suas alterações abrindo o `index.html` no navegador
- Certifique-se de que tudo está funcionando corretamente

### 5. Salvar suas Alterações (Commit)

```bash
# Veja quais arquivos foram modificados
git status

# Adicione os arquivos modificados ao staging area
git add .
# Ou adicione arquivos específicos:
# git add index.html styles.css

# Faça o commit com uma mensagem descritiva
git commit -m "Descrição clara do que foi alterado"

# Exemplos de mensagens de commit:
# git commit -m "Adicionar menu de navegação responsivo"
# git commit -m "Corrigir problema de CSS não carregando"
# git commit -m "Implementar formulário de contato"
```

### 6. Enviar para o Repositório Remoto

```bash
# Envie sua branch para o repositório remoto
git push origin nome-da-sua-feature
```

### 7. Criar Pull Request

1. Acesse o repositório no GitHub: https://github.com/Agro-Prati/prototipo-front-end
2. Você verá uma notificação para criar Pull Request da sua branch
3. Clique em "Compare & pull request"
4. Preencha:
   - **Título**: Descrição clara do que foi implementado
   - **Descrição**: Detalhes sobre as mudanças realizadas
5. Clique em "Create pull request"
6. Aguarde a revisão do líder da equipe

## 🔄 Mantendo sua Branch Atualizada

```bash
# Mude para a branch main
git checkout main

# Baixe as últimas atualizações
git pull origin main

# Volte para sua branch de desenvolvimento
git checkout nome-da-sua-feature

# Atualize sua branch com as mudanças da main
git merge main
```

## 📁 Estrutura do Projeto

```
prototipo-front-end/
├── index.html      # Página principal
├── styles.css      # Estilos CSS
├── script.js       # JavaScript
└── README.md       # Este arquivo
```

## ❗ Comandos Importantes para Lembrar

```bash
# Ver status dos arquivos
git status

# Ver histórico de commits
git log --oneline

# Ver diferenças nos arquivos modificados
git diff

# Voltar alterações não commitadas
git checkout -- nome-do-arquivo

# Ver todas as branches
git branch -a

# Trocar de branch
git checkout nome-da-branch
```

## 🆘 Problemas Comuns

### Erro ao fazer push pela primeira vez
```bash
# Se aparecer erro na primeira vez, use:
git push -u origin nome-da-sua-branch
```

### Conflitos de merge
- Se houver conflitos, abra os arquivos marcados
- Resolva os conflitos manualmente
- Adicione os arquivos resolvidos: `git add .`
- Complete o merge: `git commit`

### Esqueceu de criar branch
```bash
# Se já fez alterações na main, crie uma branch e mova as alterações:
git checkout -b nova-branch
git add .
git commit -m "Suas alterações"
git push origin nova-branch
```

## 📞 Contato

Em caso de dúvidas, entre em contato com o líder da equipe ou consulte a documentação do Git.

## 🎯 Dicas Importantes

- ✅ Sempre teste suas alterações antes de fazer commit
- ✅ Use mensagens de commit claras e descritivas
- ✅ Mantenha sua branch atualizada com a main
- ✅ Faça commits pequenos e frequentes
- ❌ Nunca trabalhe diretamente na branch main
- ❌ Não faça commits com arquivos quebrados