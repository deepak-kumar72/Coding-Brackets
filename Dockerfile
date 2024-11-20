FROM node

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

RUN npx prisma generate
RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]



