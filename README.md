# 📌 Food-App Backend (Microservices Architecture) 🍽️

A **scalable** and **modular** microservices-based backend for a food delivery application, built with **TypeScript, Docker, PostgreSQL, Prisma, RabbitMQ/Kafka**, and a **service discovery mechanism**.

---

## 🚀 Tech Stack & Features

- **Microservices Architecture** – Modular and scalable design  
- **API Gateway** – Centralized request handling  
- **Authentication & Authorization** – Secure login with JWT & OAuth  
- **Database** – PostgreSQL with Prisma ORM  
- **Event-Driven Communication** – RabbitMQ/Kafka for inter-service messaging  
- **Containerization** – Docker for easy deployment  
- **Service Discovery** – Consul/Eureka for dynamic service registration  
- **Logging & Monitoring** – Integrated with Prometheus & Grafana  
- **Scalability** – Supports horizontal scaling with load balancing  
- **Automated CI/CD** – GitHub Actions for continuous integration and deployment  

---

## 📂 Microservices Overview

| Service          | Description                               | Port  |
|-----------------|-------------------------------------------|------|
| **Auth Service**  | Manages authentication (JWT, OAuth)      | 4001  |
| **User Service**  | Handles user profiles & data management | 4002  |
| **Restaurant Service** | Stores restaurant details & menus  | 4003  |
| **Order Service** | Manages orders & processing            | 4004  |
| **Payment Service** | Integrates payment gateways          | 4005  |
| **Delivery Service** | Handles delivery & tracking        | 4006  |
| **API Gateway**  | Centralized API routing & security     | 8080  |

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/food-app-backend.git
cd food-app-backend
