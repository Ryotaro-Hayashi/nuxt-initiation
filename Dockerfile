FROM node:12.13.0-alpine

# apkは, alpineのパッケージマネージャー
# -g でグループ化
RUN apk update && \
    npm install -g npm && \
    npm install -g @vue/cli && \
    npm install -g create-nuxt-app