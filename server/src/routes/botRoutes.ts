import { Router } from 'express';
import { createBot, getBots, getBotById, updateBot, deleteBot } from '../controllers/botController';

const router = Router();

// Route to create a new bot
router.post('/bots', createBot);

// Route to get all bots
router.get('/bots', getBots);

// Route to get a bot by ID
router.get('/bots/:id', getBotById);

// Route to update a bot by ID
router.put('/bots/:id', updateBot);

// Route to delete a bot by ID
router.delete('/bots/:id', deleteBot);

export default router;