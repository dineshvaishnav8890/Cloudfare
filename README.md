# 🌐 Scalable Static Website Deployment with S3, Cloudflare & GitHub Actions

This project demonstrates how to **host and auto-deploy a static website** using **AWS S3 (Free Tier)**, **Cloudflare (Free CDN + HTTPS)**, and **GitHub Actions for CI/CD**.

> ✅ Perfect for beginners learning modern web hosting and automation.

---

## 🚀 Live Website

🔗 [https://www.dinesh.icu](https://www.dinesh.icu)

---

## 🧰 Tools & Technologies Used

- **AWS S3** – Object storage for static website hosting
- **Cloudflare** – CDN, SSL, and DNS management
- **GitHub Actions** – Automates deployment on every commit
- **HTML/CSS** – Static website content
- **Bash** – Sync script (optional)

---

## 📁 Project Structure

.
├── index.html
├── styles.css
└── .github
└── workflows
└── deploy.yml # GitHub Actions workflow for CI/CD




---

## 🛠️ Setup Instructions (Step-by-Step)

### ✅ 1. Create and Upload Static Website

- Create a simple `index.html` and optional `styles.css`
- Initialize Git repo and push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main






✅ 2. Create S3 Bucket for Website Hosting
Bucket Name: www.dinesh.icu

Disable "Block All Public Access"

Enable Static Website Hosting with index.html

Add the following Bucket Policy:

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::www.dinesh.icu/*"
    }
  ]
}



✅ 3. Configure Cloudflare
Add your domain dinesh.icu to Cloudflare

Change your domain registrar’s nameservers to Cloudflare’s

Add a CNAME record:

Name: www

Target: www.dinesh.icu.s3-website.<region>.amazonaws.com

Set SSL Mode to Flexible

Enable "Always Use HTTPS"






🔐 Store AWS credentials in GitHub → Repository → Settings > Secrets.




✅ 4. Set up GitHub Actions (CI/CD)

name: Deploy to S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout Code
      uses: actions/checkout@v3

    - name: Sync to S3
      uses: jakejarvis/s3-sync-action@master
      with:
        args: --delete
      env:
        AWS_S3_BUCKET: www.dinesh.icu
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        AWS_REGION: eu-north-1
        SOURCE_DIR: .




📄 Deployment Report
Step	Status
S3 Bucket Setup	✅ Success
Cloudflare Domain Setup	✅ Success
GitHub Actions CI/CD	✅ Success
SSL & HTTPS Configuration	✅ Success
Website Live	✅ Success


🚀 Live Website
🔗 Visit https://www.dinesh.icu





