FROM cypress/included:12.17.4

WORKDIR /app

ENV CYPRESS_VERIFY_TIMEOUT=100000
ENV CI=1

COPY package*.json ./
RUN npm ci

COPY . .

CMD ["cypress", "run", "--browser", "electron", "--headless"]