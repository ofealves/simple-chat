import { useUser } from "@/context/UserContext";
import { useChat } from "@/context/ChatContext";
import { KeyboardEvent, useState } from "react";

export const NameInput = () => {
    const [nameInput, setNameInput] = useState('');
    const userCtx = useUser();
    const chatCtx = useChat();

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code.toLowerCase() === 'enter') {
            setUserAndProceed();
        }
    };

    const setUserAndProceed = () => {
        if (nameInput.trim() !== '' && nameInput !== 'bot') {
            // Salva o nome do usuário
            userCtx?.setUser(nameInput.trim());

            // Adiciona a mensagem de boas-vindas do bot
            chatCtx?.addMessage('bot', `Bem-vinda ao chat, ${nameInput.trim()}!❤️`);
        }
    };

    return (
        <div className="mt-14">
            <p className="text-xl mb-4">Qual o seu nome?</p>
            <div className="flex gap-3 items-center text-lg">
                <input
                    type="text"
                    className="flex-1 border border-white/30 rounded-md px-4 py-3 text-white bg-white/20 outline-none"
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    onKeyUp={handleKeyUpAction}
                />
                <button
                    className="px-4 py-3 text-white bg-blue-500 rounded-md"
                    onClick={setUserAndProceed}  // Chama a mesma função ao clicar
                >
                    Confirmar
                </button>
            </div>
        </div>
    );
};
