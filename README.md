# 📌 Todo-List Application

Une application simple de gestion de tâches développée avec **Java (Spring Boot)** pour le backend et **JavaScript, HTML, CSS** pour le frontend.

## 📋 Fonctionnalités
- Ajouter une tâche ✅
- Supprimer une tâche ❌
- Marquer une tâche comme terminée ✔️
- Stockage des tâches dans une base de données (H2, MySQL, PostgreSQL) 🗄️

## 🏗️ Architecture
- **Frontend** : HTML, CSS, JavaScript (Fetch API)
- **Backend** : Java + Spring Boot (REST API)
- **Base de données** : H2 (en mémoire) / MySQL / PostgreSQL

## 📂 Structure du projet
```
📦 todo-list-app
 ┣ 📂 backend  # Spring Boot Backend
 ┃ ┣ 📂 src/main/java/com/todo
 ┃ ┃ ┣ 📜 TodoApplication.java
 ┃ ┃ ┣ 📜 Todo.java
 ┃ ┃ ┣ 📜 TodoRepository.java
 ┃ ┃ ┣ 📜 TodoService.java
 ┃ ┃ ┗ 📜 TodoController.java
 ┃ ┗ 📜 application.properties
 ┣ 📂 frontend  # HTML/CSS/JS Frontend
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 styles.css
 ┃ ┗ 📜 script.js
 ┗ 📜 README.md
```

## 🚀 Installation

### 1️⃣ Backend - Java (Spring Boot)
#### 📌 Prérequis
- **Java 21+** installé
- **Maven** installé

#### 📌 Étapes
1. Cloner le projet :
   ```sh
   git clone https://github.com/mon-projet/todo-list.git
   cd todo-list/backend
   ```
2. Installer les dépendances :
   ```sh
   mvn clean install
   ```
3. Lancer l’application :
   ```sh
   mvn spring-boot:run
   ```
4. L’API est accessible à `http://localhost:8080/api/todos`

---

### 2️⃣ Frontend - JavaScript
#### 📌 Étapes
1. Aller dans le dossier `frontend` :
   ```sh
   cd ../frontend
   ```
2. Ouvrir `index.html` dans un navigateur

---

## 📡 API Endpoints
| Méthode | Endpoint            | Description              |
|---------|---------------------|--------------------------|
| GET     | `/api/todos`        | Récupérer toutes les tâches |
| POST    | `/api/todos`        | Ajouter une nouvelle tâche |
| DELETE  | `/api/todos/{id}`   | Supprimer une tâche |

## 🛠️ Technologies utilisées
- **Spring Boot** (Backend API)
- **H2 / MySQL / PostgreSQL** (Base de données)
- **HTML, CSS, JavaScript** (Frontend UI)

## 📜 Licence
Ce projet est sous licence MIT.

---

### ✨ Améliorations futures
- ✅ Modifier une tâche existante
- 🔐 Ajout d’une authentification (JWT)
- 📱 Amélioration du design responsive

🚀 **Prêt à coder ?** Clone ce projet et commence à l'améliorer ! 🎯

