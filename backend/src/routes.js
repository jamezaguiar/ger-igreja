import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({
    message: 'Sistema de Gerencia de Membros e Finanças para Igrejas',
  });
});

export default routes;
