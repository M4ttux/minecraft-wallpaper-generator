import chatCsv from './twitch-chat-editado.csv?raw';

export interface ChatMessage {
	time: number;
	userName: string;
	userColor: string;
	message: string;
}

export function parseChatCsv(csv: string): ChatMessage[] {
	const lines = csv.replace(/^\uFEFF/, '').split(/\r?\n/).filter(Boolean);
	if (lines.length === 0) return [];

	const rows = lines.slice(1);
	const messages: ChatMessage[] = [];

	for (const line of rows) {
		const [timeRaw, userNameRaw, userColorRaw, ...messageParts] = line.split(';');
		if (!timeRaw || !userNameRaw || !userColorRaw) continue;

		const time = Number(timeRaw.trim());
		const userName = userNameRaw.trim();
		const userColor = userColorRaw.trim();
		const message = messageParts.join(';').trim();

		if (!Number.isFinite(time) || !message) continue;

		messages.push({
			time,
			userName,
			userColor,
			message,
		});
	}

	return messages;
}

export async function loadChatMessages(): Promise<ChatMessage[]> {
	return parseChatCsv(chatCsv);
}
