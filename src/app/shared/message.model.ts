export class Message {
    constructor(public content: string,
                public senderName: string,
                public time: string,
                public isMessageRead: boolean) {
    }
}