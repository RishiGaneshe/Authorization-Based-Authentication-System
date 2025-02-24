# 🚀 Authorization Based Authentication System  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node-dot-js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![SendGrid](https://img.shields.io/badge/SendGrid-00A1E0?style=for-the-badge&logo=sendgrid&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A **secure and scalable authentication system** implementing **role-based authorization**, **JWT authentication**, and **Redis-based token blacklisting**. Designed for **production-grade applications**, this system ensures **data consistency**, **security**, and **atomic operations** with **database transactions**.  

## 🔥 Features  

✅ **Role-Based Authentication** – Assign and validate user roles for access control.  
✅ **JWT Authentication** – Secure authentication with JSON Web Tokens.  
✅ **Redis Token Blacklisting** – Secure session management and logout handling.  
✅ **SendGrid Email OTP Verification** – Secure user registration with email-based OTP.  
✅ **Password Hashing** – Strong password security using **Argon2 / Bcrypt**.  
✅ **Database Transactions & Atomicity** – Prevents partial updates and ensures consistency.  


---

## 🛠️ Technology Stack  

- **Node.js & Express.js** – Backend framework  
- **MongoDB Atlas** – Cloud database (⚠️ *Required for transaction support*)  
- **Mongoose** – ODM for MongoDB  
- **JSON Web Tokens (JWT)** – Secure authentication  
- **Redis** – Token blacklisting for session management  
- **SendGrid** – Email OTP verification  
- **Argon2 / Bcrypt** – Password hashing for security  

---

## ⚠️ Caution  

🔴 **MongoDB Atlas is required for transactions!**  
Local MongoDB does **not** support transactions due to the lack of **replica set initialization**, which is essential for **atomicity and consistency** in database operations.  

---

## 📌 Why Use This Authentication System?  

✔️ **Security-First Approach** – Implements best practices for authentication & authorization.  
✔️ **Scalable & Maintainable** – Designed for real-world applications with high user loads.  
✔️ **Database Integrity with Transactions** – Ensures **atomicity**, so either all steps complete or none do.  
✔️ **Session Management** – Token blacklisting prevents **replay attacks** and **unauthorized access**.  
✔️ **Reliable OTP Verification** – Ensures valid user registrations with email verification.  


---

## 📌 How Transactions Ensure Data Integrity  

This system uses **MongoDB transactions** to ensure **atomic operations** when:  
- **Creating a new user** – The user profile is saved **only if OTP verification succeeds**.  
- **Updating user roles** – Ensures **role updates** are committed only if all conditions are met.  
- **Revoking JWT tokens** – The token is **blacklisted only if** session revocation succeeds.  

By using transactions, we prevent **partial updates**, maintaining **data consistency** across the database.  

---

## ⚙️ Setup & Configuration  

To use this authentication system, you **must provide the following environment variables**:  

### **1️⃣ MongoDB Atlas Connection URL, Redis Connection URL, SendGrid Email API (Required)**  
This system requires a :
**MongoDB Atlas cloud database** for transaction support,
**Redis database**  for token blacklisting,
**SendGrid Email API** for user creation and OTP purpose.

```env
# Redis Connection URL (⚠️ Required for Token Blacklisting)
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority

# Redis Connection URL (⚠️ Required for Token Blacklisting)
REDIS_URL=redis://<your-redis-host>:<port>

# SendGrid API Key (⚠️ Required for OTP Emails)
SENDGRID_API_KEY=SG.xxxxxxx.yyyyyyyyyyyyyyyyyyyyyyyy
