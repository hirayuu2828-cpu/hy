# AI Bridge ポートフォリオサイト

`ai-company-business-plan.md` のサービス内容を反映した、静的なランディングページです。
ビルド不要（プレーンなHTML/CSS/JS）で、そのままGitHub Pages等にデプロイできます。

## ローカルでの確認

```bash
cd site
python3 -m http.server 8000
# http://localhost:8000 を開く
```

## デプロイ（例: GitHub Pages）

1. リポジトリの Settings > Pages で、公開元を `site/` ディレクトリ（またはこのフォルダの内容をルートに配置したブランチ）に設定する
2. 反映まで数分待つと、公開URLが発行される

## 本番運用前に必ずやること

- `index.html` 内の `contact@example.com` を実際の連絡先メールアドレスに差し替える
- お問い合わせフォームの送信先（`<form action="...">`）を設定する
  - [Formspree](https://formspree.io) 等のフォーム送信サービスに登録し、発行されたURLを `action` に設定する
  - もしくは独自のサーバーサイド処理を用意する
- 屋号「AI Bridge」は仮称のため、開業届提出時に決定した正式な屋号に差し替える
- サービス内容・料金は `ai-company-business-plan.md` の内容に基づく仮の数値のため、実態に合わせて調整する
