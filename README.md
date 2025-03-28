# 🎉 CS4067 Event Booking System

## 📌 Overview
This is a **microservices-based Event Booking System** designed to facilitate event creation, booking, and notifications. The system is built using:
- **Spring Boot (Backend Services)**
- **React (Frontend)**
- **PostgreSQL & MongoDB (Databases)**
- **RabbitMQ (Messaging)**
- **Docker & Kubernetes (Deployment)**

## 📂 Folder Structure
```
/CS4067-EventBooking
│── /user-service-codebase      # User authentication & management
│── /event-service-codebase     # Event creation & management
│── /booking-service-codebase   # Event booking & payments
│── /notification-service-codebase # Email/SMS notifications
│── /frontend-service-codebase  # React frontend
│
│── /kubernetes
│   ├── namespace.yaml          # Namespace definition
│   ├── configmap.yaml          # Non-sensitive environment variables
│   ├── secrets.yaml            # Encrypted credentials (DB passwords, API keys)
│   ├── deployment-service-user.yaml       # User Service Deployment & Service
│   ├── deployment-service-event.yaml      # Event Service Deployment & Service
│   ├── deployment-service-booking.yaml    # Booking Service Deployment & Service
│   ├── deployment-service-notification.yaml # Notification Service Deployment & Service
│   ├── deployment-service-frontend.yaml   # Frontend Deployment & Service
│   ├── ingress.yaml            # Ingress rules for service routing
│
│── docker-compose.yml          # Local development setup
│── README.md                   # Project documentation
```

## 🚀 Getting Started
### 🛠 Prerequisites
Ensure you have the following installed:
- **Docker & Docker Compose**
- **Kubernetes & kubectl**
- **Minikube (or another Kubernetes cluster)**
- **Ingress Controller (Nginx recommended)**

### 🏗️ Setup Instructions
#### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/CS4067-EventBooking.git
cd CS4067-EventBooking
```

#### **2️⃣ Start Services with Docker (For Local Development)**
```sh
docker-compose up -d
```

#### **3️⃣ Deploy to Kubernetes**
```sh
kubectl apply -f kubernetes/
```

#### **4️⃣ Verify Services**
```sh
kubectl get pods -n online-event-booking-haiderzia
kubectl get services -n online-event-booking-haiderzia
```

#### **5️⃣ Test the Application**
Add this to your `/etc/hosts` file:
```
127.0.0.1 eventbooking.local
```
Then open:
- **Frontend:** `http://eventbooking.local/`
- **User API:** `http://eventbooking.local/api/users`
- **Event API:** `http://eventbooking.local/api/events`
- **Booking API:** `http://eventbooking.local/api/bookings`
- **Notification API:** `http://eventbooking.local/api/notifications`

## 🛠 Tech Stack
| Service | Technology |
|---------|-----------|
| Backend (Microservices) | Java Spring Boot |
| Frontend | React.js |
| Databases | PostgreSQL, MongoDB |
| Messaging | RabbitMQ |
| Containerization | Docker |
| Orchestration | Kubernetes |

## 📜 Environment Variables
Environment variables are stored in `configmap.yaml` and `secrets.yaml`:
- **DATABASE_URL**: PostgreSQL connection string
- **MONGO_URI**: MongoDB connection string
- **RABBITMQ_URL**: RabbitMQ connection string

## 🤝 Contributing
1. Fork the repo
2. Create a new branch (`feature/new-feature`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📜 License
This project is licensed under the MIT License.

