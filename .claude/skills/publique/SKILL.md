---
name: publique
description: Commita as alterações do site, envia ao GitHub (main) e publica em produção na Vercel com `vercel --prod`, conferindo o resultado. Use quando o usuário digitar /publique.
disable-model-invocation: true
argument-hint: "[resumo opcional das alterações para a mensagem do commit]"
---

# /publique — commit, push e deploy em produção

Publica o estado atual do projeto em https://swprojetadosslz.com.br. Responda ao usuário em português.
Se `$ARGUMENTS` vier preenchido, use como base da mensagem do commit.

## 1. Conferir antes de commitar

1. `git status --short` e `git diff --stat`. Se não houver nada para commitar **e** `git log origin/main..main` estiver vazio, avise que não há o que publicar e pare.
2. Identidade do Git: `git config user.email` precisa ser **cmpinheiro@msn.com** (e-mail da conta GitHub `marcelo-pinheiro-dev`). Com outro e-mail a Vercel **bloqueia** o deploy ("Implantação bloqueada"). Se estiver diferente, pare e pergunte ao usuário antes de alterar.
3. Arquivos que não devem subir — revise a lista de novos/alterados e pare para perguntar se aparecer:
   - arquivo acima de ~10 MB (ex.: vídeos originais; o site usa versões otimizadas em `public/videos/`);
   - `.env*` (exceto `.env.example`), tokens, chaves ou credenciais.
   Arquivos grandes que não são usados pelo site vão no `.gitignore` **e** no `.vercelignore`.
4. Checagens rápidas (não rode `npm run build` local: na pasta do OneDrive leva minutos e a Vercel já builda):
   - `npx tsc --noEmit` — se falhar com erro em `.next/types` referenciando rota apagada, é cache velho: ignore esse caso; qualquer outro erro, pare e mostre.
   - ESLint nos arquivos `.ts/.tsx` alterados (`npx eslint <arquivos>`), **em segundo plano**: nesta pasta do OneDrive ele leva vários minutos só para carregar, então não bloqueie o commit por ele. Se terminar com erros antes do deploy, pare e mostre; se terminar depois, relate no resumo final.

## 2. Commit e push

1. Adicione os arquivos pelo nome (evite `git add -A` às cegas) e confira com `git status`.
2. Mensagem em português, no padrão do histórico (`feat:`, `fix:`, `style:`, `chore:`…), com título curto e uma lista do que mudou. Termine com a linha de coautoria indicada pelo sistema.
3. `git push origin main`. Nunca use `--force` nem `commit --amend` em commit já enviado.

## 3. Deploy na Vercel

O projeto já está vinculado (`.vercel/project.json`). Rode **em segundo plano** (leva alguns minutos):

```bash
export NODE_OPTIONS=--use-system-ca && vercel --prod
```

`NODE_OPTIONS=--use-system-ca` é obrigatório nesta máquina; sem ele a CLI falha com "unable to get local issuer certificate".

Ao terminar, leia a saída e confirme `"readyState": "READY"` e a linha `Aliased https://swprojetadosslz.com.br`.
- `BLOCKED`: quase sempre é o e-mail do autor do commit (passo 1.2). Corrija a identidade e faça um novo commit (pode ser `git commit --allow-empty`) em vez de reescrever o histórico.
- `ERROR`: mostre o link "Inspect" ao usuário e o trecho de erro do build.

## 4. Verificar e relatar

1. `curl -s -o /dev/null -w "%{http_code}" https://swprojetadosslz.com.br` deve retornar `200`.
2. Relate ao usuário, em poucas linhas: hash e título do commit, URL de produção, link "Inspect" da Vercel e qualquer aviso relevante (lint, arquivos ignorados).
