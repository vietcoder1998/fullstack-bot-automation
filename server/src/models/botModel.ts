import mongoose, { Document, Schema } from 'mongoose';

export interface IBot extends Document {
    name: string;
    token: string;
    createdAt: Date;
    updatedAt: Date;
}

const BotSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

BotSchema.pre<IBot>('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const BotModel = mongoose.model<IBot>('Bot', BotSchema);

export default BotModel;