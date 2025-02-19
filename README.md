# TagLuxe
Website bán hàng Tagluxe
## 1 Các yêu cầu để chạy project
- NodeJS & ExpressJS
- Template Engine Handlebars
- MongoDB
## 2 Cài đặt công cụ
### a. NodeJS
[Tải NodeJS v22.14.0(LTS)](https://nodejs.org/dist/v22.14.0/node-v22.14.0-x64.msi)
Sau khi cài đặt, mở Terminal trong VSCode nhập `node -v` và `npm -v` để kiểm tra phiên bản, cài đặt thành công khi xuất hiện phiên bản
### b. MongoDB
[MongoDB](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-8.0.4-signed.msi)
Sau khi cài đặt, mở MongoDB và connect localhost, tạo database có tên `tagluxe_shopping_dev` và *tạm thời import data từ file .json của Q.Huy*
### c. Các công cụ còn lại
Sau khi tải project về. Trong đó, mở Terminal trong VSCode và nhập `npm install` để cài đặt các package còn lại trong package.json và package-lock-json
## 3 Hướng dẫn chạy project
Mở và split 2 terminal trong VSCode, một bên nhập `npm start`, bên còn lại nhập `npm run watch`. Từ terminal của *npm start*, truy cập đường link của dòng `App listening at http://localhost:3000/` để chạy trang web
### Giải thích
- **npm start**: chạy chương trình và lắng nghe thay đổi từ file `.js`
- **npm run watch**: lắng nghe thay đổi từ file `.scss`
## Lưu ý
- Phải css trong file `.scss`, **không được nhầm lẫn** với file `.css`
- Nên refresh trang web mỗi khi thay đổi code

