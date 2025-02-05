import { model, Schema, Types, Document } from "mongoose";

export interface IInteraction {
  user: Types.ObjectId;
  action: string;
  actionId: Types.ObjectId;
  actionType: "question" | "answer";
}

export interface IInteractionDocument extends IInteraction, Document {}
const interactionSchema = new Schema<IInteraction>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    action: { type: String, required: true },
    actionId: { type: Schema.Types.ObjectId, required: true }, // Question, Answer, Comment, etc.
    actionType: { type: String, enum: ["question", "anwser"], required: true }, // Question, Answer, Comment, etc.
  },
  { timestamps: true }
);

const Interaction = model<IInteraction>("Interaction", interactionSchema);

export default Interaction;
