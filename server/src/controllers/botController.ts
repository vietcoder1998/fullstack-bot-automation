import { Request, Response } from 'express';
import Bot from '../models/botModel';

export const createBot = async (req: Request, res: Response) => {
    try {
        const botData = req.body;
        const newBot = new Bot(botData);
        await newBot.save();
        res.status(201).json(newBot);
    } catch (error) {
        res.status(500).json({ message: 'Error creating bot', error });
    }
};

export const getBots = async (req: Request, res: Response) => {
    try {
        const bots = await Bot.find();
        res.status(200).json(bots);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bots', error });
    }
};

export const getBotById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const bot = await Bot.findById(id);
        if (!bot) {
            return res.status(404).json({ message: 'Bot not found' });
        }
        res.status(200).json(bot);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bot', error });
    }
};

export const updateBot = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedBot = await Bot.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBot) {
            return res.status(404).json({ message: 'Bot not found' });
        }
        res.status(200).json(updatedBot);
    } catch (error) {
        res.status(500).json({ message: 'Error updating bot', error });
    }
};

export const deleteBot = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedBot = await Bot.findByIdAndDelete(id);
        if (!deletedBot) {
            return res.status(404).json({ message: 'Bot not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting bot', error });
    }
};