# 🚀 Backend com Node.js + Express + Firebase (Firestore)

Este plano descreve como criar uma API backend separada usando Node.js com Express, integrada ao Firebase Firestore.

---

## ✅ Etapas do Projeto

### 1. Inicializar o Projeto Node.js
```bash
mkdir backend
cd backend
npm init -y
npm install express cors dotenv firebase-admin
```

---

### 2. Estrutura de Pastas
```
backend/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── config/
│   └── index.js
├── .env
├── package.json
```

---

### 3. Configurar Firebase Admin SDK
1. No Firebase Console: **Configurações > Contas de serviço**
2. Gere uma **chave privada (JSON)** e coloque em `backend/firebaseKey.json`

```js
// src/config/firebase.js
const admin = require('firebase-admin');
const serviceAccount = require('../../firebaseKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };
```

---

### 4. Criar o Servidor Express
```js
// src/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const templateRoutes = require('./routes/templates');
app.use('/api/templates', templateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

### 5. Criar Rotas e Controladores
```js
// src/routes/templates.js
const express = require('express');
const router = express.Router();
const { getTemplates } = require('../controllers/templateController');

router.get('/', getTemplates);
module.exports = router;
```

```js
// src/controllers/templateController.js
const { db } = require('../config/firebase');

exports.getTemplates = async (req, res) => {
  try {
    const snapshot = await db.collection('templates').get();
    const templates = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(templates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
```

---

### 6. Testar Localmente
```bash
node src/index.js
```
Acesse: `http://localhost:3000/api/templates`

---

### 7. Deploy no Render
- Crie um repositório no GitHub
- Suba o código
- Acesse [Render.com](https://render.com/)
- Crie um novo serviço Web apontando para o repositório
- Configurações:
  - **Start command:** `node src/index.js`
  - **Env vars:** adicione `PORT`, configs do Firebase, etc.

---

### 8. Futuras Melhorias
- Validação de dados
- Autenticação (Firebase Auth)
- Integração com gateways de pagamento

---


