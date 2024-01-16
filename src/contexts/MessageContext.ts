import { createContext } from "react";
import message from "../types/messageType";

export const MessageContext = createContext<message | undefined>(undefined);

