# Example for Django and React using GraphQL 

Django 和 React 以 GraphQL 作 API 以實現前後端分離的範例 

## Start Project
1. clone project
2. 複製 `frontend` 底下的 `.env.example` 為 `.env`，並設定相關資料
3. 複製 `backend` 底下的 `.env.example` 為 `.env`，並設定相關資料
4. 在 `frontend` 底下使用指令 `npm run build` (非必要，但建議)
5. 建立 super user，在 `backend` 底下使用指令 `python manage.py createsuperuser`，並輸入後續資料
6. 處理資料庫，在 `backend` 底下使用指令 `python manage.py makemigrations` 再輸入 `python manage.py migrate`
5. 啟動 Django Server，在 `backend` 底下使用指令 `python manage.py runserver`
6. 啟動 React Server，在 `frontend` 底下使用指令 `npm start`
7. 打開瀏覽器，輸入 `localhost:3000` 即可看到 react 畫面


## Project Structure
- backend
    - 採用 ~~MVT~~ MVC
    - 採用 Layered
        - 參考 `article/` 底下，`user/` 沒有弄，為了對照用
    - GraphQL
        - 參考 `graphql_api/` 底下
- frontend
    - React 專案
    - 採用 Redux
    - 採用 Presentational & Container Component
